import { UseAppStateReturnType } from 'hooks/useAppState';
import { createContext } from 'react';

export const AppStateContext = createContext<UseAppStateReturnType | null>(
  null,
);
