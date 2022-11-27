import ThumbnailData from 'types/thumbnail';
import styles from '../index.scss';

interface SingleColorBackgroundProps {
  backgroundColor: ThumbnailData['backgroundColor'];
  changeBackgroundColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SingleColorBackground({
  backgroundColor,
  changeBackgroundColor,
}: SingleColorBackgroundProps) {
  return (
    <div className={styles.singleInputContainer}>
      <label htmlFor="bg_color">배경색</label>
      <input
        id="bg_color"
        type="color"
        name="bg_color"
        value={backgroundColor}
        onChange={changeBackgroundColor}
        placeholder=""
      />
    </div>
  );
}

export default SingleColorBackground;
