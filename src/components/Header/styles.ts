import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;

  nav {
    display: flex;
    gap: 0.7rem;
  }

  nav a {
      width: 3rem;
      height: 3rem;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      
      background: ${props => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
        color: ${(props) => props.theme['yellow']};
      }
    }

`

export const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Location = styled.header`
  border:  0;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-family: 'Baloo 2', sans-serif;
    padding: 1px 8px;
    border-radius: 6px;
    display: flex;
    gap: 0.3rem;

    /* :hover {
      background: ${props => props.theme['purple']};
      color: ${props => props.theme['white']};
    } */
`