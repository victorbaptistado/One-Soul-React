import React from 'react'

const Congratulation = ({text, count, setCount}) => {


    return (
        <div className="congratulation">
           <h1>{text.header}</h1>

           <h4 style={{whiteSpace: "pre-wrap"}}>{text.body}</h4>

        <button className='btn' onClick={()=>setCount(++count)} >NEXT CHAPTER</button>
           
        </div>
    )
}

export default Congratulation
