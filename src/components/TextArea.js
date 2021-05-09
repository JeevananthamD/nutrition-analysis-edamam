import React from "react";
 
const TextArea = ({typing}) => {
    return(
        <p id="textArea">
            <textarea id="demoAnalysis" cols="30" rows="10" onChange={typing}>

            </textarea>
        </p>
    );
}

export default TextArea;