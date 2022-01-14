import {React, useState} from 'react'
import Body from './Body';
import Texts from './Texts';


const Intro = () => {


    const [count, setCount] = useState(1);
    const [texts, setTexts] = useState([
        {
          intro: true,
          theory: true,
          header: "Are you ready?",
          body:
          <div>
          <br/><h4>Welcome to your very first challenge! I guarantee you your life will change.</h4><br/></div>,
         
          challengeChoice: `Choose your challenge:`,
          id: 1,
        },
        {
          intro: true,
          theory: true,
          header: "Choose Chapter",
          return: true,
          id: 2,
        }]);


        let textFilt = texts.filter(text => text.id === count) ; 

    return (
        
            
   <div>
    {textFilt.map((text) => 
    <>
    <Body text={text} count={count} setCount={setCount} />
    </>
    )}

    
    </div>   
    )
}

export default Intro
