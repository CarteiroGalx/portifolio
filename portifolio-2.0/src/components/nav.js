import styles from './nav.module.css';

function nav(){
    return(
        <div>
            <div className={`row bg-dark pt-4 pb-5 ${styles.background}`}>
                <a className="text-white col-8 text-end text-decoration-none fs-5 p-0" href="#"><i className="bi bi-house"></i>Home</a>
                <a className="text-white col-2 text-decoration-none fs-5 p-0" href="#"><i className="bi bi-tools p-0"></i>Projetos</a>
                <a className="text-white col-2 text-decoration-none fs-5 p-0 text-start" href="#"><i className="bi bi-telephone"></i>Contato</a>       
            </div>
        </div>
    )
}

export default nav