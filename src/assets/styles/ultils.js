import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const colorPrimary = '#fa5805'
export const colorSecondary = '#f9fafb'
export const colorThirdly = '#222'

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 10px;
  border-radius: 6px;
  background-color: ${colorPrimary};
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(250, 88, 5, 0.8);
  }
`
