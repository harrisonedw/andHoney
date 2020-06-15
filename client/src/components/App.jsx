import React from 'react';
import TopBar from './TopBar.jsx';
import styled from 'styled-components';
import Categories from './Categories.jsx';
import NewArrivals from './NewArrivals.jsx';
// import styles from './App.css';

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
  background-color: white;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
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
}



export default App; 