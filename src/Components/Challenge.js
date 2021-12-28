import {React, useState} from 'react';
import {useSpring, animated} from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight,  faAngleDoubleLeft, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Info from "./Info";

const Challenge = ({text}) => {

    
    let [count, setCount] = useState(0);

    
    const [spring1, setSpring1 ] = useState(useSpring(
    {  
        id: 0,  
        from: {
            opacity: 0,
            transform: `translate(2rem)`,
            },
        to: {
            opacity: 1,
            transform: `translate(0rem)`,
        },
        config:{
            mass: 6,
            
            
        }
    },
    
    ))

    /*
    const springs = useSpring(datas.length, datas.map(({id,... config}) => config))
    const springFilt = springs.filter(spring => spring.id === count) 


    
    const springs = useSpring(datas.length, datas.map(({id,... config}) => config)
    )
*/
    
    const arrowStyle = {

    color1: "blueviolet",
    color2: "rgb(201, 183, 143)",
    color3: "grey",
    height: "10rem",
    width: "5rem",
    padding: "0",
    }

    const [challenges, setChallenges] = useState(
  
  
        <>   
        
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: `${arrowStyle.color2}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} />     
        <p style={{whiteSpace: "pre-wrap"}}>{text.body}</p>
        <button className="challengebtn" onClick={()=>challengeNow(count++)} >
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button>      
        </>)
    

        function challengeNow() { 
   

        setChallenges(

 
        function handle (){
        switch(count){
        case 1:
        return <>
     
     <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color: `${arrowStyle.color3}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} />        
     <p style={{whiteSpace: "pre-wrap"}}>{text.warmUp1}</p>
        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button>
        </>

        case 2: 
        return<>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} />  
        </button>

        <p style={{whiteSpace: "pre-wrap"}}>{text.warmUp2}</p>

        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button>
        </>

        case 3:
        return <>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button>  

        <p style={{ whiteSpace: "pre-wrap"}}>{text.warmUp3}</p>

        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button>
        </>

        case 4: 
        return<>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button>   

        <p style={{whiteSpace: "pre-wrap"}}>{text.warmUp4}</p>

        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button>
        </>
        
        case 5: 
        return<>
        
        
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color: `${arrowStyle.color1}`, height: `${arrowStyle.height}`, width:`${arrowStyle.width}`}} /> 
        </button> 
        <p style={{whiteSpace: "pre-wrap"}}>{text.mainChallenge}</p>

        <Info text={text}/> 
      
        </>
        }}
        )}

/*
    const challengesFilt = challenges.filter(challenge => challenge.id === count); 
*/


    return (
        <>

    <h2 >{text.header}</h2>
        <br/><br/>
  
        
     
        <animated.div className='challenge' style={spring1}>
        <div className='challengeContainer'>
        {challenges}
        </div>
        </animated.div>    

        </>
    )
}

export default Challenge
