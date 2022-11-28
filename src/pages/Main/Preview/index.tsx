import { useContext, useEffect, useRef } from 'react';
import { ModalContext } from 'stores/modalContext';
import { ThumbnailContext } from 'stores/thumbnailContext';
import styles from './index.scss';

function Preview() {
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
  const { fontColor } = useFontColor();
  const { hasFontShadow } = useHasFontShadow();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const loadBackgroundImage = () => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = backgroundImageSrc;

      img.onload = () => {
        resolve(img);
      };

      img.onerror = reject;
    });
  };

  useEffect(() => {
    const asyncWrapper = async () => {
      const canvas = canvasRef.current;
      const canvasContainer = canvasWrapperRef.current;

      if (!canvas || !canvasContainer) return;

      const context = canvas.getContext('2d');

      if (!context) return;

      canvasContainer.style.aspectRatio = imageSize.replace(':', '/');

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

      context.font = 'bold 24px NanumBarunGothic';
      context.textAlign = 'center';

      context.shadowColor = 'rgba(0, 0, 0, 0)';
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      if (backgroundBlur) {
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (hasFontShadow) {
        console.log('shadow on');
        context.shadowColor = 'black';
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
      }

      context.fillStyle = `${fontColor}`;
      context.fillText(title, canvas.width / 2, canvas.height / 2);

      context.font = '14px NanumBarunGothic';
      context.fillText(subtitle, canvas.width / 2, (canvas.height * 5) / 7);
    };

    asyncWrapper();
  }, [
    imageSize,
    backgroundType,
    backgroundImageSrc,
    backgroundColor,
    backgroundGradint,
    backgroundBlur,
    title,
    subtitle,
    fontColor,
    hasFontShadow,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.debugContainer}>
        <p>-- DUBUG --</p>
        <p>imageSize: {imageSize}</p>
        <p>backgroundType: {backgroundType}</p>
        <p>backgroundImageSrc: {backgroundImageSrc}</p>
        <p>backgroundColor: {backgroundColor}</p>
        <p>
          backgroundGradint: {backgroundGradint.start} / {backgroundGradint.end}
        </p>
        <p>backgroundBlur: {backgroundBlur.toString()}</p>
        <p>title: {title}</p>
        <p>subtitle: {subtitle}</p>
        <p>fontColor: {fontColor}</p>
        <p>hasFontShadow: {hasFontShadow.toString()}</p>
        <p>modalFlag: {modalFlag}</p>
      </div>
      <div className={styles.canvasWrapper} ref={canvasWrapperRef}>
        <div className={styles.canvasRatio}>
          {imageSize === '16:9' ? (
            <canvas
              className={styles.canvas}
              width="640"
              height="360"
              ref={canvasRef}
            />
          ) : imageSize === '4:3' ? (
            <canvas
              className={styles.canvas}
              width="600"
              height="450"
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
    </div>
  );
}

export default Preview;
