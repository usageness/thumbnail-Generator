interface ThumbnailData {
  imageSize: '16:9' | '4:3' | '1:1';
  backgroundType: 'Color' | 'Gradient' | 'Image' | null;
  backgroundImageSrc: string;
  backgroundColor: string;
  backgroundGradint: { start: string; end: string };
  title: string;
  subtitle: string;
  fontColor: string;
  fontBackgroundColor: string;
  hasFontBackgroundColor: boolean;
  hasFontShadow: boolean;
}

export default ThumbnailData;
