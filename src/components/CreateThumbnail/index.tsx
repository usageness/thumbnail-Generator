import { useContext, useEffect, useRef } from 'react';
import Modal from 'components/Modal';
import { ModalContext } from 'stores/modalContext';
import { ThumbnailContext } from 'stores/thumbnailContext';
import styles from './index.scss';

function CreateThumbnail() {
  const thumbnailData = useContext(ThumbnailContext);
  const modalObject = useContext(ModalContext);

  if (!thumbnailData || !modalObject) return <></>;

  const {
    useImageSize,
    useBackgroundType,
    useBackgroundImageSrc,
    useBackgroundColor,
    useBackgroundGradint,
    useBackgroundBlur,
    useTitle,
    useSubtitle,
    useFontSize,
    useFontFamily,
    useFontColor,
    useHasFontShadow,
  } = thumbnailData;
  const { modalFlag } = modalObject;

  const { imageSize } = useImageSize();
  const { backgroundType } = useBackgroundType();
  const { backgroundImageSrc } = useBackgroundImageSrc();
  const { backgroundColor } = useBackgroundColor();
  const { backgroundGradint } = useBackgroundGradint();
  const { backgroundBlur } = useBackgroundBlur();
  const { title } = useTitle();
  const { subtitle } = useSubtitle();
  const { fontSize } = useFontSize();
  const { fontFamily } = useFontFamily();
  const { fontColor } = useFontColor();
  const { hasFontShadow } = useHasFontShadow();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const loadBackgroundImage = () => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = backgroundImageSrc;
      img.crossOrigin = 'Anonymous';

      img.onload = () => {
        resolve(img);
      };

      img.onerror = reject;
    });
  };

  const fontStyleBuilder = (usage: 'title' | 'subtitle') => {
    const fontScale = imageSize === '16:9' ? 3 : imageSize === '4:3' ? 2 : 1;
    const detailTitleFontSize = () => {
      if (fontSize === 'Small') {
        return `${24 * fontScale}px`;
      }

      if (fontSize === 'Normal') {
        return `${36 * fontScale}px`;
      }

      if (fontSize === 'Big') {
        return `${48 * fontScale}px`;
      }
    };

    const detailsubtitleFontSize = () => {
      if (fontSize === 'Small') {
        return `${14 * fontScale}px`;
      }

      if (fontSize === 'Normal') {
        return `${18 * fontScale}px`;
      }

      if (fontSize === 'Big') {
        return `${22 * fontScale}px`;
      }
    };

    const detailFontFamily = () => {
      if (fontFamily === '나눔고딕체') {
        return 'NanumBarunGothic';
      }

      if (fontFamily === '도현체') {
        return 'BMDOHYEON';
      }
    };

    return `bold ${
      usage === 'title' ? detailTitleFontSize() : detailsubtitleFontSize()
    } ${detailFontFamily()}`;
  };

  useEffect(() => {
    const asyncWrapper = async () => {
      const canvas = canvasRef.current;
      const canvasContainer = canvasWrapperRef.current;
      const downloadButton = downloadRef.current;

      if (!canvas || !canvasContainer || !downloadButton) return;

      const context = canvas.getContext('2d');

      if (!context) return;

      if (backgroundType === 'Color') {
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (backgroundType === 'Gradient') {
        const gradient = context.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height,
        );
        gradient.addColorStop(0, backgroundGradint.start);
        gradient.addColorStop(1, backgroundGradint.end);
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (backgroundType === 'Image') {
        const img = await loadBackgroundImage();

        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      context.font = fontStyleBuilder('title');
      context.textAlign = 'center';

      context.shadowColor = 'rgba(0, 0, 0, 0)';
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      if (backgroundBlur) {
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (hasFontShadow) {
        context.shadowColor = 'black';
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
      }

      context.fillStyle = `${fontColor}`;
      context.fillText(title, canvas.width / 2, canvas.height / 2);

      context.font = fontStyleBuilder('subtitle');
      context.fillText(subtitle, canvas.width / 2, (canvas.height * 5) / 7);

      downloadButton.download = 'Thumbnail.png';
      downloadButton.href = canvas.toDataURL('image/png');
    };

    asyncWrapper();
  }, [modalFlag]);

  return (
    <Modal modalState={modalFlag === 'createThumbnail'}>
      <div className={styles.container}>
        <h3>썸네일이 생성되었습니다</h3>
        <div className={styles.canvasWrapper} ref={canvasWrapperRef}>
          <div className={styles.canvasRatio}>
            {imageSize === '16:9' ? (
              <canvas
                className={styles.canvas}
                width="1920"
                height="1280"
                ref={canvasRef}
              />
            ) : imageSize === '4:3' ? (
              <canvas
                className={styles.canvas}
                width="1024"
                height="720"
                ref={canvasRef}
              />
            ) : (
              <canvas
                className={styles.canvas}
                width="600"
                height="600"
                ref={canvasRef}
              />
            )}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a className={styles.downloadButton} ref={downloadRef} href="">
            다운로드
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default CreateThumbnail;
