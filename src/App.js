import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <Div className="App">
      <Header />
     <Home />
    </Div>
  );
}

export default App;

const Div = styled.div`
`
