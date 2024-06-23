import Project from "./project"

function web_projects_list() { 
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-content-center flex-wrap justify-content-md-around mx-5">
                <Project nome="Calculadora de gorjetas" link="https://calculador-de-gorjeta.netlify.app/" imagem="calculadora.png" repo="https://github.com/CarteiroGalx/calculadora-de-gorjetas" tool_1="html.png" tool_2="javascript.png" tool_3="css.png" descricao="Uma calculadora que, como dito no nome, pode calcular gorjetas entre qualquer valor, quantidade de funcionários e até mesmo avaliar o serviço."/> 
                <Project nome="Blunova" imagem="blunova.png" link="https://siteblunova.netlify.app/" repo="https://github.com/CarteiroGalx/site-blunova" tool_1="html.png" tool_2="javascript.png" tool_3="css.png" tool_4="bootstrap.png" descricao="Uma landing page de uma empresa de mobílias e marcenarias, com aparência amigável, moderna e limpa"/> 
            </div>
        </div>
    )
}

export default web_projects_list
