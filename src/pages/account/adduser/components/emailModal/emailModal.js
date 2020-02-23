import React, { Component } from 'react';
import {
  Modal,
  Steps
} from 'antd'
import Step1 from './components/Step1';
import { connect } from 'dva';
import styles from './style.less';
import {formatMessage} from "umi-plugin-react/locale";

const { Step } = Steps;


class EmailModal extends Component {
  getCurrentStep() {
    const {current} = this.props;

    switch (current) {
      case 'info':
        return 0;

      case 'confirm':
        return 1;

      case 'result':
        return 2;

      default:
        return 0;
    }
  }

  render() {
    const currentStep = this.getCurrentStep();
    let stepComponent;

    if (currentStep === 1) {
      stepComponent = <Step2/>;
    } else if (currentStep === 2) {
      stepComponent = <Step3/>;
    } else {
      stepComponent = <Step1/>;
    }

    return (

      <Modal
        // title="Basic Modal email"
        visible={this.props.isShowingEmail}
        // onOk={handleOk}
        onCancel={this.props.hideEmail}
        width={780}


      >
        <>
          <Steps current={currentStep} className={styles.steps}>
            <Step title={`${formatMessage({
              id: 'manualmodal.step1',
            })}`} />
            <Step title={`${formatMessage({
              id: 'manualmodal.step2',
            })}`} />
            <Step title={`${formatMessage({
              id: 'manualmodal.step3',
            })}`}/>
          </Steps>
          {stepComponent}
        </>
      </Modal>
    )
  }
}

export default EmailModal
