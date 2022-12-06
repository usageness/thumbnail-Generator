import { useContext } from 'react';
import useClosingState from 'hooks/useClosingState';
import Modal, { modalAnimationTime } from 'components/Modal';
import { ModalContext } from 'stores/modalContext';
import Github from 'assets/github.svg';
import Mail from 'assets/mail.svg';
import Help from 'assets/help.svg';
import styles from './index.scss';

function Information() {
  const modalObject = useContext(ModalContext);

  if (!modalObject) return <></>;

  const { modalFlag, setOffModal } = modalObject;
  const { close } = useClosingState(modalAnimationTime, setOffModal);

  const goToGithub = () => {
    window.open('https://github.com/usageness/thumbnail-Generator');
  };

  const goToMail = () => {
    window.open('mailto://kyr9389@naver.com');
  };

  const goToDocs = () => {
    window.open(
      'https://usageness.notion.site/Thumbnail-Generator-a7b2c6bd7e044f89b28c925966e8edb4',
    );
  };

  return (
    <Modal modalState={modalFlag === 'information'}>
      <div className={styles.container}>
        <p className={styles.description}>
          썸네일 생성기는 유튜브, 블로그 등에 사용할 수 있는 썸네일을 빠르게
          만들어주는 웹 어플리케이션입니다. 버그나 개선사항은 개발자 이메일 또는
          깃허브 이슈를 통해 남겨주시면 감사하겠습니다.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.linkButton} onClick={goToMail}>
            <img src={Mail} />
          </button>
          <button className={styles.linkButton} onClick={goToGithub}>
            <img src={Github} />
          </button>
          <button className={styles.linkButton} onClick={goToDocs}>
            <img src={Help} />
          </button>
        </div>
        <button className={styles.closeButton} onClick={close}>
          닫기
        </button>
      </div>
    </Modal>
  );
}

export default Information;
