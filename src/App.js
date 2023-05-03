import React, { useState, useEffect } from "react";
import axios from 'axios'

import styled from 'styled-components'
import NasaPhoto from './Components/NasaPhoto';

const WrapperDiv = styled.div`
  .App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(50px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  .nasa-photo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .explanation {
    max-width: 75%;
  }
  
  img {
    max-width: 50%;
    object-fit: cover;
    border: thick double #32a1ce;
  }
  
`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res);
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <WrapperDiv className="App">
      { data && <NasaPhoto photo={data} /> }
    </WrapperDiv>
  );
}

export default App;


// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

