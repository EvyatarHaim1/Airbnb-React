import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import styled from 'styled-components';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Div className="App">
      <Router>
        <Header />

        <Switch>
            <Route path="/search">
                 <SearchPage />
            </Route>

            <Route path="/">
                 <Home />
           </Route>

        </Switch>
        
        <Footer />
     </Router>
    </Div>
  );
}

export default App;

const Div = styled.div`
`
