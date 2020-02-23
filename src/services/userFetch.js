import React, { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_MYSELF } from '@/atomic_data/query'

const UserList = () => {
  const { data, error, loading } = useQuery(GET_MYSELF)


  return (
    <Table dataSource={data.Users} columns={columns} rowKey="ID" scroll={{ x: 300 }} />
  )
}

export default UserList
