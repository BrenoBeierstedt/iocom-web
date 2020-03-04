import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { useSelector} from 'react-redux'
import { Button, Result } from 'antd';
import Link from 'umi/link';
import React from 'react';
import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <Link to="/">
      <Button size="large">
        <FormattedMessage id="forgot-result.register-result.back-home" />
      </Button>
    </Link>
  </div>
);

const RegisterResult = ({ location }) => {
const email = useSelector(state => state.userAndregister.email)
  console.log(email)
  return (
    <Result
      className={styles.registerResult}
      status="success"
      title={
        <div className={styles.title}>
          <FormattedMessage
            id="forgot-result.register-result.msg"
            values={{
              email: email,
            }}
          />
        </div>
      }

      extra={actions}
    />
  );
}

export default RegisterResult;
