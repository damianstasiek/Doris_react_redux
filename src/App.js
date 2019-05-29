import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import ProjectDetails from './components/projects/ProjectDetails';
import MainPage from './components/layout/MainPage';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/project/:id' component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
