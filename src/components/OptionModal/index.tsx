import { useContext } from 'react';
import Modal from 'components/Modal';
import { ModalContext } from 'stores/modalContext';
import { AppStateContext } from 'stores/appStateContext';
import styles from './index.scss';
import { localStorageKey } from 'constant/constant';

function OptionModal() {
  const modalObject = useContext(ModalContext);
  const appStateObject = useContext(AppStateContext);

  if (!modalObject || !appStateObject) return <></>;

  const { modalFlag } = modalObject;
  const { debugMode, toggleDebugMode } = appStateObject;

  const removeLocalData = () => {
    localStorage.removeItem(localStorageKey.latestConfiguration);
    alert('데이터를 성공적으로 삭제했습니다');
  };

  return (
    <Modal modalState={modalFlag === 'option'}>
      <h3>환경 설정</h3>
      <div className={styles.menuContainer}>
        <div className={styles.singleLineContainer}>
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
        <div className={styles.singleLineContainer}>
          <p>저장된 데이터 지우기</p>
          <button onClick={removeLocalData}>삭제하기</button>
        </div>
      </div>
    </Modal>
  );
}

export default OptionModal;
