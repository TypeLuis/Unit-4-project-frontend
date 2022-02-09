import React, { useEffect, useRef } from "react";

const Test = () => {
    const myContainer = useRef(null);
  
  useEffect(() => {
    
    switch(myContainer.current.tagName){
        case 'H1':
            myContainer.current.style.backgroundColor = 'red';
        break
        case 'DIV':
            myContainer.current.style.backgroundColor = 'blue';
        break
    }
    console.log(myContainer)
    console.log(myContainer.current)
  });
    return (


        <div style={{marginTop : '100px'}}>
            
            <h1 ref={myContainer}>Ref with react</h1>
            <div ref={myContainer}>I can use the DOM with react ref</div>
        </div>
    )
}

export default Test
