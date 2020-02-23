import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import {
  Table,
  Divider,
  Popconfirm,
  message, Icon,
} from 'antd'
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import {FormattedMessage} from "umi-plugin-react/locale";
import { GET_CLIENTS } from '@/atomic_data/query'
import styles from "@/pages/administrative/adminUserList/style.less";
import Link from "umi/link";

const CustomerList = () => {
  const { data, error, loading } = useQuery(GET_CLIENTS)
  console.log(error)
  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        <FormattedMessage id="client.list.description" />
      </p>
      <div className={styles.contentLink}>
        <a>
          <Link to="/administrative/client-register">
            <Icon type="plus"/> <FormattedMessage id='client.list.add'/>
          </Link>

        </a>

      </div>
    </div>
  );
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'full_name',
      key: 'full_name',
      fixed: 'left',
      align: 'center',
      width: 100,
    },
    {
      title: 'ID',
      dataIndex: 'ID',
      key: 'ID',
      align: 'center',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
    },
  ]

  return(
    <PageHeaderWrapper content={content} >
      <Table dataSource={data.Clients} columns={columns} loading={loading} rowKey="ID" scroll={{ x: 300 }} />


    </PageHeaderWrapper>


  )
}
export default CustomerList
