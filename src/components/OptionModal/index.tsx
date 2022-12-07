import { useContext } from 'react';
import Modal from 'components/Modal';
import { ModalContext } from 'stores/modalContext';
import { AppStateContext } from 'stores/appStateContext';
import styles from './index.scss';

function OptionModal() {
  const modalObject = useContext(ModalContext);
  const appStateObject = useContext(AppStateContext);

  if (!modalObject || !appStateObject) return <></>;

  const { modalFlag } = modalObject;
  const { debugMode, toggleDebugMode } = appStateObject;

  return (
    <Modal modalState={modalFlag === 'option'}>
      <h3>환경 설정</h3>
      <div className={styles.singleInputContainer}>
        <label htmlFor="debug_mode">디버깅 옵션</label>
        <input
          id="debug_mode"
          type="checkbox"
          name="debug_mode"
          value="debug_mode"
          checked={debugMode}
          onChange={toggleDebugMode}
        />
      </div>
    </Modal>
  );
}

export default OptionModal;
