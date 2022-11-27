import ThumbnailData from 'types/thumbnail';
import styles from '../index.scss';

interface GredientBackgroundProps {
  backgroundGradint: ThumbnailData['backgroundGradint'];
  changeBackgroundGradintStart: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  changeBackgroundGradintEnd: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function GredientBackground({
  backgroundGradint,
  changeBackgroundGradintStart,
  changeBackgroundGradintEnd,
}: GredientBackgroundProps) {
  return (
    <>
      <div className={styles.singleInputContainer}>
        <label htmlFor="bg_color_start">시작색</label>
        <input
          id="bg_color_start"
          type="color"
          name="bg_color_start"
          value={backgroundGradint.start}
          onChange={changeBackgroundGradintStart}
          placeholder=""
        />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="bg_color_end">종료색</label>
        <input
          id="bg_color_end"
          type="color"
          name="bg_color_end"
          value={backgroundGradint.end}
          onChange={changeBackgroundGradintEnd}
          placeholder=""
        />
      </div>
    </>
  );
}

export default GredientBackground;
