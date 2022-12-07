import { useState } from 'react';

export interface UseModalReturnType {
  modalFlag:
    | 'off'
    | 'backgroundColor'
    | 'backgroundImage'
    | 'createThumbnail'
    | 'information'
    | 'option';
  setOffModal: () => void;
  showBackgroundColorModal: () => void;
  showBackgroundImageModal: () => void;
  showCreateThumbnailModal: () => void;
  showInformationModal: () => void;
  showOptionModal: () => void;
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

  const showOptionModal = (): void => {
    setModalFlag('option');
  };

  return {
    modalFlag,
    setOffModal,
    showBackgroundColorModal,
    showBackgroundImageModal,
    showCreateThumbnailModal,
    showInformationModal,
    showOptionModal,
  };
};

export default useModal;
