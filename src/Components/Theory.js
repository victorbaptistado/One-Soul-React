import React from 'react';
/*import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';*/
import TheoryExercise from './TheoryExercise';


const Theory = ({text}) => {



    return (

        <>

        <h2 >{text.header}</h2>
        <br/><br/>
  
    {/* Text Centralize due to Image*/}
    {text.imageChallenge ? 
    <p style={{whiteSpace: "pre-wrap"}}>{text.body}</p>
    : <p style={{textAlign:"center", whiteSpace: "pre-wrap"}}>{text.body}</p>
    }

    {/* TheoryExercise*/}     

    {text.theoryExerciseAllow === true ?
    <TheoryExercise text={text}/> : ""}
             
    <h2 style={{whiteSpace: "pre-wrap"}}>{text.challengeChoice}</h2>
        
        : ""

    
        </>
    
    
    ) 
        }

export default Theory
