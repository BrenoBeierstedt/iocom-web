import { Button, Col, Form, Input, Popover, Progress, Row, Select, message } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style.less';
import {CHANGE_PASSWORD, FORGOT_PASSWORD} from "@/atomic_data/mutation";
import {Mutation} from "react-apollo";

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="userandregister.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="userandregister.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="userandregister.strength.short" />
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
    const account = form.getFieldValue('email');

    if (userAndregister.status === 'ok') {
      router.push({
        pathname: '/user/forgot-result',
        state: {
          account,
        },
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSubmit = (e, forgotPassword) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields(
      {
        force: true,
      },
      (err, values) => {
        if (!err) {
          forgotPassword({
            variables: {
              email: values.email,
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
            console.log(error)
          })
          const { prefix } = this.state;

        }
      },
    );
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
          <FormattedMessage id="forgot.register.forgot" />
        </h3>
        <Mutation mutation={FORGOT_PASSWORD}>
          {
            (forgotPassword) => {
              return (
        <Form onSubmit={e => this.handleSubmit(e, forgotPassword)}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: formatMessage({
                    id: 'forgot.email.required',
                  }),
                },
                {
                  type: 'email',
                  message: formatMessage({
                    id: 'forgot.email.wrong-format',
                  }),
                },
              ],
            })(
              <Input
                size="large"
                placeholder={formatMessage({
                  id: 'forgot.email.placeholder',
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
              <FormattedMessage id="forgot.register.send" />
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
