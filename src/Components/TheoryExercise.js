import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const TheoryExercise = ({text}) => {



const [noInfo, setInfo] = useState( "" );


  function appear (){ setInfo (
  <div className="infoBox">
  <button onClick={() => buttonClear()}> <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: "1.5rem", color: "red"}}/></button>
  <h4>{text.exerciseInfo}</h4>
  </div>)
  }


  const buttonClear = () => { setInfo("")};


    return (
   
      <>  
      <div className="exercise" > 
        <div className="rowExercise" >
          
        <h5 style={{fontFamily: "cursive"}}>Exercise!</h5>
        <button onClick={() => appear()}  className="infobtn"><FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "4rem",color: "blue"}} /></button> 

        </div>
  
        
        <p style={{fontFamily: "cursive"},{whiteSpace: "pre-wrap"}}>{text.exercise}</p>
        {noInfo}
        </div>
        </>




    )
}

export default TheoryExercise
