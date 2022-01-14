import React from 'react';
import { useState, useRef, useEffect } from 'react';





const ProgressBar = ({text, count}) => {


/*
    const [toggle, setToggle] = useState("");
 */
  
    let [ progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState(0);

   
  /*   
      function widthUpdate(){
      setProgress(
        
        function handle(){
         
        prevWidth.current = progress;
         
        return progress + 10;
      })};
    */  
      

      const prev = useRef();

      useEffect(()=> {
        setProgress(
        function handle(){
          prev.current = progress;
        switch(count){
            case 4: 
           return 15;
            case 5:
            return 30; 
            case 6:
              return 45;
            case 7:
            return 56;
            case 8:
            return 80;
            case 9:
              return 90;
            case 11:
            return 100; 
        }},
      setOpacity(
        function opacityUpdate(){          
          if(text.id >= 3){
          return 1;
        }           
          }))
      }, []);

    return (
  <>
    <div className="externalProgress" >
    <div className="internalProgress"   style={{width: `${progress}%`, opacity: `${opacity}`}}>{progress}</div>
    </div> 
        </>
    )
}

export default ProgressBar
