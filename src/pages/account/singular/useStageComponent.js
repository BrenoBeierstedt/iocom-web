import { useState } from 'react';

const useStage = () => {
  const [stage, setStage] = useState(1);

  const getCurrentStep = (stageReturned) => {
setStage(stageReturned)
    console.log(stageReturned)
  }

  return {
    stage,
    getCurrentStep,
  }
};

export default useStage;
