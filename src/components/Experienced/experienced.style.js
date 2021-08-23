import { ButtonLink, colorPrimary, colorThirdly } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const BackgroundExp = styled.div`
  background-color: ${colorThirdly};
  width: 100%;
  min-width: max-content;
  text-align: center;
`
export const TitleExp = styled.div`
  font-size: 35px;
  font-weight: 900;
  line-height: 1.29;
  text-align: center;
  color: #fff;
  padding-top: 120px;
  margin-bottom: 70px;
`

export const ProductListExp = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SubExp = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #fff;
  margin-top: 80px;
`
export const Button = styled(ButtonLink)`
  width: 200px;
  height: 52px;
  margin: 29px auto 120px auto;
  border-radius: 10px;
  background-color: ${colorPrimary};
  font-size: 17px;
  font-weight: 300;
  line-height: 4.06;
  letter-spacing: -0.34px;
  text-align: center;
  color: #fff;
`
export const BackgroundBottom = styled.div`
  position: relative;
  width: 1920px;
  height: 280px;
  img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`
export const BackgroundBottomInfo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const BackgroundBottomTitle = styled.div`
  margin: 0 0 18px;
  font-size: 35px;
  font-weight: 500;
  line-height: 0.86;
  text-align: center;
  color: #fff;
`
export const BackgroundBottomSub = styled.div`
  margin: 18px 31px 0 29px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
`
