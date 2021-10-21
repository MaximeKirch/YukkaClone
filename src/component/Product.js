import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";


function Product(props) {

  let barcode = props.match.params.barcode;
  const [dataProduct, setDataProduct]=useState(null);

  useEffect(() => {
    fetch("https://world.openfoodfacts.org/api/v0/product/"+barcode+".json")
    .then((resp)=>resp.json())
    .then((data)=>setDataProduct(data.product));
  }, []);

    console.log({dataProduct})
    return (
      <div className="App">
          <Navbar/>

        {
          dataProduct != null &&
          <div className='productContainer'>
            <img src={dataProduct.image_front_small_url} alt='Product'/>
            <h2>{dataProduct.generic_name}</h2>
            <p>Nutriscore : {dataProduct.nutriscore_grade.toUpperCase()}</p>
            <p>Allergènes: {dataProduct.allergens_from_ingredients.split('en:')}</p>

            <div className='productInfos'>
                <table>
                    
                        {
                            dataProduct.ingredients.map((i) => (
                                <>
                                <tr>
                                    <td>{i.text} </td>
                                    <td>{Math.round(i.percent_estimate)}%</td>
                                </tr>
                                
                                </>
                            ))
                        }
                
                

                </table>

            </div>    
            
          </div>
        }

      </div>
    );
  }
  
export default Product;
