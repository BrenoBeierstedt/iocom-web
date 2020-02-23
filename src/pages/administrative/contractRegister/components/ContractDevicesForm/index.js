import {Card, Form, Input, Row, Col, Button, Icon } from "antd";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import React, {useState} from "react";
import styles from './style.less';
import FooterToolbar from '../FooterToolbar';



const ContractDevicesForm = (props) => {
  const FormItem = Form.Item;
  const { getFieldDecorator } = props.form
  const _default = [
    {qty:"",
    model:""
    }
  ]
  const [devices, setDevices] = useState(_default)


  const  handleDevicesChange = event => {
console.log(devices)
    const _tempDevices = [...devices];

    _tempDevices[event.target.dataset.id][event.target.qty] = event.target.value;
    setDevices(_tempDevices);

  };

  const  addDevice = (e) => {
    setDevices(prevDevices => [...prevDevices, { qty: "", model: "" }])
  };

  const handleRemoveDevice = (index) => {


    setDevices(devices => devices.filter((model, i) => i !== index))
  }

  return (
    <>
      <Card title={formatMessage({
        id: 'contract-device-form.title',
      })}
            extra={<Button onClick={addDevice} ><Icon type="plus"/><FormattedMessage id="contract-device.add" /></Button>}
            className={styles.card}>


        <Row gutter={16}>
          <Col
            xl={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 5,
            }}
            md={{
              span: 5,
            }}
            sm={5}>
          </Col>
          <Col
            xl={{
              span: 2,
              offset: 1,
            }}
            lg={{
              span: 5,
            }}
            md={{
              span: 3,
            }}
            sm={{span: 5}}>
            <FormattedMessage id="contract-device.qty.placeholder" />

          </Col>
          <Col
            xl={{
              span: 8,
            }}
            lg={{
              span: 8,
            }}
            md={{
              span: 8,
            }}
            sm={5}>
            <FormattedMessage id="contract-device.model.placeholder" />
          </Col>

            <Col
              xl={{
                span: 2,
              }}
              lg={{
                span: 2,
              }}
              md={{
                span: 2,
              }}
              sm={2}>
              <FormattedMessage id="contract-device.model.delete" />

            </Col>


        </Row>

        {
          devices.map((item, index)=> {
            return (

              <Row gutter={16}>
                <Col
                  xl={{
                    span: 5,
                    offset: 1,
                  }}
                  lg={{
                    span: 5,
                  }}
                  md={{
                    span: 5,
                  }}
                  sm={5}>
                </Col>
                <Col
                  xl={{
                    span: 2,
                    offset: 1,
                  }}
                  lg={{
                    span: 5,
                  }}
                  md={{
                    span: 3,
                  }}
                  sm={{span: 5}}>
                  <FormItem
                  >
                    {getFieldDecorator('qty', {
                      rules: [
                        {
                          required: true,
                          message: formatMessage({
                            id: 'contract-device-form.qty.required',
                          }),
                        },
                      ],
                    })(
                      <Input
                        name="qty"
                        data-id={index}
                        value={item.qty}
                        onChange={ handleDevicesChange}

                      />,
                    )}
                  </FormItem>
                </Col>
                <Col
                  xl={{
                    span: 8,
                  }}
                  lg={{
                    span: 8,
                  }}
                  md={{
                    span: 8,
                  }}
                  sm={5}>
                  <FormItem
                    name="model"
                    data-id={index}
                    value={item.model}
                  >
                    {getFieldDecorator('model', {
                      rules: [
                        {
                          required: true,
                          message: formatMessage({
                            id: 'contract-device-form.model.required',
                          }),
                        },
                      ],
                    })(
                      <Input
                        onChange={(e) => handleDevicesChange(e, index)}

                      />,
                    )}
                  </FormItem>
                </Col>
                <Col
                  xl={{
                    span: 2,
                  }}
                  lg={{
                    span: 2,
                  }}
                  md={{
                    span: 2,
                  }}
                  sm={2}>
                  <FormItem >
                    <Button  onClick={handleRemoveDevice} ><Icon type="delete"/></Button>
                  </FormItem>

                </Col>

              </Row>
            )
          })
        }
      </Card>

    </>
  )
}

export default Form.create()(ContractDevicesForm)
