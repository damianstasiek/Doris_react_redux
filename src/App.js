import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import ProjectDetails from './components/projects/ProjectDetails';
import MainPage from './components/layout/MainPage';
import ScrollToTop from './components/navigation/ScrollToTop'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
  scroll-behavior: smooth;
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
        {/* <Navbar /> */}
        <Switch>
          <ScrollToTop>
            <Route exact path='/' component={MainPage} />
            <Route path='/project/:id' component={ProjectDetails} />
          </ScrollToTop>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
