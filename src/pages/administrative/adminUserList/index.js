import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import {
  Table,
  Divider,
  Popconfirm,
  message,
} from 'antd'
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import {FormattedMessage} from "umi-plugin-react/locale";
import { GET_USERS } from '@/atomic_data/query'

const adminUserList = () => {
  const { data, error, loading } = useQuery(GET_USERS)

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
    <PageHeaderWrapper content={<FormattedMessage id="userlist.description" />}>
      <Table dataSource={data.Users} columns={columns} rowKey="ID" scroll={{ x: 300 }} />


    </PageHeaderWrapper>


  )
}
export default adminUserList

