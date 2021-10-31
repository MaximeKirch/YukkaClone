import React from "react";
import '../App.css'
import Navbar from '../component/Navbar'
import {DiJsBadge} from 'react-icons/di'
import logo from '../assets/logo.png'
import Footer from "./Footer";

function Home() {



    return (
        <>

            <Navbar />
        
      <div className="Home">


        <div className="Body">
            
            <img src={logo} alt='Logo' id='logo'/> 

            <div className='title'>
                <h1>Bienvenue dans votre app ! </h1>
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
