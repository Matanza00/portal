import React, { useContext } from 'react'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import List from './pages/List';
import Product from './pages/Product';
import Order from './pages/Order';
import Delivery from './pages/Delivery';
import Single from './pages/Single';
import New from './pages/New';
import {userInputs,productInputs} from './formSource'
import './style/dark.scss'
import { DarkModeContext } from './context/darkModeContext';


function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path = '/'>
            <Route index element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='users'>
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path='new' element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path='products'>
              <Route index element={<Product/>}/>
              <Route path=':productId' element={<Single/>}/>
              <Route path='new' element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
            <Route path='orders'>
              <Route index element={<Order/>}/>
              <Route path=':orderId' element={<Single/>}/>
              <Route path='new' element={<New inputs={productInputs} title="Order PANEL"/>}/>
            </Route>
            <Route path='delivery'>
              <Route index element={<Delivery/>}/>
              <Route path=':deliveryId' element={<Single/>}/>
              <Route path='new' element={<New inputs={productInputs} title="Delivery PANEL"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
