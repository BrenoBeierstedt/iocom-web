import {Card, Form, Input} from "antd";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import React from "react";
import styles from "@/pages/administrative/contractRegister/components/ContractDevicesForm/style.less";


const ContractForm = (props) => {
  const FormItem = Form.Item;
  const { getFieldDecorator } = props.form


  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
      md: {
        span: 10,
      },
    },
  };

  return (

    <Card title={formatMessage({
      id: 'contract-form.title',
    })}
          className={styles.card}>

      <FormItem
        {...formItemLayout}
        label={<FormattedMessage id="contract.zip.placeholder" />}
      >
        {getFieldDecorator('zip', {
          rules: [
            {
              required: true,
              message: formatMessage({
                id: 'contract-form.zip.required',
              }),
            },
          ],
        })(
          <Input

          />,
        )}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label={<FormattedMessage id="contract.street.placeholder" />}
      >
        {getFieldDecorator('street', {
          rules: [
            {
              required: true,
              message: formatMessage({
                id: 'contract-form.street.required',
              }),
            },
          ],
        })(
          <Input

          />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label={<FormattedMessage id="contract.state.placeholder" />}
      >
        {getFieldDecorator('state', {
          rules: [
            {
              required: true,
              message: formatMessage({
                id: 'contract-form.state.required',
              }),
            },
          ],
        })(
          <Input

          />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label={<FormattedMessage id="contract.complement.placeholder" />}
      >
        {getFieldDecorator('complement', {
          rules: [
            {
              required: true,
              message: formatMessage({
                id: 'contract-form.complement.required',
              }),
            },
          ],
        })(
          <Input

          />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label={<FormattedMessage id="contract.country.placeholder" />}
      >
        {getFieldDecorator('country', {
          rules: [
            {
              required: true,
              message: formatMessage({
                id: 'contract-form.country.required',
              }),
            },
          ],
        })(
          <Input

          />,
        )}
      </FormItem>
    </Card>
  )
}

export default Form.create()(ContractForm)
