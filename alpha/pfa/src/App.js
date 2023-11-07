import './App.css';
import {Routes, Route } from 'react-router-dom';
import Button from './atoms/Button';
import SignUp from './Templates/Sign Up/SignUp';

function App() {
  return (
   <>
   <Routes>
       
       <Route path='/' element={ <SignUp/>}/>



       {/* <Route path='about' element={<About />}/>
       <Route path='order-summary' element={<Order/>}/>
       <Route path='*' element={<Nomatch/>}/>
       <Route path='products' element={<Product/>}>
         <Route index element={<Feature/>}/>
         <Route path='featured' element={<Feature/>}/>
         <Route path='new' element={<New/>}/>
       </Route> */}



     </Routes>
   
   </>
  );
}

export default App;
