import { Login } from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Perfil } from "./pages/Perfil/Perfil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Perfil" element={<Perfil/>}/>
    </Routes>
  );
}

export default App;
