function ICON_TOOL(props){

    return(
        <div className="d-flex justify-content-center">
            {props.imagem && <img style={{ width: '20px' }} src={`./images/icons-knowledge/${props.imagem}`} alt="Ferramenta utilizada"/>}
        </div>
    )
}

export default ICON_TOOL