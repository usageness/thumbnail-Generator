import { useState } from 'react';

import ThumbnailData from '../../types/thumbnail';
import Preview from './Preview';
import Sidebar from './Sidebar';

const defaultThumbnailData: ThumbnailData = {
  imageSize: null,
  backgroundType: null,
  backgroundImageSrc: null,
  backgroundColor: null,
  backgroundGradint: null,
  title: null,
  subtitle: null,
  fontColor: null,
  fontBackgroundColor: null,
  hasFontBackgroundColor: null,
  hasFontShadow: null,
};

function Main() {
  const [thumbnailData, setThumbnailData] = useState(defaultThumbnailData);

  return (
    <>
      <Sidebar
        thumbnailData={thumbnailData}
        setThumbnailData={setThumbnailData}
      />
      {/* <Preview thumbnailData={thumbnailData} /> */}
      {/* <div className="inputForm">
        <form name="form" action="/img/req" method="post">
          <label htmlFor="image_url">이미지 주소</label>
          <input
            id="image_url"
            type="text"
            name="image_url"
            placeholder="배경 이미지 주소"
          />

          <label htmlFor="title_main">제목</label>
          <input
            id="title_main"
            type="text"
            name="title_main"
            placeholder="제목"
          />

          <label htmlFor="title_sub">부제목</label>
          <input
            id="title_sub"
            type="text"
            name="title_sub"
            placeholder="부제목"
          />

          <label htmlFor="bg_color">텍스트 배경 색상</label>
          <label htmlFor="bg_opacity"> / 투명</label>
          <input
            id="bg_opacity"
            type="checkbox"
            name="bg_opacity"
            value="bg_opacity"
            placeholder="투명"
          />
          <input id="bg_color" type="color" name="bg_color" placeholder="" />

          <br />
          <label htmlFor="font_color">폰트 색상</label>
          <input
            id="font_color"
            type="color"
            name="font_color"
            placeholder=""
          />

          <label htmlFor="font_shadow">그림자 효과</label>
          <input
            id="font_shadow"
            type="checkbox"
            name="font_shadow"
            value="font_shadow"
            placeholder="그림자"
          />
          <p>
            * 텍스트 배경 색상 <strong>투명</strong>을 체크하면 배경 색상이
            나타나지 않습니다.
          </p>

          <input id="submit" type="submit" name="submit" value="썸네일 생성" />
        </form>
      </div>
      <h2>유의 사항</h2>
      <ul>
        <li>
          사용하신 배경 이미지의 권리에 대하여 썸네일 생성기는 책임을 지지
          않습니다. <strong>배경 이미지의 사용 범위</strong>를 꼭 확인해주세요.
        </li>
        <li>
          버그나 개선 사항은{' '}
          <a href="https://github.com/usageness/thumbnail-Generator">개발자</a>
          에게 알려주시면 감사하겠습니다.
        </li>
      </ul> */}
    </>
  );
}

export default Main;
