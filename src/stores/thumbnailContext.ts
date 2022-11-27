import { useThumbnailReturnValues } from 'hooks/useThumbnail';
import { createContext } from 'react';

export const ThumbnailContext = createContext<useThumbnailReturnValues | null>(
  null,
);
