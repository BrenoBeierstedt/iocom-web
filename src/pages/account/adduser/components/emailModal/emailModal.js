import React, { Component } from 'react';
import {
  Modal,
  Steps,
  Form,
  Input,
  TreeSelect
} from 'antd'
import { connect } from 'dva';
import styles from './style.less';
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";

const { Step } = Steps;
const FormItem = Form.Item;
const treeData = localStorage.getItem("idome_authority_roles")
const { TreeNode } = TreeSelect;

  class EmailModal extends Component {

  state = {
    value: undefined,
  };


  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };



    // getDynamicTreeNodes = prefix => {
    //   var results = [];
    //
    //   for (let x = 0; x < 10; x++) {
    //     results.push(
    //       <TreeNode
    //         value={prefix + "value" + x}
    //         title={prefix + " dynamic title " + x}
    //         key={prefix + "key" + x}
    //       />
    //     );
    //   }
    //
    //   return results;
    // };

  render() {
treeData.map(t =>{
  console.log(t)
})
console.log(treeData)


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

      <Modal
        // title="Basic Modal email"
        visible={this.props.isShowingEmail}
        // onOk={handleOk}
        onCancel={this.props.hideEmail}
        width={780}
      >
        <Form
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          name="basic"
          initialValues={{
            public: '1',
          }}

        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="adduser-email.email" />}
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'formandbasic-form.title.required',
                }),
              },
            ]}
          >
            <Input

            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="adduser-email.roles" />}
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'formandbasic-form.title.required',
                }),
              },
            ]}
          >
            <TreeSelect
              showSearch
              style={{ width: '100%' }}
              value={this.state.value}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              allowClear
              treeDefaultExpandAll
              onChange={this.onChange}/>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default EmailModal
