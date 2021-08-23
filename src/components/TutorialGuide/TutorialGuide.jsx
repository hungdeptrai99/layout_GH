import React from 'react'
import { useState } from 'react'
import ProductTutorial from '../ProductTutorial/ProductTutorial'
import * as S from './tutorialGuide.style'
export default function TutorialGuide() {
  const [products] = useState([
    {
      bgimg: 'images/thumbnail-01.png',
      sub: '두번째',
      arrow_img: 'images/arrow-icon.png',
      title1: '내 브랜드에 맞는',
      title2: '영상 만들기'
    },
    {
      bgimg: 'images/thumbnail-02.png',
      sub: '두번째',
      arrow_img: 'images/arrow-icon.png',
      title1: '  작업자들이 소통하며',
      title2: '템플릿 영상 작업'
    },
    {
      bgimg: 'images/thumbnail-03.png',
      sub: '두번째',
      arrow_img: 'images/arrow-icon.png',
      title1: ' 단 하나 뿐인',
      title2: '내 브랜드 영상 제작 완료'
    }
  ])

  return (
    <S.Container>
      <div className="wide">
        <S.TitleEnglish>Tutorial Guide</S.TitleEnglish>
        <S.Title>영상 만들기, 어렵지 않아요</S.Title>
        <S.SubTitle>
          <span>나에게 맞는 템플릿,</span> <span> 망설이지 말고 지금 직접 체험해보세요! </span>
        </S.SubTitle>
        <S.ProductList>
          {products.map((product, index) => (
            <ProductTutorial key={index} product={product} />
          ))}
        </S.ProductList>
      </div>
    </S.Container>
  )
}
