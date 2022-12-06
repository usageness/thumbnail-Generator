import { useContext } from 'react';
import { ThumbnailContext } from 'stores/thumbnailContext';
import ThumbnailData from 'types/thumbnail';

interface useThumbnailDataPendingReturnValues {
  isLoading: true;
  imageSize: undefined;
  setImageSize: undefined;
  backgroundType: undefined;
  setBackgroundType: undefined;
  backgroundImageSrc: undefined;
  setBackgroundImageSrc: undefined;
  backgroundColor: undefined;
  setBackgroundColor: undefined;
  backgroundGradint: undefined;
  setBackgroundGradint: undefined;
  backgroundBlur: undefined;
  setBackgroundBlur: undefined;
  title: undefined;
  setTitle: undefined;
  subtitle: undefined;
  setSubtitle: undefined;
  fontSize: undefined;
  setFontSize: undefined;
  fontFamily: undefined;
  setFontFamily: undefined;
  fontColor: undefined;
  setFontColor: undefined;
  hasFontShadow: undefined;
  setHasFontShadow: undefined;
}

interface useThumbnailDataFulfilledReturnValues {
  isLoading: false;
  imageSize: ThumbnailData['imageSize'];
  setImageSize: React.Dispatch<
    React.SetStateAction<ThumbnailData['imageSize']>
  >;
  backgroundType: ThumbnailData['backgroundType'];
  setBackgroundType: React.Dispatch<
    React.SetStateAction<ThumbnailData['backgroundType']>
  >;
  backgroundImageSrc: ThumbnailData['backgroundImageSrc'];
  setBackgroundImageSrc: React.Dispatch<
    React.SetStateAction<ThumbnailData['backgroundImageSrc']>
  >;
  backgroundColor: ThumbnailData['backgroundColor'];
  setBackgroundColor: React.Dispatch<
    React.SetStateAction<ThumbnailData['backgroundColor']>
  >;
  backgroundGradint: ThumbnailData['backgroundGradint'];
  setBackgroundGradint: React.Dispatch<
    React.SetStateAction<ThumbnailData['backgroundGradint']>
  >;
  backgroundBlur: ThumbnailData['backgroundBlur'];
  setBackgroundBlur: React.Dispatch<
    React.SetStateAction<ThumbnailData['backgroundBlur']>
  >;
  title: ThumbnailData['title'];
  setTitle: React.Dispatch<React.SetStateAction<ThumbnailData['title']>>;
  subtitle: ThumbnailData['subtitle'];
  setSubtitle: React.Dispatch<React.SetStateAction<ThumbnailData['subtitle']>>;
  fontSize: ThumbnailData['fontSize'];
  setFontSize: React.Dispatch<React.SetStateAction<ThumbnailData['fontSize']>>;
  fontFamily: ThumbnailData['fontFamily'];
  setFontFamily: React.Dispatch<
    React.SetStateAction<ThumbnailData['fontFamily']>
  >;
  fontColor: ThumbnailData['fontColor'];
  setFontColor: React.Dispatch<
    React.SetStateAction<ThumbnailData['fontColor']>
  >;
  hasFontShadow: ThumbnailData['hasFontShadow'];
  setHasFontShadow: React.Dispatch<
    React.SetStateAction<ThumbnailData['hasFontShadow']>
  >;
}

const useThumbnailData = ():
  | useThumbnailDataPendingReturnValues
  | useThumbnailDataFulfilledReturnValues => {
  const thumbnailData = useContext(ThumbnailContext);

  if (!thumbnailData)
    return {
      isLoading: true,
      imageSize: undefined,
      backgroundType: undefined,
      backgroundImageSrc: undefined,
      backgroundColor: undefined,
      backgroundGradint: undefined,
      backgroundBlur: undefined,
      title: undefined,
      subtitle: undefined,
      fontSize: undefined,
      fontFamily: undefined,
      fontColor: undefined,
      hasFontShadow: undefined,
      setImageSize: undefined,
      setBackgroundType: undefined,
      setBackgroundImageSrc: undefined,
      setBackgroundColor: undefined,
      setBackgroundGradint: undefined,
      setBackgroundBlur: undefined,
      setTitle: undefined,
      setSubtitle: undefined,
      setFontSize: undefined,
      setFontFamily: undefined,
      setFontColor: undefined,
      setHasFontShadow: undefined,
    };

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

  const { imageSize, setImageSize } = useImageSize();
  const { backgroundType, setBackgroundType } = useBackgroundType();
  const { backgroundImageSrc, setBackgroundImageSrc } = useBackgroundImageSrc();
  const { backgroundColor, setBackgroundColor } = useBackgroundColor();
  const { backgroundGradint, setBackgroundGradint } = useBackgroundGradint();
  const { backgroundBlur, setBackgroundBlur } = useBackgroundBlur();
  const { title, setTitle } = useTitle();
  const { subtitle, setSubtitle } = useSubtitle();
  const { fontSize, setFontSize } = useFontSize();
  const { fontFamily, setFontFamily } = useFontFamily();
  const { fontColor, setFontColor } = useFontColor();
  const { hasFontShadow, setHasFontShadow } = useHasFontShadow();

  return {
    isLoading: false,
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
    setImageSize,
    setBackgroundType,
    setBackgroundImageSrc,
    setBackgroundColor,
    setBackgroundGradint,
    setBackgroundBlur,
    setTitle,
    setSubtitle,
    setFontSize,
    setFontFamily,
    setFontColor,
    setHasFontShadow,
  };
};

export default useThumbnailData;