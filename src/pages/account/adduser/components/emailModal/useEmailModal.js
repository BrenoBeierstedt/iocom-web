import { useState } from 'react';

const useEmailModal = () => {
  const [isShowingEmail, setIsShowingEmail] = useState(false);

  function toggleEmail() {
    setIsShowingEmail(!isShowingEmail);
  }

  return {
    isShowingEmail,
    toggleEmail,
  }
};

export default useEmailModal;
