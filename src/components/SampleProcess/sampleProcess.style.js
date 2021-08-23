import { colorThirdly } from 'src/assets/styles/ultils'
import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  padding: 120px 0;
`
export const TitleSample = styled.h2`
  font-size: 35px;
  font-weight: 900;
  line-height: 1.29;
  color: ${colorThirdly};
`
export const SubSample = styled.div`
  margin-top: 29px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  color: ${colorThirdly};
  margin-bottom: 40px;
`
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
