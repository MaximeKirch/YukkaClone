import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";


// 3327272107259
// 737628064502
// 3168930009078
// 5053990155354



function Product(props) {

  let barcode = props.match.params.barcode;
  const [dataProduct, setDataProduct]=useState(null);
  const [ingredient, setIngredient]=useState('A');

  console.log(ingredient);

  
  useEffect(() => {
      fetch("https://world.openfoodfacts.org/api/v0/product/"+barcode+".json")
      .then((resp)=>resp.json())
      .then((data)=>setDataProduct(data.product));
    },[barcode]);



    return (
      <div className="App">
          <Navbar/>

        {
          dataProduct != null &&
          <div className='productContainer'>
            <div className='productTitle'>
                <h2>{dataProduct.product_name}</h2>
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

            <div className='productInfos'>

                <div className="productBtn">
                    <button style={ingredient === 'A' ? {background:'var(--yellow)', color:'var(--black)'} : {color:'var(--white)'}} onClick={() => setIngredient('A')}> Nutriments </button>
                    <button style={ingredient === 'B' ? {background:'var(--yellow)', color:'var(--black)'} : {color:'var(--white)'}} onClick={() => setIngredient('B')}> Ingrédients </button>
                    <button style={ingredient === 'C' ? {background:'var(--yellow)', color:'var(--black)'} : {color:'var(--white)'}} onClick={() => setIngredient('C')}> Informations </button>
                </div>


            {

                ingredient === 'B' &&

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
                
                

                </table>
            }  

           { 
                ingredient === 'A' &&
                <>
                
                <h3 id='ingredientsSubtitle'>Valeurs nutritionelles pour 100g :</h3>
                <ul id="nutrition">
                        <li>Energie : {dataProduct.nutriments.energy_value} kcal</li>
                        <li>Protéines : {Math.round(dataProduct.nutriments.proteins)}g</li>
                        <li>Glucides : {Math.round(dataProduct.nutriments.carbohydrates)}g</li>
                        <li>Lipides : {Math.round(dataProduct.nutriments.fat)}g</li>
                        <li>Fibres : {Math.round(dataProduct.nutriments.fiber)}g</li>

                </ul>

                </>

           }    

           {
               ingredient === 'C' &&
               <div className='productInformations'>

                    <p>Quantité : {dataProduct.quantity}</p>
                    <p>Conditionnement : {dataProduct.packaging}</p>
                    <p>Conservation : {dataProduct.conservation_conditions}</p>
                    <p>Allergènes : {dataProduct.allergens}</p>

               </div>
           }

            </div>    
            
          </div>
        }

        <Footer />

      </div>
    );
  }
  
export default Product;
