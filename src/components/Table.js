import React from "react";

const Table = () => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Food</th>
                    <th>Calories</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>cup</td>
                    <td>rice</td>
                    <td>702 kcal</td>
                    <td>195 g</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>ounce</td>
                    <td>chickpease</td>
                    <td>1071.6 kcal</td>
                    <td>283.5 g</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;