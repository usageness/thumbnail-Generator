import { useState } from 'react';
import ThumbnailData from 'types/thumbnail';

export interface useThumbnailReturnValues {
  useImageSize: () => {
    imageSize: ThumbnailData['imageSize'];
    setImageSize: React.Dispatch<
      React.SetStateAction<ThumbnailData['imageSize']>
    >;
  };
  useBackgroundType: () => {
    backgroundType: ThumbnailData['backgroundType'];
    setBackgroundType: React.Dispatch<
      React.SetStateAction<ThumbnailData['backgroundType']>
    >;
  };
  useBackgroundImageSrc: () => {
    backgroundImageSrc: ThumbnailData['backgroundImageSrc'];
    setBackgroundImageSrc: React.Dispatch<
      React.SetStateAction<ThumbnailData['backgroundImageSrc']>
    >;
  };
  useBackgroundColor: () => {
    backgroundColor: ThumbnailData['backgroundColor'];
    setBackgroundColor: React.Dispatch<
      React.SetStateAction<ThumbnailData['backgroundColor']>
    >;
  };
  useBackgroundGradint: () => {
    backgroundGradint: ThumbnailData['backgroundGradint'];
    setBackgroundGradint: React.Dispatch<
      React.SetStateAction<ThumbnailData['backgroundGradint']>
    >;
  };
  useBackgroundFilter: () => {
    backgroundFilter: ThumbnailData['backgroundFilter'];
    setBackgroundFilter: React.Dispatch<
      React.SetStateAction<ThumbnailData['backgroundFilter']>
    >;
  };
  useTitle: () => {
    title: ThumbnailData['title'];
    setTitle: React.Dispatch<React.SetStateAction<ThumbnailData['title']>>;
  };
  useSubtitle: () => {
    subtitle: ThumbnailData['subtitle'];
    setSubtitle: React.Dispatch<
      React.SetStateAction<ThumbnailData['subtitle']>
    >;
  };
  useFontSize: () => {
    fontSize: ThumbnailData['fontSize'];
    setFontSize: React.Dispatch<
      React.SetStateAction<ThumbnailData['fontSize']>
    >;
  };
  useFontFamily: () => {
    fontFamily: ThumbnailData['fontFamily'];
    setFontFamily: React.Dispatch<
      React.SetStateAction<ThumbnailData['fontFamily']>
    >;
  };
  useFontColor: () => {
    fontColor: ThumbnailData['fontColor'];
    setFontColor: React.Dispatch<
      React.SetStateAction<ThumbnailData['fontColor']>
    >;
  };
  useHasFontShadow: () => {
    hasFontShadow: ThumbnailData['hasFontShadow'];
    setHasFontShadow: React.Dispatch<
      React.SetStateAction<ThumbnailData['hasFontShadow']>
    >;
  };
}

const defaultThumbnailData: ThumbnailData = {
  imageSize: '16:9',
  backgroundType: 'Color',
  backgroundImageSrc: '',
  backgroundColor: '#ffffff',
  backgroundGradint: { start: '#ffffff', end: '#ffffff' },
  backgroundFilter: null,
  title: '',
  subtitle: '',
  fontSize: 'Small',
  fontFamily: '나눔고딕체',
  fontColor: '#000000',
  hasFontShadow: false,
};

const useThumbnail = (): useThumbnailReturnValues => {
  const [imageSize, setImageSize] = useState(defaultThumbnailData.imageSize);
  const [backgroundType, setBackgroundType] = useState(
    defaultThumbnailData.backgroundType,
  );
  const [backgroundImageSrc, setBackgroundImageSrc] = useState(
    defaultThumbnailData.backgroundImageSrc,
  );
  const [backgroundColor, setBackgroundColor] = useState(
    defaultThumbnailData.backgroundColor,
  );
  const [backgroundGradint, setBackgroundGradint] = useState(
    defaultThumbnailData.backgroundGradint,
  );
  const [backgroundFilter, setBackgroundFilter] = useState(
    defaultThumbnailData.backgroundFilter,
  );
  const [title, setTitle] = useState(defaultThumbnailData.title);
  const [subtitle, setSubtitle] = useState(defaultThumbnailData.subtitle);
  const [fontSize, setFontSize] = useState(defaultThumbnailData.fontSize);
  const [fontFamily, setFontFamily] = useState(defaultThumbnailData.fontFamily);
  const [fontColor, setFontColor] = useState(defaultThumbnailData.fontColor);
  const [hasFontShadow, setHasFontShadow] = useState(
    defaultThumbnailData.hasFontShadow,
  );

  return {
    useImageSize: () => ({
      imageSize,
      setImageSize,
    }),
    useBackgroundType: () => ({
      backgroundType,
      setBackgroundType,
    }),
    useBackgroundImageSrc: () => ({
      backgroundImageSrc,
      setBackgroundImageSrc,
    }),
    useBackgroundColor: () => ({
      backgroundColor,
      setBackgroundColor,
    }),
    useBackgroundGradint: () => ({
      backgroundGradint,
      setBackgroundGradint,
    }),
    useBackgroundFilter: () => ({
      backgroundFilter,
      setBackgroundFilter,
    }),
    useTitle: () => ({
      title,
      setTitle,
    }),
    useSubtitle: () => ({
      subtitle,
      setSubtitle,
    }),
    useFontSize: () => ({
      fontSize,
      setFontSize,
    }),
    useFontFamily: () => ({
      fontFamily,
      setFontFamily,
    }),
    useFontColor: () => ({
      fontColor,
      setFontColor,
    }),
    useHasFontShadow: () => ({
      hasFontShadow,
      setHasFontShadow,
    }),
  };
};

export default useThumbnail;
