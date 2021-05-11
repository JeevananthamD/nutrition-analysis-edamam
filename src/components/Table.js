import React from "react";

const Table = ({data, inputs}) => {
    let s_no = 0;
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Item</th>
                    <th>Calories</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {   
                    data.map((item, i) => {
                        if(!item.error) {
                            {s_no++;}
                            return(
                                <tr>
                                    <th>{s_no}</th>
                                    <td>{inputs[i]}</td>
                                    <td>{Math.round(item.calories)} kcal</td>
                                    <td>{item.totalWeight.toFixed(1)} g</td>
                                </tr>
                            )
                        }
                    })
                }                
            </tbody>
        </table>
    );
}

export default Table;