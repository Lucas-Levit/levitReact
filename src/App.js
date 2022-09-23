import './assets/css/App.css';
import {NavBar} from "./componentes/NavBar.js"
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css'
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting= "Hola que tal?"/>
    </>
);
}

export default App;