interface ThumbnailData {
  imageSize: '16:9' | '4:3' | '1:1';
  backgroundType: 'Color' | 'Gradient' | 'Image' | null;
  backgroundImageSrc: string;
  backgroundColor: string;
  backgroundGradint: { start: string; end: string };
  backgroundBlur: boolean;
  title: string;
  subtitle: string;
  fontSize: 'Small' | 'Normal' | 'Big';
  fontFamily: '나눔고딕체' | '도현체';
  fontColor: string;
  hasFontShadow: boolean;
}

export default ThumbnailData;
