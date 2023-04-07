import { Route, Routes } from "react-router-dom"
import Nav from "./components/nav";
import Footer from "./components/footer";
import LandingPage from "./components/inicio";
import Login from "./components/login";
import Registro from "./components/register";
import Chat from "./components/chat";

function App() {
  return (
    <div className="App min-h-screen">
      <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />}></Route>
            <Route path="/chat" element={<Chat />} />

      </Routes>
    </div>
  );
}

export default App;