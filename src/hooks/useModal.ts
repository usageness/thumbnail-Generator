import { useState } from 'react';

export interface UseModalReturnType {
  modalFlag: 'off' | 'backgroundColor' | 'backgroundImage' | 'createThumbnail';
  setOffModal: () => void;
  showBackgroundColorModal: () => void;
  showBackgroundImageModal: () => void;
  showCreateThumbnailModal: () => void;
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

  const showCreateThumbnailModal = (): void => {
    setModalFlag('createThumbnail');
  };

  return {
    modalFlag,
    setOffModal,
    showBackgroundColorModal,
    showBackgroundImageModal,
    showCreateThumbnailModal,
  };
};

export default useModal;
