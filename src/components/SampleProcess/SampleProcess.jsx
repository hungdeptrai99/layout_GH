import React, { useState } from 'react'
import ProductProcess from '../ProductProcess/ProductProcess'
import * as S from './sampleProcess.style'
export default function SampleProcess() {
  const [productProcess] = useState([
    {
      title: '이미지 찾기',
      image: 'images/big-icon-01.png',
      subTitle: ' 내 회사에 맞는 이미지를 찾아 정합니다. '
    },
    {
      title: '만들기',
      image: 'images/big-icon-02.png',
      subTitle: ' 정해둔 이미지에 맞춰 템플릿을 만듭니다. '
    },
    {
      title: '정리하기',
      image: 'images/big-icon-03.png',
      subTitle: '회사와 비디온리가 소통을 통해 퀄리티를 높입니다. '
    },
    {
      title: '제작 완료',
      image: 'images/big-icon-04.png',
      subTitle: ' 세상에 단 하나 뿐인 영상 제작 완료! '
    }
  ])
  return (
    <div className="wide">
      <S.Container>
        <S.TitleSample>한 눈에 보는 템플릿 절차</S.TitleSample>
        <S.SubSample>
          <span>비디온리가 아직 고민되시나요?</span>
          <span>비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.</span>
        </S.SubSample>
        <S.ProductList>
          {productProcess.map((product, index) => (
            <ProductProcess key={index} product={product} />
          ))}
        </S.ProductList>
      </S.Container>
    </div>
  )
}
