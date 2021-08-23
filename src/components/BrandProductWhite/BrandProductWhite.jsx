import React from 'react'
import PropTypes from 'prop-types'
import * as S from '../BrandProductOrange/brandProductOrange.style'
import { path } from 'src/constants/path'
BrandProductWhite.propTypes = {
  product: PropTypes.object
}

function BrandProductWhite({ product }) {
  return (
    <S.BackgroundProductBrandWhite>
      <S.WrapperBrandProduct>
        <S.BrandProductInfoBottom>
          <S.SubTitleBottom>{product.sub}</S.SubTitleBottom>
          <S.TitleBottom>{product.title}</S.TitleBottom>
          <S.ContentBottom>{product.content}</S.ContentBottom>
          <S.ButtonBottom to={path.home}>시작하기</S.ButtonBottom>
        </S.BrandProductInfoBottom>
        <S.BrandImage src={product.image} alt="" />
      </S.WrapperBrandProduct>
    </S.BackgroundProductBrandWhite>
  )
}

export default BrandProductWhite
