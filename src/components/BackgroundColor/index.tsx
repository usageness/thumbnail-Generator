import Modal from 'components/Modal';
import { useContext } from 'react';
import { ModalContext } from 'stores/modalContext';
import { ThumbnailContext } from 'stores/thumbnailContext';
import ThumbnailData from 'types/thumbnail';
import GredientBackground from './GredientBackground';
import SingleColorBackground from './SingleColorBackground';
import styles from './index.scss';

function BackgroundColor() {
  const thumbnailData = useContext(ThumbnailContext);
  const modalObject = useContext(ModalContext);
  if (!thumbnailData || !modalObject) return <></>;
  const { modalFlag } = modalObject;
  const { useBackgroundType, useBackgroundColor, useBackgroundGradint } =
    thumbnailData;

  const { backgroundType, setBackgroundType } = useBackgroundType();
  const { backgroundColor, setBackgroundColor } = useBackgroundColor();
  const { backgroundGradint, setBackgroundGradint } = useBackgroundGradint();

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
