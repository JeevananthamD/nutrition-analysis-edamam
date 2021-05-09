import React from "react";
import Buttons from "./Buttons";
import Table from "./Table";
import TextArea from "./TextArea";

const LeftArea = () => {
    return(
        <div className="col-12 col-sm-7 " id="leftArea">
            <TextArea/>
            <Buttons/>
            <Table/>
        </div>
    );
}

export default LeftArea;