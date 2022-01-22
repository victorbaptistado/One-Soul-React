import React from 'react'
import Info from "../Components/Info";



const TheoryExercise = ({text}) => {



    return (
   
      <>  
      <div className="exercise" > 

      {/*<div className="center" >*/}
      <h5 style={{fontFamily: "cursive"}}>{"Exercise!"}</h5>    
        <p style={{fontFamily: "cursive"},{whiteSpace: "pre-wrap"}}>{text.exercise}</p>
        <Info text={text}/>
    
       
        </div>
      </>




    )
}

export default TheoryExercise
