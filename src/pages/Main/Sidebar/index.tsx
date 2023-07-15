import { useContext, useState } from 'react';
import BackgroundSidebar from './BackgroundSidebar';
import TextSidebar from './TextSidebar';
import useThumbnailData from 'hooks/useThumbnailData';
import { ModalContext } from 'stores/modalContext';
import styles from './index.scss';

type ActiveTabType = 'layout' | 'text';

function Sidebar() {
  const { isLoading, saveCurrentConfiguration, loadLatestConfiguration } =
    useThumbnailData();
  const modalObject = useContext(ModalContext);
  const [activeTab, setActiveTab] = useState<ActiveTabType>('layout');

  if (isLoading || !modalObject) return <></>;

  const { showCreateThumbnailModal } = modalObject;

  const generateThumbnail = () => {
    saveCurrentConfiguration();
    showCreateThumbnailModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabMenu}>
        <button
          className={`${activeTab === 'layout' ? styles.selected : ''}`}
          onClick={() => setActiveTab('layout')}
        >
          레이아웃
        </button>
        <button
          className={`${activeTab === 'text' ? styles.selected : ''}`}
          onClick={() => setActiveTab('text')}
        >
          텍스트
        </button>
      </div>
      <div className={styles.propertyContainer}>
        {activeTab === 'layout' ? <BackgroundSidebar /> : <TextSidebar />}
        <div className={styles.submitButtonContainer}>
          <button onClick={loadLatestConfiguration}>최근 설정 불러오기</button>
          <button className={styles.submitButton} onClick={generateThumbnail}>
            썸네일 생성
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
