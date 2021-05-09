import React from "react";
import LeftArea from "./LeftArea";
import RightArea from "./RightArea";

const Content = () => {
    return(
        <div className="row">
            <div className="text-center col-md-12">
                <p className="notes">Enter an ingredient list list for what you are cooking, like <span className="text-success">"1 cup rice, 10 oz chickpeas"</span>, ect.
                <br/>
                Enter each ingredient on a new line.
                </p>
                <LeftArea/>
                <RightArea/>
            </div>
        </div>
    );
}

export default Content;