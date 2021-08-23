import { colorThirdly } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const ProductExp = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 38px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`
export const WrapperProduct = styled.div`
  width: 33.33%;
  flex: 0 0 33.33%;
  max-width: 33.33%;
  padding: 0 15px;
  margin: 15px 0;
`
export const Quantity = styled.div`
  font-size: 80px;
  font-weight: 500;
  line-height: 0.56;
  text-align: center;
  color: ${colorThirdly};
  margin-bottom: 58px;
`
export const ProductImage = styled.div`
  width: 100%;
  height: auto;
`
export const SubProduct = styled.div`
  margin: 7px 0 42px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: ${colorThirdly};
`
