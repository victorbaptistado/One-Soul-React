import React from 'react'

const Challenge = ({text}) => {
    return (
        <>

<h2 >{text.header}</h2>
        <br/><br/>
  

    <p style={{textAlign:"center", whiteSpace: "pre-wrap"}}>{text.body}</p>
    

        </>
    )
}

export default Challenge
