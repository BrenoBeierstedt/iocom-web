import {
  Button,
  Card,
  DatePicker,
  Form,
  Icon,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
} from 'antd';
import React, {useEffect, useState} from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_CLIENT } from '../../../atomic_data/mutation'
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useMutation, useQuery } from 'react-apollo-hooks'
import ClientForm from './components/UserForm'
import Success from './components/success'
import Failed from './components/failed'
import useStage from './useStageComponent'

const Contract = (props) => {
  let currentComponent
  const {stage, getCurrentStep} = useStage()
  console.log(stage)
  const handleSubmit = () => {
    getCurrentStep()
  }


  return (

    <PageHeaderWrapper content={<FormattedMessage id="user.description" />}>
      <Card bordered={false}>

        <ClientForm/>
      </Card>
    </PageHeaderWrapper>

  )
}

export default Contract
