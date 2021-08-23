import { Link } from 'react-router-dom'
import { colorSecondary } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${colorSecondary};
  min-width: max-content;
`
export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 122px;
`
export const FooterLeft = styled.div`
  width: 365px;
`
export const FooterLeftTitle = styled.div`
  width: 267px;
  height: 14px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.71;
  text-align: left;
  color: #333;
  margin-bottom: 19px;
`
export const FooterLeftSub = styled.div`
  width: 365px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.71;
  text-align: left;
  color: #717c89;
  margin-bottom: 30px;
`
export const FooterLeftCoppyRight = styled.div`
  font-size: 12px;
  line-height: 2;
  text-align: left;
  color: #717c89;
`
export const FooterRight = styled.div``
export const FooterRightBox = styled(Link)`
  margin: 0 0 0 10px;
  img {
    object-fit: contain;
  }
`
