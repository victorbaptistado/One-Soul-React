import {React,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';



const ButtonsBottom = ({text, count, setCount, countChapter1, 
    setCountChapter1, buttonBackgroundColor, buttonText}) => {

console.log(count);
console.log(countChapter1);

useEffect (() => {
    window.scrollTo(0,0)
}, [() => setCount])


    return (

<>
        {/*----- BUTTON INTRO -----*/}
        {count === 1 ?
        <div className="btnColumns"> 
        <br/><br/>

      
            <button className="btnIntro" onClick={()=> setCount(++count)}> Social Development</button>

            <button className="btnIntro"><FontAwesomeIcon icon={faLock} style={{ fontSize: "2rem",color: "grey"}} /> Productivity Enhance</button>
            <button className="btnIntro"><FontAwesomeIcon icon={faLock} style={{ fontSize: "2rem",color: "grey"}}/> Meditation Academy</button>
         </div> : ""}


      {/*----- BUTTON CHAPTER -----*/}
      {count === 2 ?
        <div className="btnColumns"> 
        <br/><br/>
            <button className="btnIntro" onClick={()=>setCount(++count)}>Body</button>

            <button className="btnIntro" onClick={()=>setCount(count + 10)}> Mind</button>

            <button className="btnIntro"><FontAwesomeIcon icon={faLock} style={{ fontSize: "2rem",color: "grey"}} /> Charisma</button>
         </div> : ""}


        {/*----- BUTTON NEXT & RETURN -----*/}

        <div className={`${count > 2 ? "row" :"btnColumns"}`}>
    
        {  text.return ? 
        <button className="returnbtn" onClick={()=> setCount(-- count)}><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ fontSize: "5rem",color: "grey"}}/></button> :""}
        {  text.next ? 
        <button className="btn" style={{backgroundColor:`${buttonBackgroundColor}`}} onClick={()=> setCount(++ count)}><span style={{color:`${buttonText}`}}>Next</span></button> : ""} 
      
        </div>

        

        </>
    )
             
}

export default ButtonsBottom
