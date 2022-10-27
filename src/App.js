import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Partners from './components/Partners'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/partners' element = {<Partners/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
