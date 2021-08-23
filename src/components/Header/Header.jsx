import React from 'react'
import { path } from 'src/constants/path'
import * as S from './header.style'
export default function Header() {
  return (
    <div className="container">
      <S.BannerImage>
        <S.BgImage src="images/mainbanner.png" alt="" />
        <div className="wide">
          <S.ContainerHeader>
            <S.Logo to={path.home}>
              <img src="images/videonly-logo.png" alt="" />
            </S.Logo>
            <S.Navbar>
              <S.Login to={path.home}>LOGIN</S.Login>
              <S.Join to={path.home}>JOIN</S.Join>
            </S.Navbar>
          </S.ContainerHeader>
          <S.TitleHeader>
            <span>비디온리는 </span>
            <span>오직 당신의 브랜드만를 위해</span>
            <span>템플릿을 만듭니다</span>
          </S.TitleHeader>
          <S.SubHeader>나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.</S.SubHeader>
          <S.ButtonHeader to={path.home}>
            <span>시작하기 </span>
          </S.ButtonHeader>
        </div>
      </S.BannerImage>
    </div>
  )
}
