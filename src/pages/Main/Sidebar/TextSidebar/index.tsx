import useThumbnailData from 'hooks/useThumbnailData';

import ThumbnailData from 'types/thumbnail';
import styles from './index.scss';

function TextSidebar() {
  const {
    isLoading,
    title,
    subtitle,
    fontSize,
    fontFamily,
    fontColor,
    setTitle,
    setSubtitle,
    setFontSize,
    setFontFamily,
    setFontColor,
    hasFontShadow,
    setHasFontShadow,
  } = useThumbnailData();

  if (isLoading) return <></>;

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const changeSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.currentTarget.value);
  };

  const changeFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // TODO: 나중에 타입 추론 제대로 해주기
    const selectedSize = e.currentTarget.value as ThumbnailData['fontSize'];

    setFontSize(selectedSize);
  };

  const changeFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // TODO: 나중에 타입 추론 제대로 해주기
    const selectedFamily = e.currentTarget.value as ThumbnailData['fontFamily'];

    setFontFamily(selectedFamily);
  };

  const changeFontColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(e.currentTarget.value);
  };

  const changeHasFontShadow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasFontShadow(prev => !prev);
  };

  return (
    <>
      <div className={styles.TextControlContainer}>
        <div className={styles.titleContainer}>
          <h3>제목</h3>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
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
            value={subtitle}
            onChange={changeSubtitle}
            placeholder="썸네일 소제목"
          />
        </div>
        <div className={styles.singleInputContainer}>
          <label htmlFor="font_family">폰트 스타일</label>
          <select
            name="font_family"
            value={fontFamily}
            onChange={changeFontFamily}
          >
            <option value="나눔고딕체">나눔고딕체</option>
            <option value="도현체">도현체</option>
            <option value="원스토어모바일POP체">원스토어모바일POP체</option>
          </select>
        </div>
        <div className={styles.singleInputContainer}>
          <label htmlFor="font_size">글자 크기</label>
          <select name="font_size" value={fontSize} onChange={changeFontSize}>
            <option value="Small">작음</option>
            <option value="Normal">보통</option>
            <option value="Big">큼</option>
          </select>
        </div>
        <div className={styles.singleInputContainer}>
          <label htmlFor="font_color">글자 색</label>
          <input
            id="font_color"
            type="color"
            name="font_color"
            value={fontColor}
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
      </div>
    </>
  );
}

export default TextSidebar;
