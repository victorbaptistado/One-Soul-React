
import React, { useState,useEffect } from 'react';
import ButtonsBottom from './ButtonsBottom';
import ButtonsHeader from './ButtonsHeader';
import Theory from './Theory';
import TheoryForm from './TheoryForm';
import Challenge from './Challenge';
import ImagesChallenge from './ImagesChallenge';
import ProgressBar from './ProgressBar';

//import Text from './Text';

const Body = ({text, count, setCount}) => {


  
  const [background, setBackground] = useState("");
  const [border, setBorder] = useState("");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("");
  const [buttonText, setButtonText] = useState("")

  useEffect(() => {
    setBackground(
      function background () {
      if(text.challenge === true)
      {return "red"}
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
          {return "#56a5eb"}
          else {return ""}}
    )
    setButtonText(
      function buttonText(){
          if(text.challenge === true)
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
      <ProgressBar text={text} /> :""}

      <div className="container2">

      {/* ---- SET IMAGE CHALLENGE ----*/}
      {text.imageChallenge ?
      <ImagesChallenge text={text}/> : ""
      }
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

      </div> 

      </div>

      {/* ---- GENERAL BUTTONS ---- */ }
      <ButtonsBottom text={text} count={count} setCount={setCount} buttonBackgroundColor={buttonBackgroundColor} buttonText={buttonText}/>
      </>
      </div>
          
    );
    
      }

export default Body
