import { corsPrefixUrl } from 'constant/constant';

export const loadBackgroundImage = (
  backgroundImageSrc: string,
  useCors = true,
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
