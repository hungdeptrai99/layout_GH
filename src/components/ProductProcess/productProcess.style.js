import { colorPrimary, colorSecondary } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const WrapperProduct = styled.div`
  width: 25%;
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
  margin: 15px 0;
`
export const ProductProcess = styled.div`
  background-color: ${colorSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 58px;
  padding-bottom: 48px;
  transition: all 2s ease;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`
export const ProductImage = styled.div`
  width: 100%;
  height: auto;
`
export const TitleProduct = styled.div`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.38;
  text-align: center;
  color: ${colorPrimary};
`
export const SubProduct = styled.div`
  margin-top: 19px;
  width: 195px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.33;
  color: #676767;
`
