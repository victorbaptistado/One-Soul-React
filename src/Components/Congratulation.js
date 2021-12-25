import React from 'react'

const Congratulation = ({text}) => {


    return (
        <div className="congratulation">
           <h1>{text.header}</h1>

           <h4 style={{whiteSpace: "pre-wrap"}}>{text.body}</h4>

           
        </div>
    )
}

export default Congratulation
