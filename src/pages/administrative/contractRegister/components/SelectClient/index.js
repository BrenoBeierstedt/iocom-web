import {Card, Form, Input, Select, Spin} from "antd";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import React, {useState} from "react";
import styles from "@/pages/administrative/contractRegister/components/ContractDevicesForm/style.less";


const Index = (props) => {
  const [value, setValue]=useState([])
  const [data, setData]=useState([])
  const [fetching, setFetching]=useState(false)
  const { Option } = Select;

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
 const fetchUser = value => {
    console.log('fetching user', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };
 const handleChange = value => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };
  return (

    <Card title={formatMessage({
      id: 'contract-client-form.title',
    })}
          className={styles.card}
    >
      <FormItem
        {...formItemLayout}
        label={<FormattedMessage id="contract.client.placeholder" />}
      >
        {getFieldDecorator('client', {
          rules: [
            {
              required: true,
              message: formatMessage({
                id: 'contract-form.client.required',
              }),
            },
          ],
        })(
      <Select
        mode="multiple"
        labelInValue
        value={value}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={fetchUser}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {data.map(d => (
          <Option key={d.value}>{d.text}</Option>
        ))}
      </Select>
        )}
      </FormItem>
    </Card>
  )
}

export default Form.create()(Index)
