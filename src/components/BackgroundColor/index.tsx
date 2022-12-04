import { useContext } from 'react';
import useThumbnailData from 'hooks/useThumbnailData';
import Modal from 'components/Modal';
import { ModalContext } from 'stores/modalContext';
import GredientBackground from './GredientBackground';
import SingleColorBackground from './SingleColorBackground';
import ThumbnailData from 'types/thumbnail';
import styles from './index.scss';

function BackgroundColor() {
  const {
    isLoading,
    backgroundType,
    setBackgroundType,
    backgroundColor,
    setBackgroundColor,
    backgroundGradint,
    setBackgroundGradint,
  } = useThumbnailData();
  const modalObject = useContext(ModalContext);

  if (isLoading || !modalObject) return <></>;

  const { modalFlag } = modalObject;

  const changeBackgroundType = (newType: ThumbnailData['backgroundType']) => {
    setBackgroundType(newType);
  };

  const changeBackgroundColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const changeBackgroundGradintStart = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBackgroundGradint({ start: e.target.value, end: backgroundGradint.end });
  };

  const changeBackgroundGradintEnd = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBackgroundGradint({
      start: backgroundGradint.start,
      end: e.target.value,
    });
  };

  return (
    <Modal modalState={modalFlag === 'backgroundColor'}>
      <h3>배경색 설정</h3>
      <div className={styles.labelContainer}>
        <p>배경 타입</p>
        <div className={styles.tabButtonContainer}>
          <button
            className={backgroundType === 'Color' ? styles.active : ''}
            onClick={() => changeBackgroundType('Color')}
          >
            단일 색상
          </button>
          <button
            className={backgroundType === 'Gradient' ? styles.active : ''}
            onClick={() => changeBackgroundType('Gradient')}
          >
            그라데이션
          </button>
        </div>
      </div>
      <div className={styles.colorPickerContainer}>
        {backgroundType === 'Color' ? (
          <SingleColorBackground
            backgroundColor={backgroundColor}
            changeBackgroundColor={changeBackgroundColor}
          />
        ) : (
          <GredientBackground
            backgroundGradint={backgroundGradint}
            changeBackgroundGradintStart={changeBackgroundGradintStart}
            changeBackgroundGradintEnd={changeBackgroundGradintEnd}
          />
        )}
      </div>
    </Modal>
  );
}

export default BackgroundColor;
