import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Button, Result } from 'antd';
import Link from 'umi/link';
import React from 'react';
import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <Link to="/">
      <Button size="large">
        <FormattedMessage id="new-password.register-result.back-home" />
      </Button>
    </Link>
  </div>
);

const RegisterResult = ({ location }) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={
      <div className={styles.title}>
        <FormattedMessage
          id="new-password.register-result.msg"

        />
      </div>
    }

    extra={actions}
  />
);

export default RegisterResult;
