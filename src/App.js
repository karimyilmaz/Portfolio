import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import Home from './Pages/Home'
import { GlobalStyle } from './GlobalStyle'
import {BrowserRouter as Router} from 'react-router-dom'

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`

const App = () => {
  return (
    <Router>
      <Main>
        <GlobalStyle/>
        <Home/>
      </Main>
    </Router>
  )
}

export default App;
