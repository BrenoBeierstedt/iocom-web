import { useState } from 'react';

const useChangeNameModal = () => {
  const [isShowingChangeName, setIsShowingChangeName] = useState(false);

  function toggleChangeName() {
    setIsShowingChangeName(!isShowingChangeName);
  }

  return {
    isShowingChangeName,
    toggleChangeName,
  }
};

export default useChangeNameModal;
