import { useState } from 'react';

const useLinklModal = () => {
  const [isShowingLink, setIsShowingLink] = useState(false);

  function toggleLink() {
    setIsShowingLink(!isShowingLink);
  }

  return {
    isShowingLink,
    toggleLink,
  }
};

export default useLinklModal;
