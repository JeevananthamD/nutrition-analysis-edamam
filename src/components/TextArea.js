import React from "react";
 
const TextArea = ({typing}) => {
    return(
        <p id="textArea">
            <textarea id="demoAnalysis" cols="30" rows="10" placeholder="eg.1 cup rice
1 dosa" onChange={typing}>
            </textarea>
        </p>
    );
}

export default TextArea;