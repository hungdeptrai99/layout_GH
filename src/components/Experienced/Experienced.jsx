import React from 'react'
import { useState } from 'react'
import { path } from 'src/constants/path'
import ProductExp from '../ProductExp/ProductExp'
import * as S from './experienced.style'
export default function Experienced() {
  const [products] = useState([
    {
      image: 'images/icon-01.png',
      sub: '사용중인 기업',
      quantity: 41
    },
    {
      image: 'images/icon-02.png',
      sub: '완료한 템플릿',
      quantity: 164
    },
    {
      image: 'images/icon-03.png',
      sub: '체험가능한  템플릿',
      quantity: 82
    }
  ])
  return (
    <S.BackgroundExp>
      <div className="wide">
        <S.TitleExp>체험 가능한 템플릿</S.TitleExp>
        <S.ProductListExp>
          {products.map((product, index) => (
            <ProductExp key={index} product={product} />
          ))}
        </S.ProductListExp>
        <S.SubExp>나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!</S.SubExp>
        <S.Button to={path.home}>시작하기</S.Button>
      </div>
      <S.BackgroundBottom>
        <img src="images/longbanner-02.png" alt="" />
        <S.BackgroundBottomInfo>
          <S.BackgroundBottomTitle>팀원들과 함께 공유하며 작업하세요</S.BackgroundBottomTitle>
          <S.BackgroundBottomSub>
            <span> 작업량이 많을 때, 마감으로 정신없을 때</span>
            <span>바쁠 때 주고받는 파일이 말썽이라면? 비디온리 하세요!</span>
          </S.BackgroundBottomSub>
        </S.BackgroundBottomInfo>
      </S.BackgroundBottom>
    </S.BackgroundExp>
  )
}
