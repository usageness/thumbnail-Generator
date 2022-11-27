import useThumbnail from 'hooks/useThumbnail';
import useModal from 'hooks/useModal';
import Preview from './Preview';
import Sidebar from './Sidebar';
import BackgroundColor from 'components/BackgroundColor';
import BackgroundImage from 'components/BackgroundImage';
import { ThumbnailContext } from 'stores/thumbnailContext';
import { ModalContext } from 'stores/modalContext';
import styles from './index.scss';

function Main() {
  return (
    <div className={styles.container}>
      <ModalContext.Provider value={useModal()}>
        <ThumbnailContext.Provider value={useThumbnail()}>
          <Sidebar />
          <Preview />
          <BackgroundColor />
          <BackgroundImage />
        </ThumbnailContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default Main;
