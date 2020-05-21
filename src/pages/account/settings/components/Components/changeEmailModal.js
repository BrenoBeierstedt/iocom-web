import React, { Component } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  notification
} from 'antd'
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import {Mutation} from "react-apollo";
import { UPDATE_MYSELF } from "@/atomic_data/mutation";
import {connect} from "dva";
const FormItem = Form.Item;

const openNotificationWithIcon = type => {
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

class ChangeEmailModal extends Component {


  state = {
    loading: false,
    value: undefined,
    submited: false
  };
  constructor(props) {
    super(props);
    this.state = {
      type: props.defaultActiveKey,
      tabs: [],
      active: {},
    };
  }
  onChange = value => {
    this.setState({ value });
  };
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e, updateMyself) => {
    e.preventDefault();

    this.setState({ loading: true });

    this.props.form.validateFields((err, values) => {
        console.log(values)
        if(!err) {
          updateMyself({
            variables: {
              email: values.email,
              full_name: this.props.currentUser.full_name,
            },
          }).then((data) => {
            console.log(data)
            openNotificationWithIcon('success')
this.props.hideEmail()
          }).then(
            dispatch({
              type: 'user/fetchCurrent',
              payload: { ...values },
            })
          ).catch((error) => {
            if (error) {
              console.log(error)
            }
          })
        }
      }
    )}


  render() {
    const { getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 7,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 12,
        },
        md: {
          span: 10,
        },
      },
    };


    return (

      <Modal
        // title="Basic Modal email"
        visible={this.props.isShowingChangeEmail}
        // onOk={handleOk}
        onCancel={this.props.hideEmail}
        width={600}
        title={<FormattedMessage id="accountandsettings.basic.email-modal.title"/>}
        footer={[
          <Button htmlType="submit" form="form" type="primary"><FormattedMessage id="accountandsettings.basic.email-modal.button"/></Button>
        ]}
      >
        <>

            <Mutation mutation={UPDATE_MYSELF}>
            {
              (updateMyself) => {
                return (
                  <Form
                    hideRequiredMark
                    style={{
                      marginTop: 8,
                    }}
                    name="basic"
                    id="form"
                    initiallalues={{
                      public: '1',
                    }}
                    onSubmit={e => this.handleSubmit(e, updateMyself)}
                  >
                    <FormItem
                      {...formItemLayout}
                      label={<FormattedMessage id="accountandsettings.basic.email-modal.label"/>}
                      name="email"
                    >
                      {getFieldDecorator('email', {
                        rules: [{
                          required: true, message: formatMessage({
                            id: 'accountandsettings.basic.email-modal.required',
                          })
                        }],
                      })(
                        <Input/>
                      )}
                    </FormItem>

                  </Form>
                )
              }
            }
            </Mutation>

        </>
      </Modal>

    )
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Form.create({})(ChangeEmailModal))
