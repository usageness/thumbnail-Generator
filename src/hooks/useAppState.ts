import { useState } from 'react';

export interface UseAppStateReturnType {
  debugMode: boolean;
  toggleDebugMode: () => void;
}

const useAppState = (): UseAppStateReturnType => {
  const [debugMode, setDebugMode] =
    useState<UseAppStateReturnType['debugMode']>(false);

  const toggleDebugMode = (): void => {
    setDebugMode(prev => !prev);
  };

  return {
    debugMode,
    toggleDebugMode,
  };
};

export default useAppState;
