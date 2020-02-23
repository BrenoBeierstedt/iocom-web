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
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_CLIENT } from '../../../atomic_data/mutation'
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useMutation, useQuery } from 'react-apollo-hooks'
import ClientForm from './components/clientForm'
import Success from './components/success'
import Failed from './components/failed'
import useStage from './useStageComponent'

const Contract = (props) => {
  let currentComponent
  const {stage, getCurrentStep} = useStage()

  const handleSubmit = () => {
    getCurrentStep()
  }

  if (stage === 1) {
    currentComponent = <ClientForm />;
  } else if (stage === 2) {
    currentComponent = <Success />;
  } else {
    currentComponent = <Failed />;
  }

  return (

    <PageHeaderWrapper content={<FormattedMessage id="contract.description" />}>
      <Card bordered={false}>
        {currentComponent}
      </Card>
    </PageHeaderWrapper>

  )
}

export default Contract
