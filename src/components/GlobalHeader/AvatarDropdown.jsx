import { Avatar, Icon, Menu, Spin, Switch } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
class AvatarDropdown extends React.Component {

  componentDidMount(){
    const user = this.props.user
    if(user === "error" &&  !localStorage.getItem("idome_authority_token") || !localStorage.getItem("idome_authority_roles")){
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }
    }
  }

  onMenuClick = event => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    router.push(`/account/${key}`);
  };
  render() {

    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
      user,

    } = this.props;


    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <Icon type="user" />
            <FormattedMessage id="menu.account.center" defaultMessage="account center" />
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <Icon type="setting" />
            <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        {/*{menu && (*/}
        {/*  <Menu.Item key="layout">*/}
        {/*    <FormattedMessage id="menu.account.setlayout" defaultMessage="account layout" />*/}
        {/*    <Switch size={"small"}/>*/}
        {/*  </Menu.Item>*/}
        {/*)}*/}
        {/*{menu && <Menu.Divider />}*/}

        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>

      </Menu>
    );
    return currentUser && currentUser.full_name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={styles.name}>{currentUser.full_name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
