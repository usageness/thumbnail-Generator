import { useContext } from 'react';
import { ModalContext } from 'stores/modalContext';
import { ThumbnailContext } from 'stores/thumbnailContext';
import styles from '../index.scss';

function Debug() {
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

  return (
    <div className={styles.debugContainer}>
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
      <p>fontSize: {fontSize}</p>
      <p>fontFamily: {fontFamily}</p>
      <p>fontColor: {fontColor}</p>
      <p>hasFontShadow: {hasFontShadow.toString()}</p>
      <p>modalFlag: {modalFlag}</p>
    </div>
  );
}

export default Debug;
