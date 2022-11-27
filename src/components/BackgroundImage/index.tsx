import Modal, { modalAnimationTime } from 'components/Modal';
import useClosingState from 'hooks/useClosingState';
import { useContext, useRef } from 'react';
import { ModalContext } from 'stores/modalContext';
import { ThumbnailContext } from 'stores/thumbnailContext';
import styles from './index.scss';

function BackgroundImage() {
  const thumbnailData = useContext(ThumbnailContext);
  const modalObject = useContext(ModalContext);
  if (!thumbnailData || !modalObject) return <></>;
  const { modalFlag, setOffModal } = modalObject;
  const { useBackgroundType, useBackgroundImageSrc } = thumbnailData;
  const { isClosing, close } = useClosingState(modalAnimationTime, setOffModal);

  const urlRef = useRef<HTMLInputElement>(null);

  const { backgroundType, setBackgroundType } = useBackgroundType();
  const { backgroundImageSrc, setBackgroundImageSrc } = useBackgroundImageSrc();

  const changeBackgroundImageSrc = () => {
    if (!urlRef.current) return;

    const imageUrl = urlRef.current.value;

    setBackgroundImageSrc(imageUrl);
    setBackgroundType('Image');
    close();
  };

  return (
    <Modal modalState={modalFlag === 'backgroundImage'}>
      <h3>배경 이미지 설정</h3>
      <div className={styles.contentWrapper}>
        <label htmlFor="bg_image">이미지 주소</label>
        <input
          id="bg_image"
          type="text"
          name="bg_image"
          ref={urlRef}
          placeholder="이미지 URL을 붙여넣어 주세요."
        />
        <p className={styles.guideMessage}>
          배경 이미지의 사용 범위를 꼭 확인해주세요.
        </p>
        <button onClick={changeBackgroundImageSrc}>적용</button>
      </div>
    </Modal>
  );
}

export default BackgroundImage;
