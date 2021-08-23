import React, { useState } from 'react'
import { path } from 'src/constants/path'
import BrandProductOrange from '../BrandProductOrange/BrandProductOrange'
import BrandProductWhite from '../BrandProductWhite/BrandProductWhite'
import * as S from './brand.style'
export default function Brand() {
  const [productsOrange] = useState([
    {
      image: 'images/img-01.png',
      sub: 'What is the videonly',
      title: '비디온리는 무엇인가요?',
      content:
        '세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다 .우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록 컨설팅을 해줄 수 있습니다. 세계에서 하나 뿐인 템플릿, 직접 경험해보세요. '
    }
  ])
  const [productsWhite] = useState([
    {
      image: 'images/img-02.png',
      sub: 'How do I make a video',
      title: '영상제작은 어떻게하나요?',
      content:
        '오직 단 하나의 영상 템플릿을 만들기 때문에 절차가 어려울 것이라고 생각합니다. 하지만 우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록 컨설팅을 합니다. 세계에서 단 하나뿐인 템플릿, 어렵게 생각하지 마세요. 비디 온리와 함께라면 쉽고 간편하게 만들 수 있습니다.'
    }
  ])
  return (
    <div>
      <S.ContainerIntroBrand>
        <S.ImageBrand src="images/longbanner-01.png" alt="" />
        <S.TitleBrand>퀄리티있는 브랜딩, 비디온리 하세요</S.TitleBrand>
        <S.SubTitleBrand>나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요!</S.SubTitleBrand>
        <S.ButtonBrand to={path.home}>시작하기</S.ButtonBrand>
      </S.ContainerIntroBrand>
      <S.ContainerBrandProduct>
        {productsOrange.map((product, index) => (
          <BrandProductOrange key={index} product={product} />
        ))}

        {productsWhite.map((product, index) => (
          <BrandProductWhite key={index} product={product} />
        ))}
      </S.ContainerBrandProduct>
    </div>
  )
}
