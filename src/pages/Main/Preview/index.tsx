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
    useTitle,
    useSubtitle,
    useFontColor,
    useFontBackgroundColor,
    useHasFontBackgroundColor,
    useHasFontShadow,
  } = thumbnailData;
  const { modalFlag } = modalObject;

  const { imageSize } = useImageSize();
  const { backgroundType } = useBackgroundType();
  const { backgroundImageSrc } = useBackgroundImageSrc();
  const { backgroundColor } = useBackgroundColor();
  const { backgroundGradint } = useBackgroundGradint();
  const { title } = useTitle();
  const { subtitle } = useSubtitle();
  const { fontColor } = useFontColor();
  const { fontBackgroundColor } = useFontBackgroundColor();
  const { hasFontBackgroundColor } = useHasFontBackgroundColor();
  const { hasFontShadow } = useHasFontShadow();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

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

      if (!canvas) return;

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
        context.drawImage(img, 0, 0);
      }

      context.font = '24px NanumBarunGothic';
      context.textAlign = 'center';
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
    title,
    subtitle,
    fontColor,
  ]);

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current;

    if (!canvasContainer) return;

    canvasContainer.style.aspectRatio = imageSize.replace(':', '/');
  }, [imageSize]);

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
        <p>title: {title}</p>
        <p>subtitle: {subtitle}</p>
        <p>fontColor: {fontColor}</p>
        <p>fontBackgroundColor: {fontBackgroundColor}</p>
        <p>hasFontBackgroundColor: {hasFontBackgroundColor.toString()}</p>
        <p>hasFontShadow: {hasFontShadow.toString()}</p>
        <p>modalFlag: {modalFlag}</p>
      </div>
      <div className={styles.canvasContainer} ref={canvasContainerRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default Preview;
