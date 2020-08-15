import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress, Image} from 'semantic-ui-react'

import 구름 from "./구름.jpeg"


function App() {
  return (
    <div>
  <p> 하늘 </p>
  <Button > hi </Button>
  <Progress percent = {33} indicating/>
  <Image src={구름} size='medium' centered circular />


  </div>
  );
}

export default App;
