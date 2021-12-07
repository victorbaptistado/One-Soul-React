import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';



const ProgressBar = ({text}) => {

    const [ progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(()=>{
      
        setProgress(
      function widthUpdate(){        
            switch(text.id){
            case 3:
            return 0;           
            case 4: 
           return 30;
            case 5:
            return 50; 
            case 6:
              return 60;
            case 7:
            return 70;
            case 8:
            return 80;
            case 9:
              return 90;
            case 11:
            return 100; 
      }})
  
    setOpacity(
      function opacityUpdate(){  
            
        if(text.id >= 4){
        return 1;           
        }
      })
  }, []);      
 

    return (
  <>
    <div className="externalProgress" >
    <div className="internalProgress" style={{width: `${progress}%`, opacity: `${opacity}`}}>{progress}</div>
    </div> 
        </>
    )
}

export default ProgressBar
