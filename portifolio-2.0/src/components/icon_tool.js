function icon_tool(props){

    return(
        <div className="d-flex justify-content-center">
            {props.imagem && <img style={{ width: '20px' }} src={`./images/icons-knowledge/${props.imagem}`} alt="descrição" />}
        </div>
    )
}

export default icon_tool