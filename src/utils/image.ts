import { corsPrefixUrl, isCors } from 'constant/constant';

export const loadBackgroundImage = (
  backgroundImageSrc: string,
  useCors = isCors,
) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.src = `${useCors ? corsPrefixUrl : ''}${backgroundImageSrc}`;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      resolve(img);
    };

    img.onerror = reject;
  });
};
