interface ThumbnailData {
  imageSize: '16:9' | '4:3' | null;
  backgroundType: 'Color' | 'Gradient' | 'Image' | null;
  backgroundImageSrc: string | null;
  backgroundColor: string | null;
  backgroundGradint: string | null;
  title: string | null;
  subtitle: string | null;
  fontColor: string | null;
  fontBackgroundColor: string | null;
  hasFontBackgroundColor: boolean | null;
  hasFontShadow: boolean | null;
}

export default ThumbnailData;
