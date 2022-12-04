import { useContext, useEffect, useRef } from 'react';
import { ThumbnailContext } from 'stores/thumbnailContext';
import Debug from './Debug';
import styles from './index.scss';

function Preview() {
  const thumbnailData = useContext(ThumbnailContext);

  if (!thumbnailData) return <></>;

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

  const fontStyleBuilder = (usage: 'title' | 'subtitle') => {
    const detailTitleFontSize = () => {
      if (fontSize === 'Small') {
        return '24px';
      }

      if (fontSize === 'Normal') {
        return '36px';
      }

      if (fontSize === 'Big') {
        return '48px';
      }
    };

    const detailsubtitleFontSize = () => {
      if (fontSize === 'Small') {
        return '14px';
      }

      if (fontSize === 'Normal') {
        return '18px';
      }

      if (fontSize === 'Big') {
        return '22px';
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
    fontSize,
    fontFamily,
    fontColor,
    hasFontShadow,
  ]);

  return (
    <div className={styles.container}>
      <Debug />
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
