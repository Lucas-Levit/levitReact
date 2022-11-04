import React  from "react";
import { NavBar } from "./components/NavBar.js"
import { ItemListContainer } from './components/ItemListContainer';
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from "./components/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/css/App.css"
import { Waveform } from '@uiball/loaders'
import { firestoreInit } from "./firebase/config";
import CartProvider from "./context/cartcontext.js";
import Carrito from "./components/Carrito"



firestoreInit()


function App() {
  return (
    <BrowserRouter>
      <CartProvider> 
          <NavBar />
          <Routes>
          <Route path="/carrito" element= {<Carrito/>} />
          <Route path="/" element={<ItemListContainer greeting={"hola que tal"} />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;