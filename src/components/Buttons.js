import React from "react";

const Buttons = ({analyze, newRecipe, data}) => {
    return(
        <div>
            <button className="btn btn-success btn-sm m-2" onClick={analyze}>Analyze</button>
            {(data)?<button className="btn btn-success btn-sm m-2" onClick={newRecipe}>New recipe</button>:""}
        </div>
    );
}

export default Buttons;