import styled from 'styled-components'

export const CardContent = styled.div`
  background: ${props => props.theme['base-card']};
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 0 50px;
  width: 18rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  header {
    text-align: center;
    padding: 1rem;
  }
`

export const CardImage = styled.img`
  position: relative;
  top: -20px;
  width: 8rem;
  height: 8rem;
`

export const TagsContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;

  p {
    font-weight: bold;
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};
    border-radius: 2rem;
    padding: 0.5rem 1rem;
  }
`

export const SepareteButton = styled.span`
  background: ${props => props.theme['base-button']};
  border: 0;
  outline: 0;
  padding : 0.4rem 0;
`

export const ItensButton = styled.button`
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['purple']};
  border: 0;
  outline: 0;
  width: 2rem;
  height: 2rem;
` 

export const ShoppingCartButton = styled.button`
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['white']};
  border: 0;
  outline: 0;
  border-radius: 6px;
  width: 2rem;
  height: 2rem;
` 