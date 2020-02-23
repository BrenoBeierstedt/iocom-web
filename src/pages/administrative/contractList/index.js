import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import {
  Table,
  Divider,
  Popconfirm,
  message,
  Tag, Icon,
} from 'antd'
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import {FormattedMessage} from "umi-plugin-react/locale";
import { GET_CONTRACTS } from '@/atomic_data/query'
import styles from "@/pages/administrative/adminUserList/style.less";
import Link from "umi/link";

const ContractList = () => {
  const { data, error, loading } = useQuery(GET_CONTRACTS)


  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        <FormattedMessage id="contract.list.description" />
      </p>
      <div className={styles.contentLink}>
        <a>
          <Link to="/administrative/contract-register">
            <Icon type="plus"/> <FormattedMessage id='contract.list.add'/>
          </Link>

        </a>

      </div>
    </div>
  );

  const columns = [
    {
      title: 'Ativo',
      dataIndex: 'active',
      key: 'active',
      fixed: 'left',
      align: 'center',
      width: 100,
      render: (text, record) => (
        record.active
          ? <Tag color="green" key={record.active}>Ativo</Tag>
          : <Tag color="volcano" key={record.active}>Inativo</Tag>
      ),
    },
    {
      title: 'ID',
      dataIndex: 'ID',
      key: 'ID',
      align: 'center',
    },
    {
      title: 'E-mail',
      dataIndex: 'client.email',
      key: 'client.email',
      align: 'center',
    },
  ]

  return(
    <PageHeaderWrapper content={content} >
      <Table loading={loading} dataSource={data.Contracts} columns={columns} rowKey="ID" scroll={{ x: 300 }} />


    </PageHeaderWrapper>


  )
}
export default ContractList
