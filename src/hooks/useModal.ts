import { useState } from 'react';

export interface UseModalReturnType {
  modalFlag:
    | 'off'
    | 'backgroundColor'
    | 'backgroundImage'
    | 'createThumbnail'
    | 'information';
  setOffModal: () => void;
  showBackgroundColorModal: () => void;
  showBackgroundImageModal: () => void;
  showCreateThumbnailModal: () => void;
  showInformationModal: () => void;
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

  const showInformationModal = (): void => {
    setModalFlag('information');
  };

  return {
    modalFlag,
    setOffModal,
    showBackgroundColorModal,
    showBackgroundImageModal,
    showCreateThumbnailModal,
    showInformationModal,
  };
};

export default useModal;
