import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../App.css'
import {AiOutlineHome} from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import {AiOutlineSearch} from 'react-icons/ai'

export default function Navbar() {

    let history = useHistory();

    const [textSearch,setTextSearch]=useState("");

    const onChangeHandler = (event) => {
    setTextSearch(event.target.value);
  };

    return (
        <IconContext.Provider value={{size:'2em', style:{horizontalAlign:'middle', verticalAlign:'middle'}}}>
        <div>
            <div className='navBar'>

                <Link to='/' id='navBtn'><AiOutlineHome/></Link>

                <div className='searchBar'>
                    <input type="text"
                    value={textSearch}
                    placeholder='Votre code barre'
                    onChange={onChangeHandler}/>
                    <button id='searchBtn' onClick={() => history.push('/Product/'+textSearch)}>Rechercher</button>
                    <button id='searchBtnResp' onClick={() => history.push('/Product/'+textSearch)}><AiOutlineSearch /></button>
                </div>

            </div>
        </div>

        </IconContext.Provider>
    )
}
