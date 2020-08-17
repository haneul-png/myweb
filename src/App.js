import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress, Image, Header, Divider, Segment} from 'semantic-ui-react'

import GridLayout from './GridLayout.js'

import 구름 from "./구름.jpeg"



function App() {
  return (
    <div>
    <Header as='h1'>First Header </Header>

    <Header as='h3' textAlign='center'>
      하늘
    </Header>
  <Divider hidden />


  <Divider section horizontal>
    Haneul
  </Divider>


  <Button > hi </Button>

  <Divider/>




  <Image.Group size='medium'Align='center'>
  <Image src={구름} size='medium' circular />
  <Image src={구름} size='medium' circular />
  <Image src={구름} size='medium' circular />
  </Image.Group>
  <Image src = {구름} style = {{width : 500, height : 400, marginLeft: "600px"}}/>






  <Progress percent = {33} indicating Align='center'/>

  <GridLayout/>




  </div>
  );
}

export default App;
