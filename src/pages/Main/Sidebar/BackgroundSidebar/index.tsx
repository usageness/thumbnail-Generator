import { useContext } from 'react';
import useThumbnailData from 'hooks/useThumbnailData';
import { ModalContext } from 'stores/modalContext';

import Image from 'assets/image.svg';
import Palette from 'assets/palette.svg';
import ThumbnailData from 'types/thumbnail';
import styles from './index.scss';

function BackgroundSidebar() {
  const {
    isLoading,
    imageSize,
    setImageSize,
    backgroundType,
    backgroundFilter,
    setBackgroundFilter,
  } = useThumbnailData();
  const modalObject = useContext(ModalContext);

  if (isLoading || !modalObject) return <></>;

  const { showBackgroundColorModal, showBackgroundImageModal } = modalObject;

  const changeImageSize = (newSize: ThumbnailData['imageSize']) => {
    setImageSize(newSize);
  };

  const changeBackgroundFilter = (
    newType: ThumbnailData['backgroundFilter'],
  ) => {
    if (backgroundFilter === newType) {
      setBackgroundFilter(null);
      return;
    }

    setBackgroundFilter(newType);
  };

  return (
    <>
      <div className={styles.BackgroundControlContainer}>
        <h3>파일 사이즈 선택</h3>
        <div className={styles.buttonContainer}>
          <button
            className={`${imageSize === '16:9' ? styles.selected : ''} ${
              styles.firstButton
            }`}
            onClick={() => changeImageSize('16:9')}
          >
            FHD
          </button>
          <button
            className={`${imageSize === '4:3' ? styles.selected : ''}`}
            onClick={() => changeImageSize('4:3')}
          >
            XGA
          </button>
          <button
            className={`${imageSize === '1:1' ? styles.selected : ''}  ${
              styles.lastButton
            }`}
            onClick={() => changeImageSize('1:1')}
          >
            SQR
          </button>
        </div>
        <h3>배경 선택</h3>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonWrapper}>
            <button
              className={`${
                backgroundType === 'Color' || backgroundType === 'Gradient'
                  ? styles.selected
                  : ''
              } ${styles.firstButton}`}
              onClick={showBackgroundColorModal}
            >
              <img src={Palette} className={styles.imageInButton} />
            </button>
            색상, 그라데이션
          </div>
          <div className={styles.buttonWrapper}>
            <button
              className={`${
                backgroundType === 'Image' ? styles.selected : ''
              } ${styles.lastButton}`}
              onClick={showBackgroundImageModal}
            >
              <img src={Image} className={styles.imageInButton} />
            </button>
            이미지
          </div>
        </div>
        <h3>배경 필터</h3>
        <div className={styles.gridContainer}>
          <button
            className={backgroundFilter === 'Whiten' ? styles.selected : ''}
            onClick={() => changeBackgroundFilter('Whiten')}
          >
            <img src={Image} className={styles.whiten} />
          </button>
          <button
            className={backgroundFilter === 'Darken' ? styles.selected : ''}
            onClick={() => changeBackgroundFilter('Darken')}
          >
            <img src={Image} className={styles.darken} />
          </button>
        </div>
      </div>
    </>
  );
}

export default BackgroundSidebar;
