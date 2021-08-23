import React from 'react'
import PropTypes from 'prop-types'
import * as S from './productTutorial.style'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
ProductTutorial.propTypes = {
  product: PropTypes.object
}

function ProductTutorial({ product }) {
  return (
    <S.WrapperProduct>
      <Link to={path.home}>
        <S.ProductTutorial>
          <S.ProductImage src={product.bgimg} alt="" />
          <S.SubTitle>{product.sub}</S.SubTitle>
          <S.ImageArrow src={product.arrow_img} alt="" />
          <S.ProductTitle>
            <span>{product.title1} </span> <span> {product.title2}</span>
          </S.ProductTitle>
        </S.ProductTutorial>
      </Link>
    </S.WrapperProduct>
  )
}

export default ProductTutorial
