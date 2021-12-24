import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Info from "../Components/Info";



const TheoryExercise = ({text}) => {



    return (
   
      <>  
      <div className="exercise" > 
        
   
        <Info text={text} title={"Exercise!"}/>
    
       
        </div>
      </>




    )
}

export default TheoryExercise
