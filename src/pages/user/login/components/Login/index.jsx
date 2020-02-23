import { Form, Tabs } from 'antd';
import React, { Component } from 'react';
import classNames from 'classnames';
import LoginContext from './LoginContext';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';
import LoginTab from './LoginTab';
import styles from './index.less';
import { LOGIN_MUTATION } from '@/atomic_data/mutation';
import { Mutation } from 'react-apollo'

class Login extends Component {
  static Tab = LoginTab;

  static Submit = LoginSubmit;

  static defaultProps = {
    className: '',
    defaultActiveKey: '',
    onTabChange: () => {},
    onSubmit: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      type: props.defaultActiveKey,
      tabs: [],
      active: {},
    };
  }

  onSwitch = type => {
    this.setState(
      {
        type,
      },
      () => {
        const { onTabChange } = this.props;

        if (onTabChange) {
          onTabChange(type);
        }
      },
    );
  };

  getContext = () => {
    const { form } = this.props;
    const { tabs = [] } = this.state;
    return {
      tabUtil: {
        addTab: id => {
          this.setState({
            tabs: [...tabs, id],
          });
        },
        removeTab: id => {
          this.setState({
            tabs: tabs.filter(currentId => currentId !== id),
          });
        },
      },
      form: { ...form },
      updateActive: activeItem => {
        const { type = '', active = {} } = this.state;

        if (active[type]) {
          active[type].push(activeItem);
        } else {
          active[type] = [activeItem];
        }

        this.setState({
          active,
        });
      },
    };
  };

  handleSubmit = (e, loginUser) => {
    e.preventDefault();
    const { active = {}, type = '' } = this.state;
    const { form, onSubmit } = this.props;
    const activeFields = active[type] || [];

    if (form) {
      form.validateFields(
        activeFields,
        {
          force: true,
        },
        (err, values) => {
          if (onSubmit) {
            localStorage.setItem('idome_authority_token', "")
            localStorage.setItem('idome_authority_roles', "")

            loginUser({
              variables: {
                email: values.email,
                password: values.password,
              },
            }).then((data) => {
              localStorage.setItem('idome_authority_token', data.data.LoginUser.token)
              const auth = data.data.LoginUser.token
              const status = data.data.LoginUser.status
              onSubmit(err, values, auth, status );

            }).catch((error) => {
              if (error.message === 'GraphQL error: user_or_password_incorrect') {
                console.log('email or password is incorrect')
                onSubmit(err, values );

              }
            })


          }
        },
      );
    }
  };

  render() {
    const { className, children } = this.props;
    const { type, tabs = [] } = this.state;
    const TabChildren = [];
    const otherChildren = [];
    React.Children.forEach(children, child => {
      if (!child) {
        return;
      }

      if (child.type.typeName === 'LoginTab') {
        TabChildren.push(child);
      } else {
        otherChildren.push(child);
      }
    });
    return (
      <LoginContext.Provider value={this.getContext()}>
        <div className={classNames(className, styles.login)}>
          <Mutation mutation={LOGIN_MUTATION}>
            {
              (loginUser) => {
                return (
                  <Form onSubmit={e => this.handleSubmit(e, loginUser)}>
                    {tabs.length ? (
                      <React.Fragment>
                        <Tabs
                          animated={false}
                          className={styles.tabs}
                          activeKey={type}
                          onChange={this.onSwitch}
                        >
                          {TabChildren}
                        </Tabs>
                        {otherChildren}
                      </React.Fragment>
                    ) : (
                      children
                    )}
                  </Form>
                )
              }
            }
          </Mutation>
        </div>
      </LoginContext.Provider>
    );
  }
}

Object.keys(LoginItem).forEach(item => {
  Login[item] = LoginItem[item];
});
export default Form.create()(Login);
