import React from 'react';
import { useState, useRef, useEffect } from 'react';

const ProgressBar = ({text, count}) => {

  let [ progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(0);
   
  const prev = useRef();

    useEffect(()=> {
      setProgress(
        function handle(){
          prev.current = progress;
          switch(count){
            /* -- Chapter 1 -- */
            case 5:
              return 20; 
            case 6:
              return 45;
            case 7:
              return 56;
            case 8:
              return 78;
            case 10:
              return 100;

            /* -- Chapter 2 -- */

            case 13: 
              return 20;
            case 14:
              return 36; 
            case 15:
              return 48;
            case 16:
              return 65;
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
      <div className="internalProgress" style={{width: `${progress}%`, opacity: `${opacity}`}}>
        {progress}
      </div>
    </div> 
  </>
  )
}

export default ProgressBar
