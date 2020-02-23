import { useState } from 'react';

const useStep = () => {
  const [step, setStep] = useState('info');

  function toggleStep() {
    setIsShowingManual(!isShowingManual);
  }

  return {
    isShowingManual,
    toggleStep,
  }
};

export default useStep;
