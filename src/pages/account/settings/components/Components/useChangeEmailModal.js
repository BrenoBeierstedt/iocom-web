import { useState } from 'react';

const useChangeEmailModal = () => {
  const [isShowingChangeEmail, setIsShowingChangeEmail] = useState(false);

  function toggleChangeEmail() {
    setIsShowingChangeEmail(!isShowingChangeEmail);
  }

  return {
    isShowingChangeEmail,
    toggleChangeEmail,
  }
};

export default useChangeEmailModal;
