import React from 'react';
import { useState,useEffect } from 'react';



const TheoryForm = ({text}) => {
 


/*--- MODEL Save & Get --- */

/*--- MODEL1 ---*/
const [model1, setModel1] = useState(() => {  

const saved = localStorage.getItem("model1");
const initialValue = JSON.parse(saved);
return initialValue || "";
});

useEffect(() => {
localStorage.setItem("model1",JSON.stringify(model1));
}, [model1]); 


/*--- MODEL2 ---*/
const [model2, setModel2] = useState(() => {  

  const saved = localStorage.getItem("model2");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
  });
  
  useEffect(() => {
  localStorage.setItem("model2",JSON.stringify(model2));
  }, [model2]); 


/*--- MODEL3 ---*/
const [model3, setModel3] = useState(() => {  

  const saved = localStorage.getItem("model3");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
  });
  
  useEffect(() => {
  localStorage.setItem("model3",JSON.stringify(model3));
  }, [model3]); 


    return (
    <>

    {/*  TEXTS: CHALLENGES AND INTRO  */}
        
      <br/>  

        <h2>{text.header}</h2>
  
        <br/><br/>
  
        <p style={{textAlign:"center",whiteSpace: "pre-wrap"}}>{text.body}</p>

        <br></br><br></br>
        <form>
        <h2><input type="text" value={model1} onChange={(e) => setModel1(e.target.value) } placeholder={"model 1"} aria-label="model 1" required/> </h2>
        <h2><input type="text" value={model2} onChange={(e) => setModel2(e.target.value)} placeholder={"model 2"} aria-label="model 2"/></h2>
        <h2><input type="text" value={model3} onChange={(e) => setModel3(e.target.value) } placeholder={"model 3"} aria-label="model 3"/> </h2>
        <br/><br/>
        <div className="btnColumns">
        {/*<input className="btnIntro" type="submit"/> */}
        </div>
        </form>

    </>
    ) 
        }

export default TheoryForm
