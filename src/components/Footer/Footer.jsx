import React from 'react'
import { path } from 'src/constants/path'
import * as S from './footer.style'
export default function Footer() {
  return (
    <div className="container">
      <S.Footer>
        <div className="wide">
          <S.ContainerFooter>
            <S.FooterLeft>
              <S.FooterLeftTitle>
                <span> 이용약관</span>
                <span> 개인정보처리방침</span>
                <span> 고객센터</span>
              </S.FooterLeftTitle>
              <S.FooterLeftSub>
                비디온리 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 이메일 : test0101@vidionly.co.kr｜ FAX :
                070-0000-0000 서울특별시 강남구 도산대로 8길 17 3층
              </S.FooterLeftSub>
              <S.FooterLeftCoppyRight>Copyright© VIDIONLY All rights reserved.</S.FooterLeftCoppyRight>
            </S.FooterLeft>
            <S.FooterRight>
              <S.FooterRightBox to={path.home}>
                <img src="images/footer-sns-icon-1.png" alt="" />
              </S.FooterRightBox>
              <S.FooterRightBox to={path.home}>
                <img src="images/footer-sns-icon-2.png" alt="" />
              </S.FooterRightBox>
              <S.FooterRightBox to={path.home}>
                <img src="images/footer-sns-icon-3.png" alt="" />
              </S.FooterRightBox>
              <S.FooterRightBox to={path.home}>
                <img src="images/footer-sns-icon-4.png" alt="" />
              </S.FooterRightBox>
            </S.FooterRight>
          </S.ContainerFooter>
        </div>
      </S.Footer>
    </div>
  )
}
