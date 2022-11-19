import styles from './index.scss';
import ThumbnailData from 'types/thumbnail';

interface ThumbnailState {
  thumbnailData: ThumbnailData;
  setThumbnailData: React.Dispatch<React.SetStateAction<ThumbnailData>>;
}

function Sidebar({ thumbnailData, setThumbnailData }: ThumbnailState) {
  return (
    <div className={styles.container}>
      <h3>파일 사이즈 선택</h3>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <button className={styles.FHD_Button}>1920 X 1080</button>
          <p>16 : 9</p>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.XGA_Button}>1024 X 720</button>
          <p>4 : 3</p>
        </div>
      </div>
      <h3>배경 선택</h3>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <button className={styles.backgroundTypeSelectButton} />
          색상, 그라데이션
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.backgroundTypeSelectButton} />
          이미지
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h3>제목</h3>
        <input id="title" type="text" name="title" placeholder="썸네일 제목" />
      </div>
      <div className={styles.titleContainer}>
        <h3>소제목</h3>
        <input
          id="subtitle"
          type="text"
          name="subtitle"
          placeholder="썸네일 소제목"
        />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="font_color">폰트색</label>
        <input id="font_color" type="color" name="font_color" placeholder="" />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="bg_color">배경색</label>
        <input id="bg_color" type="color" name="bg_color" placeholder="" />
      </div>
      <div className={styles.singleInputContainer}>
        <label htmlFor="bg_opacity">배경색 없음</label>
        <input
          id="bg_opacity"
          type="checkbox"
          name="bg_opacity"
          value="bg_opacity"
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
          placeholder="그림자 효과"
        />
      </div>
      <div className={styles.submitButtonContainer}>
        <button>최근 설정 불러오기</button>
        <button className={styles.submitButton}>썸네일 생성</button>
      </div>
    </div>
  );
}

export default Sidebar;
