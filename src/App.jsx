import { Login } from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Perfil } from "./pages/Perfil/Perfil";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Pokedex } from "./pages/Pokedex/Pokedex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Perfil" element={<Perfil/>}/>
      <Route path="/Pokedex" element={<Pokedex/>}/>
      <Route path="/Favoritos" element={<Favoritos/>}/>
    </Routes>
  );
}

export default App;
