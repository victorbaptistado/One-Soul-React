import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const Challenge = ({text}) => {

    

    let [count, setCount] = useState(0);
    const [challenges, setChallenges] = useState(
        <>
        <p style={{textAlign:"center", whiteSpace: "pre-wrap"}}>{text.body}</p>
        <button onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{background:"white", border:"no", color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>
   
        </>)
    

        function challengeNow() {     
        setChallenges(
        function handle (){
        switch(count){
        case 1:
        return <>
        <p style={{ whiteSpace: "pre-wrap"}}>{text.bodyChallenge1}</p>
        <button onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{background:"white", border:"no", color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>
        </>;
        case 2: 
        return<>
        <button onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{background:"white", border:"no", color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>      
        <p style={{whiteSpace: "pre-wrap"}}>{text.bodyChallenge2}</p>;
        </>
        }}
        )};

/*
    const challengesFilt = challenges.filter(challenge => challenge.id === count); 
*/


    return (
        <>

    <h2 >{text.header}</h2>
        <br/><br/>
  
        <div className='challenge'>


        <div className='rowChallenge'>
        {challenges}
        </div>
      

        </div>


    

        </>
    )
}

export default Challenge
