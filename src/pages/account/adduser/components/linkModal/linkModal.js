import React, { useState } from 'react'
import {
  Modal,
  Button
} from 'antd'
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";


const LinkModal = (props) => {

  return (

    <Modal
      title={`${formatMessage({
      id: 'userandlogin.login.password',
    })}`}
      visible={props.isShowingLink}
      // onOk={handleOk}
      onCancel={props.hideLink}
      width={780}
      footer={[
        <Button key="back" type="primary" onClick={props.hideLink}>
          <FormattedMessage id="adduser.return" />

        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}


export default LinkModal
