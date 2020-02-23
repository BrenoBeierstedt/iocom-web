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
  Spin
} from 'antd';
import debounce from 'lodash/debounce';

import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { LOGIN_MUTATION } from '../../../atomic_data/mutation'
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import {PageHeaderWrapper, RouteContext} from '@ant-design/pro-layout';
import ContractForm from "./components/ContractForm";
import ContractDevicesForm from "./components/ContractDevicesForm";
import FooterToolbar from './components/FooterToolbar';
import SelectClient from "@/pages/administrative/contractRegister/components/SelectClient";


const ContractRegister = (props) => {



  return (

    <PageHeaderWrapper content={<FormattedMessage id="contract.description" />}>

      <SelectClient {...props}/>
      <br/>
      <ContractForm {...props}/>

      <br/>
      <ContractDevicesForm {...props}/>
      <RouteContext.Consumer>
        {({ isMobile }) => (
          <FooterToolbar isMobile={isMobile}>
            <Button type="primary" >
              <FormattedMessage id="contract.send" />
            </Button>
          </FooterToolbar>
        )}
      </RouteContext.Consumer>
    </PageHeaderWrapper>


  )
}

export default Form.create()(ContractRegister)
