import styled from 'styled-components'

export const Styles_project = styled.div`

  border: 2px solid #007BFF;
  background-color: #0c0c0c;

.image-container{
  position: relative;
  display: inline-block;
}

.buttons{
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

p{
  min-height: 144px;
}

.btn-repo-active{
  border-radius: 0 5px 0 0;
  color: white;
  background-color: #062C65;
  border-bottom: 0;
  border-top: 2px solid #007BFF;
  border-left: 1px solid #007BFF;
  border-right: 2px solid #007BFF;
}

.btn-link-active{
  text-decoration: none;
  border-radius: 5px 0 0 0;
  color: white;
  background-color: #062C65;
  border-bottom: 0;
  border-top: 2px solid #007BFF;
  border-left: 2px solid #007BFF;
  border-right: 1px solid #007BFF;
}

.btn-repo-active:hover{
  background-color: #007BFF;
  cursor: pointer;
}

.btn-link-active:hover{
  background-color: #007BFF;
  cursor: pointer;
}

.btn-repo-indisponible{
  border-radius: 0 5px 0 0;
  color: #000000;
  background-color: #650606;
  border-bottom: 0;
  border-top: 2px solid #ff0000;
  border-left: 1px solid #ff0000;
  border-right: 2px solid #ff0000;
}

.btn-link-indisponible{
  border-radius: 5px 0 0 0;
  color: #000000;
  background-color: #650606;
  border-bottom: 0;
  border-top: 2px solid #ff0000;
  border-left: 1px solid #ff0000;
  border-right: 2px solid #ff0000;
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