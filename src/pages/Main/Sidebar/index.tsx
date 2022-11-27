import Image from 'assets/image.svg';
import Palette from 'assets/palette.svg';
import ThumbnailData from 'types/thumbnail';
import { useContext } from 'react';
import { ThumbnailContext } from 'stores/thumbnailContext';
import { ModalContext } from 'stores/modalContext';
import styles from './index.scss';

function Sidebar() {
  const thumbnailData = useContext(ThumbnailContext);
  const modalObject = useContext(ModalContext);

  if (!thumbnailData || !modalObject) return <></>;

  const {
    useImageSize,
    useBackgroundType,
    useBackgroundImageSrc,
    useBackgroundColor,
    useBackgroundGradint,
    useTitle,
    useSubtitle,
    useFontColor,
    useFontBackgroundColor,
    useHasFontBackgroundColor,
    useHasFontShadow,
  } = thumbnailData;
  const { showBackgroundColorModal, showBackgroundImageModal } = modalObject;

  const { imageSize, setImageSize } = useImageSize();
  const { backgroundType, setBackgroundType } = useBackgroundType();
  const { backgroundImageSrc, setBackgroundImageSrc } = useBackgroundImageSrc();
  const { backgroundColor, setBackgroundColor } = useBackgroundColor();
  const { backgroundGradint, setBackgroundGradint } = useBackgroundGradint();
  const { title, setTitle } = useTitle();
  const { subtitle, setSubtitle } = useSubtitle();
  const { fontColor, setFontColor } = useFontColor();
  const { fontBackgroundColor, setFontBackgroundColor } =
    useFontBackgroundColor();
  const { hasFontBackgroundColor, setHasFontBackgroundColor } =
    useHasFontBackgroundColor();
  const { hasFontShadow, setHasFontShadow } = useHasFontShadow();

  const changeImageSize = (newSize: ThumbnailData['imageSize']) => {
    setImageSize(newSize);
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const changeFontColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(e.target.value);
  };

  const changeFontBackgroundColor = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFontBackgroundColor(e.target.value);
  };

  const changeHasFontBackgroundColor = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHasFontBackgroundColor(prev => !prev);
  };

  const changeHasFontShadow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasFontShadow(prev => !prev);
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
            1024 X 720
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
        <label htmlFor="font_color">폰트 색상</label>
        <input
          id="font_color"
          type="color"
          name="font_color"
          onChange={changeFontColor}
          placeholder=""
        />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="bg_color">텍스트 배경 색상</label>
        <input
          id="bg_color"
          type="color"
          name="bg_color"
          value={fontBackgroundColor}
          onChange={changeFontBackgroundColor}
          placeholder=""
        />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="bg_opacity">배경색 없음</label>
        <input
          id="bg_opacity"
          type="checkbox"
          name="bg_opacity"
          checked={hasFontBackgroundColor}
          onChange={changeHasFontBackgroundColor}
          placeholder="배경색 없음"
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
          placeholder="그림자 효과"
        />
      </div>
      <div className={styles.submitButtonContainer}>
        <button onClick={() => alert('준비중입니다')}>
          최근 설정 불러오기
        </button>
        <button className={styles.submitButton}>썸네일 생성</button>
      </div>
    </div>
  );
}

export default Sidebar;
