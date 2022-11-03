import React  from "react";
import { NavBar } from "./components/NavBar.js"
import { ItemListContainer } from './components/ItemListContainer';
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from "./components/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/css/App.css"
import { Waveform } from '@uiball/loaders'
import { firestoreInit } from "./firebase/config";
import { ItemCount } from "./components/ItemCount";  



firestoreInit()


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"hola que tal"} />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;