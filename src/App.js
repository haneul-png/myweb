import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress, Image, Header} from 'semantic-ui-react'

import GridLayout from './GridLayout.js'

import 구름 from "./구름.jpeg"



function App() {
  return (
    <div>
    <Header as='h1'>First Header</Header>

  <p> 하늘 </p>
  <Button > hi </Button>
  <Progress percent = {33} indicating/>
  <Image.Group size='medium'>
  <Image src={구름} size='medium' centered circular />
  <Image src={구름} size='medium' centered circular />
  <Image src={구름} size='medium' centered circular />
  </Image.Group>

  <GridLayout/>




  </div>
  );
}

export default App;
