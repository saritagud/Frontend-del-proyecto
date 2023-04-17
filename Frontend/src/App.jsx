import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/inicio";
import Login from "./components/login";
import Registro from "./components/register";
import Chat from "./components/chat";
import Personalizacion from "./components/personalizacion";


function App() {
  const theme = localStorage.getItem("theme");
  return (
    <div className={"min-h-screen bg-bgColor " + theme} >
      <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />}></Route>
            <Route path="/chat" element={<Chat />} />
            <Route path="/personalizacion" element={<Personalizacion />} />
      </Routes>
    </div>
  );
}

export default App;