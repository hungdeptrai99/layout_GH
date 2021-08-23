import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import * as S from './productExp.style'
ProductExp.propTypes = {
  product: PropTypes.object
}

function ProductExp({ product }) {
  return (
    <S.WrapperProduct>
      <Link to={path.notFound}>
        <S.ProductExp>
          <S.ProductImage>
            <img src={product.image} alt="" />
          </S.ProductImage>
          <S.SubProduct> {product.sub} </S.SubProduct>
          <S.Quantity>{product.quantity}</S.Quantity>
        </S.ProductExp>
      </Link>
    </S.WrapperProduct>
  )
}

export default ProductExp
