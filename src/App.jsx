import { Login } from "./pages/Login/Login";
import {   Route, Navigate, Routes } from 'react-router-dom';
import { Perfil } from "./pages/Perfil/Perfil";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Pokedex } from "./pages/Pokedex/Pokedex";

function App() {
  const isUserLoggedIn = localStorage.getItem('usuário');


  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Perfil" element={isUserLoggedIn ? <Perfil/> : <Navigate to="/" replace/>}/>
      <Route path="/Pokedex" element={isUserLoggedIn ? <Pokedex/> : <Login/>}/>
      <Route path="/Favoritos" element={isUserLoggedIn ? <Favoritos/> : <Login/>}/>
    </Routes>
  );
}

export default App;
