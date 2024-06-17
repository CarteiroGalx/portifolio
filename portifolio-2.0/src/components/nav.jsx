import styled from 'styled-components'

export const Header = styled.div`
 z-index: 2;
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, #000000 67%, rgba(0,0,0,0) 100%);

  position: fixed;
  width: 100%;

  a{
    color: white; 
    text-decoration: none; 

    &:hover {
      cursor: pointer;
      color: #007BFF;
    }
  }
`