import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";


// 3327272107259
// 737628064502
// 3168930009078

//dataProduct.nutriscore_data


function Product(props) {

  let barcode = props.match.params.barcode;
  const [dataProduct, setDataProduct]=useState(null);
  const [ingredient, setIngredient]=useState(true);

  console.log(ingredient);

  
  useEffect(() => {
      fetch("https://world.openfoodfacts.org/api/v0/product/"+barcode+".json")
      .then((resp)=>resp.json())
      .then((data)=>setDataProduct(data.product));
    },[barcode]);

    
    
    function Ingredients() {
        return(
        useEffect(() => {

    
    if(ingredient === true) {
        
        
        
        <table id="ingredients">
                        
        {
            dataProduct.ingredients.map((i) => (
                <>
                <tr>

                    <td>{i.text}</td>
                    
                    <td>{Math.round(i.percent_estimate)}%</td>
                </tr>
                
                </>
            ))
        }

        </table>;

    } else {
        
        

        
        <ul id="nutrition">
            <li>Valeurs nutritionelles pour 100g</li>
            <li>Energie: {dataProduct.nutriments.energy_value} kcal</li>
            <li>Protéines :{Math.round(dataProduct.nutriments.proteins)}g</li>
            <li>Glucides :{Math.round(dataProduct.nutriments.carbohydrates)}g</li>
            <li>Lipides : {Math.round(dataProduct.nutriments.fat)}g</li>
            <li>Fibres : {Math.round(dataProduct.nutriments.fiber)}g</li>

        </ul>
    }
            
        
}, []))}


    return (
      <div className="App">
          <Navbar/>

        {
          dataProduct != null &&
          <div className='productContainer'>
            <div className='productTitle'>
                <h2>{dataProduct.generic_name}</h2>
                <h4>{dataProduct.brands}</h4>
            </div>
            <img id="productImg" src={dataProduct.image_front_small_url} alt='Product'/>
            <h3> Nutriscore : 
                <p 
                id='nutriscore' 
                style= {dataProduct.nutriscore_grade !== 'A' || dataProduct.nutriscore_grade !== 'B'  ? {color:'red'} : {color:'green'}}>
                    {dataProduct.nutriscore_grade.toUpperCase()}
                </p>
            </h3>
            {/* <p>Allergènes: <b>{dataProduct.allergens_from_ingredients.split('en:')}</b></p> */}

            <div className='productInfos'>

                <div className="productBtn">
                    <button onClick={() => setIngredient(true)}> Ingrédients </button>
                    <button onClick={() => setIngredient(false)}> Nutriments </button>
                </div>

                <Ingredients/>

                {/* <table id="ingredients">
                    
                        {
                            dataProduct.ingredients.map((i) => (
                                <>
                                <tr>

                                    <td>{i.text}</td>
                                    
                                    <td>{Math.round(i.percent_estimate)}%</td>
                                </tr>
                                
                                </>
                            ))
                        }
                
                

                </table>

                <ul id="nutrition">
                        <li>Valeurs nutritionelles pour 100g</li>
                        <li>Energie: {dataProduct.nutriments.energy_value} kcal</li>
                        <li>Protéines :{Math.round(dataProduct.nutriments.proteins)}g</li>
                        <li>Glucides :{Math.round(dataProduct.nutriments.carbohydrates)}g</li>
                        <li>Lipides : {Math.round(dataProduct.nutriments.fat)}g</li>
                        <li>Fibres : {Math.round(dataProduct.nutriments.fiber)}g</li>

                </ul> */}

            </div>    
            
          </div>
        }

        <Footer />

      </div>
    );
  }
  
export default Product;
