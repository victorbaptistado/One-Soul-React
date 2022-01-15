import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Menu from './Images/Utilities/Menu.gif';


const ButtonsHeader = ({text,  count, setCount }) => {

    const handle1 = (selectedTopic1) =>{

        switch (selectedTopic1) {
          case "Body & Mind":
            setCount(4)
            break;
        case "Music Boost":
            setCount(6)
            break;
        case "Gesture Anchor":
            setCount(8)
            break;
        case "Role Model":
          setCount(9)
          break;
    }};


    const handle2 = (selectedTopic2) =>{
  
        switch (selectedTopic2) {
          case "Mindset Builder":
            setCount(13)
            break;
        case "The Magician":
            setCount(14)
            break;
    }};


    return (
      
    <div>
    {/*  TEXTS: CHALLENGES AND INTRO  */}
        
        
    {count > 1 ?
    <a href="./App.js" className="homebtn"><img src={Menu}/></a> : ""}

    {/*---- selectTOPIC CHAPTER 1 ----*/}
    {text.chapter1 ?
    <><select className="select" onChange={e => {const selectedTopic1 = e.target.value; handle1(selectedTopic1) }}>
      <option value={"Select Topic"}>Select Topic</option>
      <option value={"Body & Mind"}>Body & Mind</option>
      <option value={"Music Boost"}>Music Boost</option>
      <option value={"Gesture Anchor"}>Gesture Anchor</option>
      <option value={"Role Model"}>Role Model</option>
      </select></>: ""
    }

    {/*---- selectTOPIC CHAPTER 2 ----*/}
    {text.chapter2 ?
    <><select className="select" onChange={e => {const selectedTopic2 = e.target.value; handle2(selectedTopic2) }}>
    <option value={"Select Topic"}>Select Topic</option>
    <option value={"Mindset Builder"}>Mindset Builder</option>
    <option value={"The Magician"}>The Magician</option>
    </select></>: ""
    }




      </div>
            
    
    )
}

export default ButtonsHeader
