import { Header } from './nav.jsx'

function nav(){
    return(
        <Header className="row pb-5 d-flex align-items-center mt-3 justify-content-center justify-content-lg-between">
            <img className='d-none d-md-block col-1 col-lg-1 col p-0 mx-4 mx-lg-5 mt-lg-2' src="/images/logo.png" alt="Logo do criador" />
            <div className='d-none d-md-block col'></div>
            <a className="  col-2 col-lg-1 text-end text-decoration-none p-0" href="#home"><i className="bi bi-house d-none d-lg-inline"></i>Home</a>
            <a className="col-2 text-center mx-5 text-decoration-none p-0" href="#"><i className="bi bi-tools p-0 d-none d-lg-inline"></i>Projetos</a>
            <a className="col-2 text-decoration-none p-0 text-start" href="#"><i className="bi bi-telephone d-none d-lg-inline"></i>Contato</a>     
        </Header>
    )
}

export default nav