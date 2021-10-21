import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../App.css'

export default function Navbar() {

    let history = useHistory();

    const [textSearch,setTextSearch]=useState("");

    const onChangeHandler = (event) => {
    setTextSearch(event.target.value);
  };

    return (
        <div>
             <div className='navBar'>
            <input type="text"
            value={textSearch}
            placeholder='Votre code barre'
            onChange={onChangeHandler}/>
            <button id='searchBtn' onClick={() => history.push('/Product/'+textSearch)}>Rechercher</button>
          </div>
        </div>
    )
}
