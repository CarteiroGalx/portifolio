function game_project(props) { 
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
              <img src={`./images/projects-images/${props.imagem}`} className="card-img-top" alt={props.imagem_alt}/> 
              <div className="card-body"> 
                <h5 className="card-title">{props.nome}</h5> 
                <div></div>
                <p className="card-text">{props.descricao}</p> 
              </div>
            </div>
        </div>
    )
}

export default game_project
