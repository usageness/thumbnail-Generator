import { forwardRef, useEffect, useRef } from 'react';
import useThumbnailData from 'hooks/useThumbnailData';
import { loadBackgroundImage } from 'utils/image';
import { fontStyleBuilder } from 'utils/font';

import styles from './index.scss';

interface PaintProps {
  setIsDownloadReady?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Paint = forwardRef<HTMLCanvasElement, PaintProps>(
  ({ setIsDownloadReady }, canvasRef) => {
    const {
      isLoading,
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
    } = useThumbnailData();

    useEffect(() => {
      const asyncWrapper = async () => {
        if (setIsDownloadReady) {
          setIsDownloadReady(false);
        }

        if (!canvasRef || typeof canvasRef === 'function') return;

        const canvas = canvasRef.current;

        if (!canvas) return;

        const context = canvas.getContext('2d');

        if (isLoading || !context) return;

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
          const img = await loadBackgroundImage(backgroundImageSrc);

          context.fillStyle = backgroundColor;
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }

        context.font = fontStyleBuilder(
          'title',
          fontFamily,
          fontSize,
          imageSize,
        );
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
          context.shadowOffsetX = 3;
          context.shadowOffsetY = 3;
        }

        context.fillStyle = `${fontColor}`;
        context.fillText(title, canvas.width / 2, canvas.height / 2);

        context.font = fontStyleBuilder(
          'subtitle',
          fontFamily,
          fontSize,
          imageSize,
        );
        context.fillText(subtitle, canvas.width / 2, (canvas.height * 7) / 11);
      };

      asyncWrapper().then(() => {
        if (!setIsDownloadReady) return;

        setIsDownloadReady(true);
      });
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
      <>
        {imageSize === '16:9' ? (
          <canvas
            className={styles.canvas}
            width="1920"
            height="1080"
            ref={canvasRef}
          />
        ) : imageSize === '4:3' ? (
          <canvas
            className={styles.canvas}
            width="1024"
            height="768"
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
      </>
    );
  },
);

export default Paint;
