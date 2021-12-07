import React from 'react';
import Menu from './Images/Utilities/Menu.gif';


const ButtonsHeader = ({  count, setCount }) => {

    const handle = (selectedTopic) =>{

        switch (selectedTopic) {
          case "Body & Mind":
            setCount(4)
            break;
        case "Music Boost":
            setCount(6)
            break;
        case "Gesture Anchor":
            setCount(8)
            break;
    }};

    return (
      
    <div className="rowMenu">
    {/*  TEXTS: CHALLENGES AND INTRO  */}
        
        
    {count > 1 ?
    <a href="./App.js" className="homebtn"><img src={Menu}/></a> : ""}

    {/*---- selectTOPIC ----*/}
    {count > 1 ?
    <><select className="select" onChange={e => {const selectedTopic = e.target.value; handle(selectedTopic) }}>
      <option value={"Select Topic"}>Select Topic</option>
      <option value={"Body & Mind"}>Body & Mind</option>
      <option value={"Music Boost"}>Music Boost</option>
      <option value={"Gesture Anchor"}>Gesture Anchor</option>
      </select></>: ""
    }
      </div>
            
    
    )
}

export default ButtonsHeader
