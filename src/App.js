import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import styled from 'styled-components';
import Footer from './components/Footer';

function App() {
  return (
    <Div className="App">
      <Header />
     <Home />
     <Footer />
    </Div>
  );
}

export default App;

const Div = styled.div`
`
