import { Button, Col, Form, Input, Popover, Progress, Row, Select, message } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style.less';
import {Mutation} from "react-apollo";
import {CHANGE_PASSWORD} from "@/atomic_data/mutation";

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="new-password.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="new-password.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="new-password.strength.short" />
    </div>
  ),
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

@connect(({ userAndregister, loading }) => ({
  userAndregister,
  submitting: loading.effects['userAndregister/submit'],
}))
class Forgot extends Component {
  state = {
    count: 0,
    confirmDirty: false,
    visible: false,
    help: '',
    prefix: '86',
  };

  interval = undefined;

  componentDidUpdate() {
    const { userAndregister, form } = this.props;
    const account = form.getFieldValue('mail');

    if (userAndregister.status === 'ok') {
      message.success('注册成功！');
      router.push({
        pathname: '/user/new-password-result',
        state: {
          account,
        },
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    console.log(this.props.location.query.key)
  }

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');

    if (value && value.length > 9) {
      return 'ok';
    }

    if (value && value.length > 5) {
      return 'pass';
    }

    return 'poor';
  };

  handleSubmit = (e, passwordChange) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields(
      {
        force: true,
      },
      (err, values) => {
        if (!err) {
          passwordChange({
            variables: {
              recovery_pwd: this.props.location.query.key,
              new_password: values.password,
            },
          }).then((data) => {

            dispatch({
              type: 'userAndregister/submit',
              payload: { ...values, prefix },
            });

          }).catch((error) => {
            if (error.message === 'GraphQL error: user_or_password_incorrect') {
              console.log('email or password is incorrect')
            }
          })
          const { prefix } = this.state;

        }
      },
    );
  };

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;

    if (value && value !== form.getFieldValue('password')) {
      callback(
        formatMessage({
          id: 'new-password.password.twice',
        }),
      );
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;

    if (!value) {
      this.setState({
        help: formatMessage({
          id: 'new-password.password.required',
        }),
        visible: !!value,
      });
      callback('error');
    } else {
      this.setState({
        help: '',
      });

      if (!visible) {
        this.setState({
          visible: !!value,
        });
      }

      if (value.length < 6) {
        callback('error');
      } else {
        const { form } = this.props;

        if (value && confirmDirty) {
          form.validateFields(['confirm'], {
            force: true,
          });
        }

        callback();
      }
    }
  };

  changePrefix = value => {
    this.setState({
      prefix: value,
    });
  };

  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  render() {
    const { form, submitting } = this.props;
    const { getFieldDecorator } = form;
    const { count, prefix, help, visible } = this.state;
    return (
      <div className={styles.main}>
        <br/>
        <br/>

        <h3>
          <FormattedMessage id="new-password.register.register" />
        </h3>
        <Mutation mutation={CHANGE_PASSWORD}>
          {
            (passwordChange) => {
              return (
                <Form onSubmit={e => this.handleSubmit(e, passwordChange)}>
                  <FormItem help={help}>
                    <Popover
                      getPopupContainer={node => {
                        if (node && node.parentNode) {
                          return node.parentNode;
                        }

                        return node;
                      }}
                      content={
                        <div
                          style={{
                            padding: '4px 0',
                          }}
                        >
                          {passwordStatusMap[this.getPasswordStatus()]}
                          {this.renderPasswordProgress()}
                          <div
                            style={{
                              marginTop: 10,
                            }}
                          >
                            <FormattedMessage id="new-password.strength.msg" />
                          </div>
                        </div>
                      }
                      overlayStyle={{
                        width: 240,
                      }}
                      placement="right"
                      visible={visible}
                    >
                      {getFieldDecorator('password', {
                        rules: [
                          {
                            validator: this.checkPassword,
                          },
                        ],
                      })(
                        <Input
                          size="large"
                          type="password"
                          placeholder={formatMessage({
                            id: 'new-password.password.placeholder',
                          })}
                        />,
                      )}
                    </Popover>
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: formatMessage({
                            id: 'new-password.confirm-password.required',
                          }),
                        },
                        {
                          validator: this.checkConfirm,
                        },
                      ],
                    })(
                      <Input
                        size="large"
                        type="password"
                        placeholder={formatMessage({
                          id: 'new-password.confirm-password.placeholder',
                        })}
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    <Button
                      size="large"
                      loading={submitting}
                      className={styles.submit}
                      type="primary"
                      htmlType="submit"
                    >
                      <FormattedMessage id="new-password.register.register" />
                    </Button>

                  </FormItem>
                </Form>
              )
            }
          }
        </Mutation>
      </div>
    );
  }
}

export default Form.create()(Forgot);
