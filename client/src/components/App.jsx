import React from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../../../firebaseconfig.js'

import styled from 'styled-components';
import TopBar from './mainComponents/TopBar.jsx';
import Categories from './mainComponents/Categories.jsx';
import NewArrivals from './mainComponents/NewArrivals.jsx';



const AppContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 700px;
  min-width: 300px;
  z-index: -100;
`

const TopBarContainer = styled.div`
  background-color: #c9c1b9;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 50px;
  min-width: 300px;
  padding: 25px;
`

const CategoryContainer = styled.div`
  background-color: #f0f0f0;
  text-align: center;
  text: black;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  min-height: 350px;
  min-width: 300px;
`

const NewArrivalContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  text-align: center;
  text: black;
`

const App = () => {

  // firebase.initializeApp(firebaseConfig);

  // let categoriesDb = firebase.database().ref('/categories').once('value');



  return (
    <AppContainer>
      <TopBarContainer>
        <TopBar></TopBar>
      </TopBarContainer>
      <CategoryContainer>
        <Categories></Categories>
      </CategoryContainer>
      <NewArrivalContainer>
        <NewArrivals></NewArrivals>
      </ NewArrivalContainer>
    </AppContainer>
  )
}



export default App; 