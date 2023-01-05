import ThumbnailData from 'types/thumbnail';

const getfontScale = (imageSize: ThumbnailData['imageSize']) => {
  return imageSize === '16:9' ? 3 : imageSize === '4:3' ? 2 : 1;
};

export const fontStyleBuilder = (
  usage: 'title' | 'subtitle',
  fontFamily: ThumbnailData['fontFamily'],
  fontSize: ThumbnailData['fontSize'],
  imageSize: ThumbnailData['imageSize'],
) => {
  const fontScale = getfontScale(imageSize);
  const detailTitleFontSize = () => {
    if (fontSize === 'Small') {
      return `${24 * fontScale}px`;
    }

    if (fontSize === 'Normal') {
      return `${36 * fontScale}px`;
    }

    if (fontSize === 'Big') {
      return `${48 * fontScale}px`;
    }
  };

  const detailsubtitleFontSize = () => {
    if (fontSize === 'Small') {
      return `${14 * fontScale}px`;
    }

    if (fontSize === 'Normal') {
      return `${18 * fontScale}px`;
    }

    if (fontSize === 'Big') {
      return `${22 * fontScale}px`;
    }
  };

  const detailFontFamily = () => {
    if (fontFamily === '나눔고딕체') {
      return 'NanumBarunGothic';
    }

    if (fontFamily === '도현체') {
      return 'BMDOHYEON';
    }

    if (fontFamily === '원스토어모바일POP체') {
      return 'ONE-Mobile-POP';
    }
  };

  return `bold ${
    usage === 'title' ? detailTitleFontSize() : detailsubtitleFontSize()
  } ${detailFontFamily()}`;
};
