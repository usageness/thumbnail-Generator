import Info from 'assets/info.svg';
import Setting from 'assets/setting.svg';
import { useContext } from 'react';
import { ModalContext } from 'stores/modalContext';
import styles from './index.scss';

function OptionTab() {
  const modalObject = useContext(ModalContext);

  if (!modalObject) return <></>;

  const { showInformationModal, showOptionModal } = modalObject;

  return (
    <div className={styles.tabContainer}>
      <button className={styles.tabButton} onClick={showOptionModal}>
        <img src={Setting} />
      </button>
      <button className={styles.tabButton} onClick={showInformationModal}>
        <img src={Info} />
      </button>
    </div>
  );
}

export default OptionTab;
