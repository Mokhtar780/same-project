import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import React from 'react';
import Product from './components/Product';

document.body.style.overflowX = 'hidden';

const App: React.FC = () => {
  console.log("this is App Function");  
  return (
    <Router>  
      <Routes> 
        <Route path='/' element={<Product />} />  
      </Routes>  
    </Router>   
  );  
}  

export default App;