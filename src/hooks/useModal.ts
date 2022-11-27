import { useState } from 'react';

export interface UseModalReturnType {
  modalFlag: 'off' | 'backgroundColor' | 'backgroundImage';
  setOffModal: () => void;
  showBackgroundColorModal: () => void;
  showBackgroundImageModal: () => void;
}

const useModal = (): UseModalReturnType => {
  const [modalFlag, setModalFlag] =
    useState<UseModalReturnType['modalFlag']>('off');

  const setOffModal = (): void => {
    setModalFlag('off');
  };

  const showBackgroundColorModal = (): void => {
    setModalFlag('backgroundColor');
  };

  const showBackgroundImageModal = (): void => {
    setModalFlag('backgroundImage');
  };

  return {
    modalFlag,
    setOffModal,
    showBackgroundColorModal,
    showBackgroundImageModal,
  };
};

export default useModal;
