import { useState } from 'react';

const useStage = () => {
  const [stage, setStage] = useState(1);

  const getCurrentStep = (stageReturned) => {

    switch (stage) {
      case 'info':
        return setStage(1) ;

      case 'confirm':
        return setStage(2) ;

      case 'result':
        return setStage(3) ;

      default:
        return  setStage(1) ;
    }
  }

  return {
    stage,
    getCurrentStep,
  }
};

export default useStage;
