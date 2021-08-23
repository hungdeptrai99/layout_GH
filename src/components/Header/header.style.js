import { Link } from 'react-router-dom'
import { ButtonLink } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const BannerImage = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
`
export const BgImage = styled.img`
  position: absolute;
  z-index: -1;
  width: auto;
  height: auto;
  margin: 0 0 20px;
  padding: 0 0 108px;
  object-fit: contain;
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 19px;
`
export const Logo = styled(Link)`
  img {
    position: none;
  }
`
export const LogoImg = styled.img``
export const Navbar = styled.div`
  display: flex;
`
export const Login = styled(ButtonLink)`
  padding: 12px 20px 11px 22px;
  border-radius: 6px;
  border: solid 1px #fff;
  background-color: transparent;
  font-size: 12px;
  font-weight: 500;
  line-height: 5.75;
  color: #fff;
  text-transform: uppercase;
  width: 80px;
  height: 32px;
`
export const Join = styled(ButtonLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 5.75;
  color: #fff;
  text-transform: uppercase;
  width: 80px;
  height: 32px;
`

export const TitleHeader = styled.h1`
  position: absolute;
  top: 188px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 65px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #fff;
`
export const SubHeader = styled.div`
  position: absolute;
  top: 447px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`
export const ButtonHeader = styled(ButtonLink)`
  position: absolute;
  top: 540px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.83;
    letter-spacing: -0.36px;
    text-align: center;
    color: #fff;
  }
`
