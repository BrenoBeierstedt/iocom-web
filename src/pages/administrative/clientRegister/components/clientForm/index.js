import {Mutation} from "react-apollo";
import {CREATE_CLIENT} from "@/atomic_data/mutation";
import {Button, Card, Form, Input} from "antd";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import React, {useState} from "react";
import {useMutation} from "react-apollo-hooks";


const clientForm = (props) => {
  const FormItem = Form.Item;
  const { getFieldDecorator } = props.form

  const handleCreation = useMutation(CREATE_CLIENT, {
    update: () => {

    },
  })

  const handleSubmit = (e, loginUser) => {
    const { validateFieldsAndScroll } = props.form
    e.preventDefault()
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        loginUser({
          variables: {
            email: values.email,
            password: values.password,
          },
        }).then((data) => {

        }).catch((error) => {
          if (error) {
            console.log(error)
          }
        })
      }
    })
  }
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

  return(

  <Mutation mutation={CREATE_CLIENT}>
    {
      (createClient) => {
        return (
          <Form
            hideRequiredMark
            style={{
              marginTop: 8,
            }}
          >
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="client.full_name" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'formandbasic-form.title.required',
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
              label={<FormattedMessage id="client.email" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'formandbasic-form.title.required',
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
              label={<FormattedMessage id="client.social_security" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'formandbasic-form.title.required',
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
              label={<FormattedMessage id="client.telephone" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'formandbasic-form.title.required',
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
              label={<FormattedMessage id="client.cellphone" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'formandbasic-form.title.required',
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
              label={<FormattedMessage id="client.type" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'formandbasic-form.title.required',
                    }),
                  },
                ],
              })(
                <Input

                />,
              )}
            </FormItem>
            <FormItem
              {...submitFormLayout}
              style={{
                marginTop: 32,
              }}
            >
              <Button type="primary" htmlType="submit"  >
                <FormattedMessage id="client.submit" />
              </Button>

            </FormItem>
          </Form>
        )
      }
    }
  </Mutation>
  )
}


export default Form.create()(clientForm)
