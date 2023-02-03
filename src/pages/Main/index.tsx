import useThumbnail from 'hooks/useThumbnail';
import useAppState from 'hooks/useAppState';
import useModal from 'hooks/useModal';
import Preview from './Preview';
import BackgroundSidebar from './Sidebar/BackgroundSidebar';
import TextSidebar from './Sidebar/TextSidebar';
import BackgroundColor from 'components/BackgroundColor';
import BackgroundImage from 'components/BackgroundImage';
import CreateThumbnail from 'components/CreateThumbnail';
import Information from 'components/Information';
import OptionModal from 'components/OptionModal';
import { ThumbnailContext } from 'stores/thumbnailContext';
import { ModalContext } from 'stores/modalContext';
import { AppStateContext } from 'stores/appStateContext';
import styles from './index.scss';

function Main() {
  return (
    <div className={styles.container}>
      <ModalContext.Provider value={useModal()}>
        <ThumbnailContext.Provider value={useThumbnail()}>
          <AppStateContext.Provider value={useAppState()}>
            <BackgroundSidebar />
            <Preview />
            <TextSidebar />
            <BackgroundColor />
            <BackgroundImage />
            <CreateThumbnail />
            <Information />
            <OptionModal />
          </AppStateContext.Provider>
        </ThumbnailContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default Main;
