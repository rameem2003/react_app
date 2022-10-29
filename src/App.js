import './App.css';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
