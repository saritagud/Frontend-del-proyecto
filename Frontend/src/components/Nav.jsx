import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const cerrarSesion = () => {
      fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <div className="">
      <header className="bg-white h-20 flex items-center justify-between px-5 w-full ">
          <img className='w-16' src="/src/assets/robotBot.png" />
        <nav>
          <FaBars className="text-3xl h-full w-full cursor-pointer text-verdeManzana " onClick={() => setIsOpen(!isOpen)}/>

          {isOpen && (
          <ul className="origin-top-right absolute right-0 mt-5 w-full h-screen rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-right ">
            <a className="block px-4 py-3 hover:bg-verdeClaro text-2xl font-Urbanist" href="./chat"><li>ChatUVM</li></a>
            <a className="block px-4 py-3 hover:bg-verdeClaro text-2xl font-Urbanist" href="./personalizacion"><li>Personalizacion</li></a>
            <a className="block px-4 py-3 hover:bg-verdeClaro text-2xl font-Urbanist" href="./login"><li>Iniciar Sesión</li></a>
            <a className="block px-4 py-3 hover:bg-verdeClaro text-2xl font-Urbanist" href="./registro"><li>Registrarse</li></a>
            <button className="bg-verdeManzana p-4 rounded-2xl font-Urbanist font-bold text-xl m-5 w-52 hover:bg-black text-white shadow-md" onClick={cerrarSesion}>Cerrar Sesión</button>
          </ul>
          
          )}
        </nav>
      </header>
    </div>
  );
}

export default Nav;
