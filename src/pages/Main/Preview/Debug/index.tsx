import { useContext } from 'react';
import useThumbnailData from 'hooks/useThumbnailData';
import { ModalContext } from 'stores/modalContext';
import styles from './index.scss';
import { AppStateContext } from 'stores/appStateContext';

function Debug() {
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

  const modalObject = useContext(ModalContext);
  const appStateObject = useContext(AppStateContext);

  if (isLoading || !modalObject || !appStateObject) return <></>;

  const { modalFlag } = modalObject;
  const { debugMode } = appStateObject;

  return (
    <>
      {debugMode ? (
        <div className={styles.debugContainer}>
          <p>imageSize: {imageSize}</p>
          <p>backgroundType: {backgroundType}</p>
          <p>backgroundImageSrc: {backgroundImageSrc}</p>
          <p>backgroundColor: {backgroundColor}</p>
          <p>
            backgroundGradint: {backgroundGradint.start} /{' '}
            {backgroundGradint.end}
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
      ) : (
        <></>
      )}
    </>
  );
}

export default Debug;
