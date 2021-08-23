import { ButtonLink, colorPrimary, colorSecondary, colorThirdly } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const BackgroundProductBrand = styled.div`
  width: 1920px;
  height: 750px;
  padding: 159px 343px 160px 495px;
  background-color: ${colorPrimary};
`
export const WrapperBrandProduct = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BrandImage = styled.img``
export const BrandProductInfo = styled.div`
  width: 441px;
`
export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;
  text-align: left;
  color: ${colorThirdly};
  margin-bottom: 20px;
  text-transform: uppercase;
`
export const Title = styled.div`
  font-size: 35px;
  font-weight: 900;
  line-height: 0.86;
  text-align: left;
  color: #fafafc;
  margin-bottom: 30px;
`
export const Content = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  color: #fafafc;
  text-align: left;
`
export const Button = styled(ButtonLink)`
  border-radius: 10px;
  background-color: ${colorThirdly};
  font-size: 18px;
  font-weight: 300;
  line-height: 3.83;
  letter-spacing: -0.36px;
  text-align: center;
  color: #fff;
  width: 200px;
  height: 52px;
  margin-top: 78px;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`
export const BackgroundProductBrandWhite = styled.div`
  background-color: ${colorSecondary};
  width: 1920px;
  height: 750px;
  padding: 159px 343px 160px 495px;
`
export const SubTitleBottom = styled(SubTitle)`
  color: ${colorPrimary};
  text-align: right;
`
export const TitleBottom = styled(Title)`
  color: ${colorThirdly};
  text-align: right;
`
export const ContentBottom = styled(Content)`
  color: ${colorThirdly};
  text-align: right;
`
export const ButtonBottom = styled(Button)`
  background-color: ${colorPrimary};
  position: absolute;
  right: 0;
`
export const BrandProductInfoBottom = styled(BrandProductInfo)`
  position: relative;
`
