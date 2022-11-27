import { useContext } from 'react';
import Portal from 'components/Portal';
import useClosingState from 'hooks/useClosingState';
import styles from './index.scss';
import { ModalContext } from 'stores/modalContext';

interface ModalProps {
  modalState: boolean;
  children: React.ReactNode;
}

const modalAnimationTime = 150;

function Modal({ modalState, children }: ModalProps): JSX.Element {
  const modalObject = useContext(ModalContext);
  if (!modalObject) return <></>;

  const { setOffModal } = modalObject;
  const { isClosing, close } = useClosingState(modalAnimationTime, setOffModal);

  const preventBubbling = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  return (
    <Portal>
      {modalState && (
        <div
          className={`${styles.dimmer} ${isClosing ? 'close' : ''}`}
          onClick={close}
        >
          <div
            className={`${styles.content} ${isClosing ? 'close' : ''}`}
            onClick={preventBubbling}
          >
            {children}
          </div>
        </div>
      )}
    </Portal>
  );
}

export default Modal;
