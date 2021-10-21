import React from "react";
import '../App.css'
import Navbar from '../component/Navbar'
import {DiJsBadge} from 'react-icons/di'
import logo from '../assets/logo.png'
import Footer from "./Footer";

function Home() {



    return (
        <>

        
      <div className="Home">
            <Navbar />


        <div className="Body">
            <div className='title'>
                <h1>Bienvenue dans votre app ! <img src={logo} alt='Logo' id='logo'/> </h1>
            </div>

            <div className='center'>
                <h3>Entrez votre code-barres et découvrez dès maintenant les informations sur votre produit !</h3>
            </div>
        </div>

            <Footer/>
      </div>
      </>
    );
  }
  
export default Home;
