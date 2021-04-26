import styled from 'styled-components'
import './App.css';
import Home from './Pages/Home'
import { GlobalStyle } from './GlobalStyle'
import {BrowserRouter as Router} from 'react-router-dom'



const Main = styled.div`
  /* width: 100%; */
  height: 100%;
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
