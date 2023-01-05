import { useRef } from 'react';
import useThumbnailData from 'hooks/useThumbnailData';
import OptionTab from './OptionTab';
import Debug from './Debug';
import Paint from 'components/Paint';

import styles from './index.scss';

function Preview() {
  const { isLoading } = useThumbnailData();

  if (isLoading) return <></>;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <OptionTab />
      <Debug />
      <div className={styles.canvasWrapper} ref={canvasWrapperRef}>
        <Paint ref={canvasRef} />
      </div>
    </div>
  );
}

export default Preview;
