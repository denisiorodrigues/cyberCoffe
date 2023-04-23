import styled from "styled-components";

export const IntroContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Baloo 2', monospace;
`

export const IntroImage = styled.img`
  width: 476px;
  height: 360px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
`

export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 38px;
  padding-bottom: 2rem;
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-top: 2rem;
  gap: 1rem;
  p {
    width: 250px;
  }
`

export const CardContent = styled.div`
  
`