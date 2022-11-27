import { UseModalReturnType } from 'hooks/useModal';
import { createContext } from 'react';

export const ModalContext = createContext<UseModalReturnType | null>(null);
