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
  height: 100%;
}

.card-text{
  min-height: 144px;
}

.repo-active{
  text-decoration: none;
  border-radius: 0 5px 0 0;
  color: white;
  background-color: #062C65;
  border-bottom: 0;
  border-top: 2px solid #007BFF;
  border-left: 1px solid #007BFF;
  border-right: 2px solid #007BFF;
}

.link-active{
  text-decoration: none;
  border-radius: 5px 0 0 0;
  color: white;
  background-color: #062C65;
  border-bottom: 0;
  border-top: 2px solid #007BFF;
  border-left: 2px solid #007BFF;
  border-right: 1px solid #007BFF;
}

.repo-active:hover{
  background-color: #007BFF;
  cursor: pointer;
}

.link-active:hover{
  background-color: #007BFF;
  cursor: pointer;
}

.repo-inactive{
  color: white;
  border-radius: 0 5px 0 0;
  text-decoration: none;
  background-color: #650606;
  border-bottom: 0;
  border-top: 2px solid #007BFF;
  border-left: 1px solid #007BFF;
  border-right: 2px solid #007BFF;
}

.link-inactive{
  align-self: flex-end;
  color: white;
  border-radius: 5px 0 0 0;
  text-decoration: none;
  background-color: #650606;
  border-bottom: 0;
  border-top: 2px solid #007BFF;
  border-left: 2px solid #007BFF;
  border-right: 1px solid #007BFF;
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