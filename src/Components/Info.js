
import {React,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Info = ({text, title}) => {

    
const [noInfo, setInfo] = useState( "" );


function appear (){ setInfo (
<div className="infoBox">
<button onClick={() => buttonClear()}> <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: "1.5rem", color: "red"}}/></button>
<h4>{text.exerciseInfo}</h4>
<p style={{fontFamily: "cursive"},{whiteSpace: "pre-wrap"}}>{text.mainChallengeInfo}</p>
</div>)
}



const buttonClear = () => { setInfo("")};



    return (
        <>
        <div>
        <div className="center" >
        <h5 style={{fontFamily: "cursive"}}>{title}</h5>
        </div>
        </div>

    
        <p style={{fontFamily: "cursive"},{whiteSpace: "pre-wrap"}}>{text.exercise}</p>
        <div className='center'>
        <button onClick={() => appear()}  className="infobtn"><FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "4rem",color: "blue"}} /></button> 
        </div>
        {noInfo}


        </>
    )
}

export default Info
