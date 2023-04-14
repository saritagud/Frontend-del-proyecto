import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/inicio";
import Login from "./components/login";
import Registro from "./components/register";
import Chat from "./components/chat";
import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen theme-dark">
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