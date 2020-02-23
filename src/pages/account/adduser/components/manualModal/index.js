import React, { useState } from 'react'
import {
  Modal,
  Button,
  Steps, Form, Input
} from 'antd'
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import { connect } from 'dva';
import Step1 from './components/step1'
import { Mutation } from 'react-apollo'

import styles from './style.less';
import { CREATE_USER } from '@/atomic_data/mutation'
const { Step } = Steps;



const _ManualModal = (props) => {
  const { getFieldDecorator } = props.form
  const FormItem = Form.Item;

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
  const submitFormLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 10,
        offset: 7,
      },
    },
  };

  const handleSubmit = (e, createUser) => {
    const { validateFieldsAndScroll } = props.form
    e.preventDefault()
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        createUser({
          variables: {
            email: values.email,
            full_name: values.full_name,
            password: values.password,
          },
        }).then((data) => {
          console.log(data)
        }).catch((error) => {
          console.log(error)
        })
      }
    })
  }

  return (

    <Modal
      title={`${formatMessage({
        id: 'manualmodal.title',
      })}`}
      visible={props.isShowingLink}
      // onOk={handleOk}
      onCancel={props.hideLink}
      width={780}
      footer= {null}
    >
      <Mutation mutation={CREATE_USER}>
        {
          (createUser) => {
            return (
              <Form
                onSubmit={e => handleSubmit(e, createUser)}
                className="login-form"
              >
                <FormItem
                  {...formItemLayout}
                  label={<FormattedMessage id="manualmodal.email" />}
                >
                  {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({
                          id: 'manualmodal.email.required',
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
                  label={<FormattedMessage id="manualmodal.full_name" />}
                >
                  {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({
                          id: 'manualmodal.full_name.required',
                        }),
                      },
                    ],
                  })(
                    <Input

                    />,
                  )}
                </FormItem>
              </Form>
            )
          }
        }
      </Mutation>
    </Modal>

  )
}


// export default connect(({ manualModalForm }) => ({
//   current: manualModalForm.current,
// }))(ManualModal);

const ManualModal = connect(
  manualModalForm => ({
    current: manualModalForm.current
  })
)(_ManualModal);

export default Form.create()(ManualModal);

