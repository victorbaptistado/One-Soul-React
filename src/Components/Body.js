
import React, { useState,useEffect } from 'react';
import ButtonsBottom from './ButtonsBottom';
import ButtonsHeader from './ButtonsHeader';
import Theory from './Theory';
import TheoryForm from './TheoryForm';
import Challenge from './Challenge';
import ImagesChallenge from './ImagesChallenge';
import ProgressBar from './ProgressBar';
import Congratulation from './Congratulation';

//import Text from './Text';

const Body = ({text, count, setCount}) => {


  
  const [background, setBackground] = useState("");
  const [border, setBorder] = useState("");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("");
  const [buttonText, setButtonText] = useState("")



  useEffect(() => {

    /* ---- FOR CHALLENGE ---- */
    setBackground(
      function background () {
      if(text.challenge === true)
      {return "#cf7348"}
      else if (text.congratulation === true)
      {return "#95d4d685"}
       else {return ""}}
    )
    setBorder(
      function border () {
        if(text.challenge === true)
        {return "white"}
         else {return ""}}
    )
    setButtonBackgroundColor(
      function buttonBackgroundcolor (){
          if(text.challenge === true)
          {return  "#56a5eb"}
          else if(text.congratulation === true)
          {return  "silver"}
          else {return ""}}
    )
    setButtonText(
      function buttonText(){
          if(text.challenge || text.congratulations === true)
         {return "black"}
         else {return ""}}
    )

  },)
  
 


    return (
  

    <div className="wrapper" style={{border:`${border}`, backgroundColor:`${background}`}}>

<>
    {/*---- Header Button ---- */}
      <div key={text.id} >
      <ButtonsHeader count={count} setCount={setCount}/>

    {/*---- Progress Bar ---- */}
      {text.progressbar ?
      <ProgressBar text={text} count={count}/> :""}

      <div className="container2">

      {/* ---- SET IMAGE CHALLENGE ----*/}
      {text.imageChallenge ?
      <ImagesChallenge text={text}/> : ""}
      </div>

      <div className="container1" >


      {/*---- THEORY ----*/}
      {text.theory ?
      <Theory text={text} />: ""}    
      
      {/*---- THEORY FORM ----*/}
      {text.theoryForm ? 
      <TheoryForm  text={text}/>:""}

      {/*---- CHALLENGE ----*/}
      {text.challenge ? 
      <Challenge  text={text} />:""}

      {/*---- CONGRATULATION ----*/}
      {text.congratulation ? 
      <Congratulation text={text} />:""}

      </div> 

      </div>

      {/* ---- GENERAL BUTTONS ---- */ }
      <ButtonsBottom text={text} count={count} setCount={setCount} buttonBackgroundColor={buttonBackgroundColor} buttonText={buttonText}/>
      </>
      </div>
          
    );
    
      }

export default Body
