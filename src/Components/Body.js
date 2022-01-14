
import React, { useState,useEffect } from 'react';
import ButtonsBottom from './ButtonsBottom';
import ButtonsHeader from './ButtonsHeader';
import Texts from './Texts';
import Theory from './Theory';
import TheoryForm from './TheoryForm';
import Challenge from './Challenge';
import ImagesChallenge from './ImagesChallenge';
import ProgressBar from './ProgressBar';
import Congratulation from './Congratulation';

//import Text from './Text';

const Body = ({text, count, setCount, countChapter1, setCountChapter1}) => {
  
  const [background, setBackground] = useState("");
  const [border, setBorder] = useState("");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("");
  const [buttonText, setButtonText] = useState("")
  const [titleText, setTitleText] = useState("")


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
    setTitleText(
      function titleText(){
        if(text.challenge === true)
          {return " rgb(255, 189, 189)"}
          else {return ""}}
    )

  },)
  
 console.log(countChapter1)


    return (
  

    <div className="wrapper" style={{border:`${border}`, backgroundColor:`${background}`}}>

<>
    {/*---- Header Button ---- */}
      <div key={text.id} >
      <ButtonsHeader count={count} setCount={setCount} 
      countChapter1={countChapter1} setCountChapter1={setCountChapter1} />


      {/*---- Progress Bar ---- */}
     
      {text.progressbar ?
      <ProgressBar text={text} count={count}
      countChapter1={countChapter1}/> :""}
      

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
      <Challenge  text={text} titleText={titleText} />:""}

      {/*---- CONGRATULATION ----*/}
      {text.congratulation ? 
      <Congratulation text={text} count={count} setCount={setCount} />:""}

      </div> 

      </div>

      {/* ---- GENERAL BUTTONS ---- */ }
      <ButtonsBottom text={text} count={count} setCount={setCount} 
      buttonBackgroundColor={buttonBackgroundColor} buttonText={buttonText}
      countChapter1={countChapter1} setCountChapter1={setCountChapter1}/>
      </>
      </div>
          
    );
    
      }

export default Body
