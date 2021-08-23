import React from 'react'
import PropTypes from 'prop-types'
import * as S from './brandProductOrange.style'
import { path } from 'src/constants/path'
BrandProductOrange.propTypes = {
  product: PropTypes.object
}

function BrandProductOrange({ product }) {
  return (
    <S.BackgroundProductBrand>
      <S.WrapperBrandProduct>
        <S.BrandImage src={product.image} alt="" />
        <S.BrandProductInfo>
          <S.SubTitle>{product.sub}</S.SubTitle>
          <S.Title>{product.title}</S.Title>
          <S.Content>{product.content}</S.Content>
          <S.Button to={path.home}>시작하기</S.Button>
        </S.BrandProductInfo>
      </S.WrapperBrandProduct>
    </S.BackgroundProductBrand>
  )
}

export default BrandProductOrange
