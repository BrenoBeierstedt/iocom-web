import {Button, Form, Input, Select, Upload, message, Avatar, List, Card, notification} from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, {Component, Fragment, useEffect, useState} from 'react';
import { connect } from 'dva';
import styles from './BaseView.less';
import jwt_decode from "jwt-decode";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {GET_MYSELF} from "@/atomic_data/query";
import useChangeEmailModal from "@/pages/account/settings/components/Components/useChangeEmailModal";
import useChangeNameModal from "@/pages/account/settings/components/Components/useChangeNameModal";
import ChangeNameModal from "./Components/changeNameModal";
import ChangeEmailModal from "./Components/changeEmailModal";
import router from "umi/router";
import {CREATE_USER_AVATAR} from "@/atomic_data/mutation";
import { useDispatch } from 'dva'


const openAvatarNotification = type => {
  notification[type]({
    message: formatMessage({
      id: 'accountandsettings.basic.email-modal.success',
    }),
    description:
      formatMessage({
        id: 'accountandsettings.basic.email-modal.success-description',
      }),
  });
};

const AvatarView = ({ avatar }) => {
  const dispatch = useDispatch()
  //TODO:Work on image modal crop to submit new avatar
  const [update, setUpdate] = useState(0)
  const [changeAvatar, {data}] = useMutation(CREATE_USER_AVATAR,{
    update: () => {
      openAvatarNotification("success")
      window.location.reload(false)
      setUpdate(update + 1)
    },
  })
  return(
  <Fragment>
    <div className={styles.avatar_title}>
      <FormattedMessage id="accountandsettings.basic.avatar" defaultMessage="Avatar" />
    </div>
    <div className={styles.avatar}>
      <Avatar size={144} src={avatar} alt="avatar" />
    </div>
    <Upload onChange={(file) =>

      changeAvatar({ variables: { avatar: file } })}>
      <div className={styles.button_view}>
        <Button icon="upload">
          <FormattedMessage
            id="accountandsettings.basic.change-avatar"
            defaultMessage="Change avatar"
          />
        </Button>
      </div>
    </Upload>
  </Fragment>
);
}
const validatorGeographic = (_, value, callback) => {
  const { province, city } = value;

  if (!province.key) {
    callback('Please input your province!');
  }

  if (!city.key) {
    callback('Please input your city!');
  }

  callback();
};

const validatorPhone = (rule, value, callback) => {
  const values = value.split('-');

  if (!values[0]) {
    callback('Please input your area code!');
  }

  if (!values[1]) {
    callback('Please input your phone number!');
  }

  callback();
};


const BaseView = (props) => {

  const decoded = jwt_decode(localStorage.getItem("idome_authority_token"))
  const email = decoded.email
  const {loading, error, data} = useQuery(GET_MYSELF, {variables : {email}});
  // let [user, setUser] = useState(data.Myself.avatar)
  let view = undefined;

  const {isShowingChangeEmail, toggleChangeEmail} = useChangeEmailModal();
  const {isShowingChangeName, toggleChangeName} = useChangeNameModal();

  useEffect(() => {
    setBaseInfo()
  },[])

  const setBaseInfo = () => {
    const { currentUser, form } = props;
    if (props) {
      Object.keys(form.getFieldsValue()).forEach(key => {
        const obj = {};
        obj[key] = currentUser[key] || null;
        form.setFieldsValue(obj);
      });
    }

  };
  const getName = () => {
    try{
      return props.currentUser.full_name.charAt(0)
    }catch(err){
      console.log(err)
      router.push(`/`);
    }
  }
  const getAvatarURL = () => {
    const { currentUser } = props;
    if (currentUser.avatar) {
      return currentUser.avatar;
    }

    return 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
  }

  const getViewDom = ref => {
    view = ref;
  };

  const handlerSubmit = event => {
    event.preventDefault();
    const { form } = this.props;
    form.validateFields(err => {
      if (!err) {
        message.success(
          formatMessage({
            id: 'accountandsettings.basic.update.success',
          }),
        );
      }
    });
  };

  const {
    form: { getFieldDecorator },
  } = props;
  return (
    <>
    <div className={styles.baseView} ref={getViewDom()}>
      <div className={styles.left}>
          <List  layout="vertical">
            <List.Item >
              <List.Item.Meta
                title={formatMessage({
                  id: 'accountandsettings.basic.email',
                })}
                description={props.currentUser.email}
              />
              <Button type="link" onClick={toggleChangeEmail}>
                <FormattedMessage id="accountandsettings.basic.alter-email"  />
              </Button>
            </List.Item>
            <List.Item >
              <List.Item.Meta
                title={formatMessage({
                  id: 'accountandsettings.basic.nickname',
                })}
                description={props.currentUser.full_name}
              />
              <Button type="link" onClick={toggleChangeName}>
                <FormattedMessage id="accountandsettings.basic.alter-name" />
              </Button>
            </List.Item>
          </List>

      </div>
      <div className={styles.right}>
        { props.currentUser.avatar ? (<AvatarView avatar={getAvatarURL()}  />) : (<Avatar size={144} >{getName()}</Avatar>) }
      </div>

    </div>
      <ChangeEmailModal isShowingChangeEmail={isShowingChangeEmail} hideEmail={toggleChangeEmail}/>
      <ChangeNameModal isShowingChangeName={isShowingChangeName} hideName={toggleChangeName}/>

    </>
);

}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Form.create()(BaseView));

