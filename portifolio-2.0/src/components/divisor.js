import { Divisorline } from './divisor.jsx'

function divisor(props){
    return(
        <Divisorline className="d-flex justify-content-between flex-row align-items-center">
            <h3 className='px-0 b-blue-font mx-3'>{props.name}</h3>
            <div className='divisor'></div>  
        </Divisorline>
    )
}

export default divisor