import { useContext, useEffect, useRef, useState } from 'react';
import Modal from 'components/Modal';
import { ModalContext } from 'stores/modalContext';
import styles from './index.scss';
import Paint from 'components/Paint';

function CreateThumbnail() {
  const [isDownloadReady, setIsDownloadReady] = useState(false);

  const modalObject = useContext(ModalContext);

  if (!modalObject) return <></>;

  const { modalFlag } = modalObject;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const checkDownloadReady = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isDownloadReady) {
      e.preventDefault();
      return;
    }
  };

  useEffect(() => {
    const canvasContainer = canvasWrapperRef.current;
    const downloadButton = downloadRef.current;
    const canvas = canvasRef.current;

    if (!canvas || !canvasContainer || !downloadButton) return;

    downloadButton.download = 'Thumbnail.png';
    downloadButton.href = canvas.toDataURL('image/png');
  }, [modalFlag, isDownloadReady]);

  return (
    <Modal modalState={modalFlag === 'createThumbnail'}>
      <div className={styles.container}>
        <h3>썸네일이 생성되었습니다</h3>
        <div className={styles.canvasWrapper} ref={canvasWrapperRef}>
          <div className={styles.canvasRatio}>
            <Paint setIsDownloadReady={setIsDownloadReady} ref={canvasRef} />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a
            onClick={checkDownloadReady}
            className={styles.downloadButton}
            ref={downloadRef}
            href=""
          >
            다운로드
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default CreateThumbnail;
