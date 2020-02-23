import { Button, Result, Descriptions, Statistic } from 'antd';
import React from 'react';
import styles from './index.less';
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import Link from "umi/link";


const Success = () => {

  const extra = (
    <>
      <Link to='/administrative/contract-register'>

      <Button type="primary" >
        <FormattedMessage id="client.success.addcontract" />
      </Button>
      </Link>
      <Link to='/administrative/client-list'>
        <Button>
          <FormattedMessage id="client.success.return" />
        </Button>
      </Link>
    </>
  );

  return (

    <Result
      status="success"
      title={ formatMessage({
        id: 'client.success.title',
      })}
      extra={extra}
      className={styles.result}
    >
    </Result>

  )
}

export default Success
