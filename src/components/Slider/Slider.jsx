import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Sliders from 'react-slick'
import * as S from './slider.style'
import { path } from 'src/constants/path'
export default function Slider() {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true
  }
  const [Multiplesliders] = useState([
    {
      image: 'images/rolling-banner-06.png'
    },
    {
      image: 'images/rolling-banner-02.png'
    },
    {
      image: 'images/rolling-banner-03.png'
    },
    {
      image: 'images/rolling-banner-04.png'
    },
    {
      image: 'images/rolling-banner-05.png'
    },
    {
      image: 'images/rolling-banner-04.png'
    },
    {
      image: 'images/rolling-banner-02.png'
    },
    {
      image: 'images/rolling-banner-03.png'
    }
  ])
  return (
    <div>
      <S.Container>
        <div className="wide">
          <S.SliderInfo>
            <S.Title>기업들의 템플릿 제작</S.Title>
            <S.More to={path.home}>
              MORE <img src="images/arrow-icon.png" alt="" />{' '}
            </S.More>
          </S.SliderInfo>
        </div>
        <Sliders {...settings}>
          {Multiplesliders.map((item, index) => {
            return (
              <div key={index}>
                <img style={{ cursor: 'pointer' }} src={item.image} alt="" />
              </div>
            )
          })}
        </Sliders>
      </S.Container>
    </div>
  )
}
