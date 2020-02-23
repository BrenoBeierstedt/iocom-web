import { Button, Result, Descriptions, Statistic } from 'antd';
import React from 'react';
import styles from './index.less';
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import Link from "umi/link";


const Failed = () => {

  const extra = (
    <>

      <Link to='/administrative/client-list'>
        <Button>
          <FormattedMessage id="client.success.return" />
        </Button>
      </Link>
    </>
  );

  return (

    <Result
      status="error"
      title={ formatMessage({
        id: 'client.success.success',
      })}
      extra={extra}
      className={styles.result}
    >
    </Result>

  )
}

export default Failed
