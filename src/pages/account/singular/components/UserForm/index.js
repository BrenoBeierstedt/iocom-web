import {Mutation} from "react-apollo";
import {CREATE_USER} from "@/atomic_data/mutation";
import {Button, Card, Form, Input, message} from "antd";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import React, {useState} from "react";
import {useMutation} from "react-apollo-hooks";
import useStage from './../../useStageComponent'
import router from "umi/router";

const clientForm = (props) => {
  const FormItem = Form.Item;
  const { getFieldDecorator } = props.form
  const {getCurrentStep}  = useStage()


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
          message.success(formatMessage({
              id: 'formandbasic-form.success'
            })
          );

          router.push({
            pathname: '/',
          });

        }).catch((error) => {
          if (error) {
            getCurrentStep(3)

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

    <Mutation mutation={CREATE_USER}>
      {
        (createUser) => {
          return (
            <Form
              hideRequiredMark
              style={{
                marginTop: 8,
              }}
              onSubmit={e => handleSubmit(e, createUser)}
            >
              <FormItem
                {...formItemLayout}
                label={<FormattedMessage id="user.full_name" />}
              >
                {getFieldDecorator('full_name', {
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
                label={<FormattedMessage id="user.email" />}
              >
                {getFieldDecorator('email', {
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
                label={<FormattedMessage id="user.password" />}
              >
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({
                        id: 'formandbasic-form.title.required',
                      }),
                    },
                  ],
                })(
                  <Input.Password
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
