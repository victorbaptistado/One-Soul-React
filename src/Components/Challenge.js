import {React, useState, useEffect} from 'react';
import {useSpring, animated, config} from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';


const Challenge = ({text}) => {



    
    let [count, setCount] = useState(0);

    
    const [spring1, setSpring1 ] = useState(useSpring(
    {  
        id: 0,  
        from: {
            opacity: 0,
            transform: `translate(120px)`,
            },
        to: {
            opacity: 1,
            transform: `translate(0px)`,
        },
        config:{
            mass:6,
        }
    },
    
    ))

    /*
    const springs = useSpring(datas.length, datas.map(({id,... config}) => config))
    const springFilt = springs.filter(spring => spring.id === count) 


    
    const springs = useSpring(datas.length, datas.map(({id,... config}) => config)
    )
*/
    const [challenges, setChallenges] = useState(
  
  
        <>   
        
        <p style={{textAlign:"center", whiteSpace: "pre-wrap"}}>{text.body}</p>
        <button className="challengebtn" onClick={()=>challengeNow(count++)} >
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>      
        </>)
    

        function challengeNow() { 
   

        setChallenges(

 
        function handle (){
        switch(count){
        case 1:
        return <>
     
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"rgb(201, 183, 143)", height: "10rem", width: "5rem"}} /> 
      
        <p style={{ whiteSpace: "pre-wrap"}}>{text.warmUp1}</p>
        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>
        </>

        case 2: 
        return<>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>

        <p style={{whiteSpace: "pre-wrap"}}>{text.warmUp2}</p>

        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>
        </>

        case 3:
        return <>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>  

        <p style={{ whiteSpace: "pre-wrap"}}>{text.warmUp3}</p>

        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>
        </>

        case 4: 
        return<>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>   

        <p style={{whiteSpace: "pre-wrap"}}>{text.warmUp4}</p>

        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>
        </>

        case 5: 
        return<>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>    

        <p style={{whiteSpace: "pre-wrap"}}>{text.warmUp5}</p>
       
        <button className="challengebtn" onClick={()=>challengeNow(count++)}>
        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button>
        </>
        
        case 6: 
        return<>
        <button className="challengebtn" onClick={()=>challengeNow(count--)}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{color:"blueviolet", height: "10rem", width: "5rem"}} /> 
        </button> 
        <p style={{whiteSpace: "pre-wrap"}}>{text.mainChallenge}</p>

        <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"rgb(201, 183, 143)", height: "10rem", width: "5rem"}} /> 

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
        <div className='rowChallenge'>
        {challenges}
        </div>
        </animated.div>    

        </>
    )
}

export default Challenge
