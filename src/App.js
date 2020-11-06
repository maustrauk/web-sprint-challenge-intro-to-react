import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";

import {API_URL} from "./const/const.js";
import Characters from "./components/Characters.js";
import helperFunc from "./helper.js";

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [listOfCharacters, setListOfCharacters] = useState([]);

  useEffect( () => {
    axios
    .get(`${API_URL}people/`)
    .then(res => {
      const data = res.data.results;
      setListOfCharacters(helperFunc(data));
    })
    .catch(err => {
      console.log("Error: ",err);
    })
  }, []);

  return (
    <div className="App">
      <StyledH1 className="Header">React Wars</StyledH1>
      <Characters  listOfCharacters={listOfCharacters}/>
    </div>
  );
}

const StyledH1 = styled.h1`
  font-size: 3em;
  text-transform: uppercase;

`;

export default App;
