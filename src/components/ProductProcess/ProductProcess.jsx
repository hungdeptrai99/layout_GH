import React from 'react'
import PropTypes from 'prop-types'
import * as S from './productProcess.style'
import { path } from 'src/constants/path'
import { Link } from 'react-router-dom'
ProductProcess.propTypes = {
  product: PropTypes.object
}

function ProductProcess({ product }) {
  return (
    <S.WrapperProduct>
      <Link to={path.home}>
        <S.ProductProcess>
          <S.ProductImage>
            <img src={product.image} alt="" />
          </S.ProductImage>
          <S.TitleProduct>{product.title}</S.TitleProduct>
          <S.SubProduct>{product.subTitle}</S.SubProduct>
        </S.ProductProcess>
      </Link>
    </S.WrapperProduct>
  )
}

export default ProductProcess
