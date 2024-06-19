import styled from 'styled-components'

export const Styles_project = styled.div`

  border: 2px solid #007BFF;
  background-color: #0c0c0c;

.image-container{
  position: relative;
  display: inline-block;
}

.image-container:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30%; /* Ajuste a altura do degradê aqui */
  background: linear-gradient(to bottom, rgba(255,255,255,0), #0c0c0c);
}
`