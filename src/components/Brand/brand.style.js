import { ButtonLink, colorThirdly } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const ContainerIntroBrand = styled.div`
  position: relative;
`
export const ImageBrand = styled.img`
  display: block;
`
export const TitleBrand = styled.div`
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
  font-weight: 900;
  line-height: 0.86;
  text-align: center;
  color: #fff;
`
export const SubTitleBrand = styled.div`
  position: absolute;
  top: 123px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #fff;
`
export const ButtonBrand = styled(ButtonLink)`
  width: 200px;
  height: 52px;
  position: absolute;
  bottom: 45px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 3.83;
  letter-spacing: -0.36px;
  text-align: center;
  color: ${colorThirdly};
`
export const ContainerBrandProduct = styled.div``
