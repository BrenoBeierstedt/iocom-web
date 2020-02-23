import { Alert, Checkbox, Icon } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import LoginComponents from './components/Login';
import styles from './style.less';

const { Tab, Email, Password, Mobile, Captcha, Submit } = LoginComponents;

@connect(({ userAndlogin, loading }) => ({
  userAndlogin,
  submitting: loading.effects['userAndlogin/login'],
}))
class Login extends Component {
  loginForm = undefined;

  state = {
    type: 'account',
    autoLogin: true,
  };



  handleSubmit = (err, values, auth, status) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'userAndlogin/login',
        payload: { ...values, type, auth, status },
      });
    }
  };

  onTabChange = type => {
    this.setState({
      type,
    });
  };


  renderMessage = content => (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );

  render() {
    const { userAndlogin, submitting } = this.props;
    const { status, type: loginType } = userAndlogin;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <LoginComponents
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          {status === 'error' &&
          loginType === 'account' &&
          !submitting &&
          this.renderMessage(
            formatMessage({
              id: 'userandlogin.login.message-invalid-credentials',
            }),
          )}
          <Email
            name="email"
            placeholder={`${formatMessage({
              id: 'userandlogin.login.email',
            })}`}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'userandlogin.email.required',
                }),
              },
            ]}
          />
          <Password
            name="password"
            placeholder={`${formatMessage({
              id: 'userandlogin.login.password',
            })}`}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'userandlogin.password.required',
                }),
              },
            ]}
          />
          <div>

            <a
              style={{
                float: 'right',
              }}
              href=""
            >
              <FormattedMessage id="userandlogin.login.forgot-password" />
            </a>
          </div>
          <Submit loading={submitting}>
            <FormattedMessage id="userandlogin.login.login" />
          </Submit>
        </LoginComponents>
      </div>
    );
  }
}

export default Login;
