import { useState } from 'react';

const useManuallModal = () => {
  const [isShowingManual, setIsShowingManual] = useState(false);

  function toggleManual() {
    setIsShowingManual(!isShowingManual);
  }

  return {
    isShowingManual,
    toggleManual,
  }
};

export default useManuallModal;
