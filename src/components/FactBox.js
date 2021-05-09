import React from "react";

const FactBox = () => {
    return(
        <section id="factBox">
            <p className="h2 m-0 pt-3" id="factTitle">Nutrition Facts</p>
            <table id="factTable">
                <thead>
                    <tr>
                        <th className="text-start">Amount Per Serving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="calories text-start">Calories</th>
                        <td className="fw-bold">1774</td>
                    </tr>
                    <tr>
                        <td className="small-info thickBorder text-end fw-bold" colSpan="3">% Daily Value*</td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Total Fat 18.3 g</th>
                        <td className="factPercentage">28%</td>
                    </tr>
                    <tr>
                        <th className="factItems">Saturated Fat</th>
                        <td className="factPercentage">10%</td>
                    </tr>
                    <tr>
                        <th className="factItems">Trans Fat</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Cholesterol</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Sodium</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Total Carbohydrate</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Dietary Fiber</th>
                        <td className="factPercentage">138%</td>
                    </tr>
                    <tr>
                        <th className="factItems">Total Sugars</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Includes - Added Sugars</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Protein</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Vitamin D</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Calcium</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Iron</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Potassium</th>
                        <td className="factPercentage"></td>
                    </tr>
                </tbody>
            </table>
            <p className="small-info mt-3">*Percent Daily Values are based on a 2000 calorie diet</p>
        </section>
    );
}

export default FactBox;