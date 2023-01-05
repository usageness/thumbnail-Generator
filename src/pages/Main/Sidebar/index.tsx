import { useContext } from 'react';
import useThumbnailData from 'hooks/useThumbnailData';
import { ModalContext } from 'stores/modalContext';

import Image from 'assets/image.svg';
import Palette from 'assets/palette.svg';
import ThumbnailData from 'types/thumbnail';
import styles from './index.scss';

function Sidebar() {
  const {
    isLoading,
    imageSize,
    setImageSize,
    backgroundBlur,
    setBackgroundBlur,
    setTitle,
    setSubtitle,
    setFontSize,
    setFontFamily,
    setFontColor,
    hasFontShadow,
    setHasFontShadow,
    saveCurrentConfiguration,
    loadLatestConfiguration,
  } = useThumbnailData();
  const modalObject = useContext(ModalContext);

  if (isLoading || !modalObject) return <></>;

  const {
    showBackgroundColorModal,
    showBackgroundImageModal,
    showCreateThumbnailModal,
  } = modalObject;

  const changeImageSize = (newSize: ThumbnailData['imageSize']) => {
    setImageSize(newSize);
  };

  const changeBackgroundBlur = () => {
    setBackgroundBlur(prev => !prev);
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const changeFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // TODO: 나중에 타입 추론 제대로 해주기
    const selectedSize = e.target.value as ThumbnailData['fontSize'];

    setFontSize(selectedSize);
  };

  const changeFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // TODO: 나중에 타입 추론 제대로 해주기
    const selectedFamily = e.target.value as ThumbnailData['fontFamily'];

    setFontFamily(selectedFamily);
  };

  const changeFontColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(e.target.value);
  };

  const changeHasFontShadow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasFontShadow(prev => !prev);
  };

  const generateThumbnail = () => {
    saveCurrentConfiguration();
    showCreateThumbnailModal();
  };

  return (
    <div className={styles.container}>
      <h3>파일 사이즈 선택</h3>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.FHD_Button} ${
              imageSize === '16:9' && styles.selected
            }`}
            onClick={() => changeImageSize('16:9')}
          >
            1920 X 1080
          </button>
          <p>16 : 9</p>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.XGA_Button} ${
              imageSize === '4:3' && styles.selected
            }`}
            onClick={() => changeImageSize('4:3')}
          >
            1024 X 768
          </button>
          <p>4 : 3</p>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.SQUARE_Button} ${
              imageSize === '1:1' && styles.selected
            }`}
            onClick={() => changeImageSize('1:1')}
          >
            600 X 600
          </button>
          <p>1 : 1</p>
        </div>
      </div>
      <h3>배경 선택</h3>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.backgroundTypeSelectButton}
            onClick={showBackgroundColorModal}
          >
            <img src={Palette} className={styles.imageInButton} />
          </button>
          색상, 그라데이션
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.backgroundTypeSelectButton}
            onClick={showBackgroundImageModal}
          >
            <img src={Image} className={styles.imageInButton} />
          </button>
          이미지
        </div>
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="background_blur">배경 흐리게</label>
        <input
          id="background_blur"
          type="checkbox"
          name="background_blur"
          value="background_blur"
          checked={backgroundBlur}
          onChange={changeBackgroundBlur}
        />
      </div>
      <div className={styles.titleContainer}>
        <h3>제목</h3>
        <input
          id="title"
          type="text"
          name="title"
          onChange={changeTitle}
          placeholder="썸네일 제목"
        />
      </div>
      <div className={styles.titleContainer}>
        <h3>소제목</h3>
        <input
          id="subtitle"
          type="text"
          name="subtitle"
          onChange={changeSubtitle}
          placeholder="썸네일 소제목"
        />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="font_size">글자 크기</label>
        <select name="font_size" onChange={changeFontSize}>
          <option value="Small">작음</option>
          <option value="Normal">보통</option>
          <option value="Big">큼</option>
        </select>
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="font_family">폰트 스타일</label>
        <select name="font_family" onChange={changeFontFamily}>
          <option value="나눔고딕체">나눔고딕체</option>
          <option value="도현체">도현체</option>
          <option value="원스토어모바일POP체">원스토어모바일POP체</option>
        </select>
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="font_color">글자 색</label>
        <input
          id="font_color"
          type="color"
          name="font_color"
          onChange={changeFontColor}
          placeholder=""
        />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="font_shadow">그림자 효과</label>
        <input
          id="font_shadow"
          type="checkbox"
          name="font_shadow"
          value="font_shadow"
          checked={hasFontShadow}
          onChange={changeHasFontShadow}
        />
      </div>
      <div className={styles.submitButtonContainer}>
        <button onClick={loadLatestConfiguration}>최근 설정 불러오기</button>
        <button className={styles.submitButton} onClick={generateThumbnail}>
          썸네일 생성
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
