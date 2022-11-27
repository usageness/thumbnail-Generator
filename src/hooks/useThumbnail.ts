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
  useFontColor: () => {
    fontColor: ThumbnailData['fontColor'];
    setFontColor: React.Dispatch<
      React.SetStateAction<ThumbnailData['fontColor']>
    >;
  };
  useFontBackgroundColor: () => {
    fontBackgroundColor: ThumbnailData['fontBackgroundColor'];
    setFontBackgroundColor: React.Dispatch<
      React.SetStateAction<ThumbnailData['fontBackgroundColor']>
    >;
  };
  useHasFontBackgroundColor: () => {
    hasFontBackgroundColor: ThumbnailData['hasFontBackgroundColor'];
    setHasFontBackgroundColor: React.Dispatch<
      React.SetStateAction<ThumbnailData['hasFontBackgroundColor']>
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
  title: '',
  subtitle: '',
  fontColor: '#000000',
  fontBackgroundColor: '#ffffff',
  hasFontBackgroundColor: false,
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
  const [title, setTitle] = useState(defaultThumbnailData.title);
  const [subtitle, setSubtitle] = useState(defaultThumbnailData.subtitle);
  const [fontColor, setFontColor] = useState(defaultThumbnailData.fontColor);
  const [fontBackgroundColor, setFontBackgroundColor] = useState(
    defaultThumbnailData.fontBackgroundColor,
  );
  const [hasFontBackgroundColor, setHasFontBackgroundColor] = useState(
    defaultThumbnailData.hasFontBackgroundColor,
  );
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
    useTitle: () => ({
      title,
      setTitle,
    }),
    useSubtitle: () => ({
      subtitle,
      setSubtitle,
    }),
    useFontColor: () => ({
      fontColor,
      setFontColor,
    }),
    useFontBackgroundColor: () => ({
      fontBackgroundColor,
      setFontBackgroundColor,
    }),
    useHasFontBackgroundColor: () => ({
      hasFontBackgroundColor,
      setHasFontBackgroundColor,
    }),
    useHasFontShadow: () => ({
      hasFontShadow,
      setHasFontShadow,
    }),
  };
};

export default useThumbnail;
