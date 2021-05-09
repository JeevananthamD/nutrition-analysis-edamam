import React from "react";

const FactCard = ({data}) => {
    console.log(data);
    let Calories = (data.calories)?data.calories:0;
    let totalNutrients = data.totalNutrients;
    let totalDaily = data.totalDaily;
    let items = (totalNutrients)?
        {Total_Fat: totalNutrients.FAT? totalNutrients.FAT.quantity + " " + totalNutrients.FAT.unit: "-",
        Sat_Fat: totalNutrients.FASAT? totalNutrients.FASAT.quantity + " " + totalNutrients.FASAT.unit: "-",
        Trans_Fat: totalNutrients.FATRN? totalNutrients.FATRN.quantity + " " + totalNutrients.FATRN.unit: "-",
        Cholesterol: totalNutrients.CHOLE? totalNutrients.CHOLE.quantity + " " + totalNutrients.CHOLE.unit: "-",
        Sodium: totalNutrients.NA? totalNutrients.NA.quantity + " " + totalNutrients.NA.unit: "-",
        Total_Carbs: totalNutrients.CHOCDF? totalNutrients.CHOCDF.quantity + " " + totalNutrients.CHOCDF.unit: "-",
        Dietary_Fiber: totalNutrients.FIBTG? totalNutrients.FIBTG.quantity + " " + totalNutrients.FIBTG.unit: "-",
        Total_Sugars: totalNutrients.SUGAR? totalNutrients.SUGAR.quantity + " " + totalNutrients.SUGAR.unit: "-",
        Protein: totalNutrients.PROCNT? totalNutrients.PROCNT.quantity + " " + totalNutrients.PROCNT.unit: "-",
        Vitamin_D: totalNutrients.VITD? totalNutrients.VITD.quantity + " " + totalNutrients.VITD.unit: "-",
        Calcium: totalNutrients.CA? totalNutrients.CA.quantity + " " + totalNutrients.CA.unit: "-",
        Iron: totalNutrients.FE? totalNutrients.FE.quantity + " " + totalNutrients.FE.unit: "-",
        Potassium: totalNutrients.K? totalNutrients.K.quantity + " " + totalNutrients.K.unit: "-"}
        :
        {Total_Fat: "-",
        Sat_Fat: "-",
        Trans_Fat:  "-",
        Cholesterol: "-",
        Sodium: "-",
        Total_Carbs: "-",
        Dietary_Fiber:  "-",
        Total_Sugars: "-",
        Protein: "-",
        Vitamin_D: "-",
        Calcium: "-",
        Iron: "-",
        Potassium: "-"}

    let daily_value = (totalDaily)?
        {Total_Fat: totalDaily.FAT? Math.round(totalDaily.FAT.quantity) + totalDaily.FAT.unit: "-",
        Sat_Fat: totalDaily.FASAT? Math.round(totalDaily.FASAT.quantity) + totalDaily.FASAT.unit: "-",
        Cholesterol: totalDaily.CHOLE? Math.round(totalDaily.CHOLE.quantity) + totalDaily.CHOLE.unit: "-",
        Sodium: totalDaily.NA? Math.round(totalDaily.NA.quantity) + totalDaily.NA.unit: "-",
        Total_Carbs: totalDaily.CHOCDF? Math.round(totalDaily.CHOCDF.quantity) + totalDaily.CHOCDF.unit: "-",
        Dietary_Fiber: totalDaily.FIBTG? Math.round(totalDaily.FIBTG.quantity) + totalDaily.FIBTG.unit: "-",
        Protein: totalDaily.PROCNT? Math.round(totalDaily.PROCNT.quantity) + totalDaily.PROCNT.unit: "-",
        Vitamin_D: totalDaily.VITD? Math.round(totalDaily.VITD.quantity) + totalDaily.VITD.unit: "-",
        Calcium: totalDaily.CA? Math.round(totalDaily.CA.quantity) + totalDaily.CA.unit: "-",
        Iron: totalDaily.FE? Math.round(totalDaily.FE.quantity) + totalDaily.FE.unit: "-",
        Potassium: totalDaily.K? Math.round(totalDaily.K.quantity) + totalDaily.K.unit: "-"}
        :
        {Total_Fat: "-",
        Sat_Fat: "-",
        Cholesterol: "-",
        Sodium: "-",
        Total_Carbs: "-",
        Dietary_Fiber:  "-",
        Protein: "-",
        Vitamin_D: "-",
        Calcium: "-",
        Iron: "-",
        Potassium: "-"}
    return(
        <section id="factCard">
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
                        <td className="fw-bold">{Calories}</td>
                    </tr>
                    <tr>
                        <td className="small-info thickBorder text-end fw-bold" colSpan="3">% Daily Value*</td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Total Fat {items.Total_Fat}</th>
                        <td className="factPercentage">{daily_value.Total_Fat}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Saturated Fat {items.Sat_Fat}</th>
                        <td className="factPercentage">{daily_value.Sat_Fat}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Trans Fat {items.Trans_Fat}</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Cholesterol {items.Cholesterol}</th>
                        <td className="factPercentage">{daily_value.Cholesterol}</td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Sodium {items.Sodium}</th>
                        <td className="factPercentage">{daily_value.Sodium}</td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Total Carbohydrate {items.Total_Carbs}</th>
                        <td className="factPercentage">{daily_value.Total_Carbs}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Dietary Fiber {items.Dietary_Fiber}</th>
                        <td className="factPercentage">{daily_value.Dietary_Fiber}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Total Sugars {items.Total_Sugars}</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Includes - Added Sugars</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Protein {items.Protein}</th>
                        <td className="factPercentage">{daily_value.Protein}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Vitamin D {items.Vitamin_D}</th>
                        <td className="factPercentage">{daily_value.Vitamin_D}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Calcium {items.Calcium}</th>
                        <td className="factPercentage">{daily_value.Calcium}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Iron {items.Iron}</th>
                        <td className="factPercentage">{daily_value.Iron}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Potassium {items.Potassium}</th>
                        <td className="factPercentage">{daily_value.Potassium}</td>
                    </tr>
                </tbody>
            </table>
            <p className="small-info mt-3">*Percent Daily Values are based on a 2000 calorie diet</p>
        </section>
    );
}

export default FactCard;