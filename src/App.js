import './App.css';
import { BrowserRouter, Routes, Route, useHref } from 'react-router-dom';
import Home from "./component/Home";
import About  from './component/About';
import Navigation from './component/Navigation';
import Contact from './component/Contact';

function App() {

  return (
    <div className="App">
    
      <BrowserRouter>
   
      <Navigation/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
