import Styles_project from './project.jsx';
import Icon_tool from './icon_tool.js';

function project(props) {

    return (
        <Styles_project className="card mb-3 text-white" style={{width: '18rem'}}>
                <div className="image-container">
                    <img src={`./images/projects-images/${props.imagem}`} className="card-img-top" alt={props.imagem_alt}/> 
                </div>
                <h5 className="card-title m-2 text-center">{props.nome}</h5> 
                <div className="d-flex flex-row justify-content-center icons">
                    <Icon_tool imagem={props.tool_1}></Icon_tool>
                    <Icon_tool imagem={props.tool_2}></Icon_tool>
                    <Icon_tool imagem={props.tool_3}></Icon_tool>
                    <Icon_tool imagem={props.tool_4}></Icon_tool>
                    <Icon_tool imagem={props.tool_5}></Icon_tool>
                </div>
                <p className="card-text m-2">{props.descricao}</p> 
                <div className="buttons">
                    <button className='btn-link-indisponivel'>
                        <a href={props.link}></a>
                    </button>
                    <button className='btn-repo-indisponivel'>
                        <a href={props.repo}></a>
                    </button>
                </div>
        </Styles_project>
    )
}

export default project
