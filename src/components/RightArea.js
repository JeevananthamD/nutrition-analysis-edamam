import React from "react";
import FactBox from "./FactBox";

const RightArea = () => {
    return(
        <div id="rightArea" className="col-12 col-sm-5 ">
            <div className="fact-container">
                <FactBox/>
            </div>
        </div>
    );
}

export default RightArea;