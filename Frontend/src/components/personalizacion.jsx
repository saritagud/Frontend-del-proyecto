import { useState } from 'react';
import Footer from './footer'
import { FaArrowLeft } from "react-icons/fa";

function Personalizar (){

    const estiloLabel = "font-Urbanist text-xl text-left w-full mt-8 font-bold";
    const estiloSelect = "h-14 rounded-xl p-3 font-Urbanist font-bold text-xl border-2 border-compPrimaryColor"

    const [ theme, setTheme ] = useState("");

    function cambiarTema(temaNuevo) {
        if (temaNuevo == "Tema Uvm") {
            localStorage.setItem('theme', "");
        } else if (temaNuevo == "Tema Oscuro") {
            localStorage.setItem('theme', "theme-dark");
        } else if (temaNuevo == "Tema Azul") {
            localStorage.setItem('theme', "theme-blue");
        }
        setTheme(temaNuevo)
    }
    return(
        <div className='flex flex-col items-center bg-bgColor'>
        <a className='w-full text-left' href="/">
                {" "}
                <FaArrowLeft className="cursor-pointer text-4xl text-contrastPrimaryColor ml-7 mt-7" />{" "}
            </a>
            <h1 className='font-signikaNegative text-5xl text-center m-4 text-textColor'>¡Personaliza tu MomoyBOT!</h1>

            <p className='font-Urbanist text-center text-[20px] m-5 text-textColor'>Al proveer esta información, MomoyBOT te podrá proporcionar mejores respuestas</p>

            <form className="flex flex-col  bg-contrastSecundaryColor h-auto w-80 rounded-2xl border-2 border-solid border-neutralColor p-4 mb-16 shadow-2xl">

            <div className=" rounded-t-2xl h-6 bg-secundaryColor -m-5 mb-1 border-t-2 border-neutralColor border-l-2 border-r-2 text-textColor"></div>
                <label className={estiloLabel}>Carrera</label>
                <select className='h-14 rounded-xl pl-3 font-Urbanist font-bold text-xl border-2 border-compPrimaryColor'>
                    <option>Ingeniería en Computación</option>
                    <option>Ingeniería Industrial</option>
                    <option>Administración de empresas</option>
                    <option>Contaduría</option>
                    <option>Derecho</option>
                </select>
                <label className={estiloLabel}>Trimestre</label>
                <input className='border-2 border-compPrimaryColor h-14 text-left w-full rounded-2xl p-3 font-Urbanist text-xl font-bold' type="text"></input>
                <label className={estiloLabel}>Tema</label>
                <select className={estiloSelect} onChange={(e) => cambiarTema(e.currentTarget.value)}>
                    <option>Tema Uvm</option>
                    <option>Tema Oscuro</option>
                    <option>Tema Azul</option>
                </select>

                <label className={estiloLabel}>Sonido de mensajes</label>
                <select className={estiloSelect}></select>
                <a href="./personalizacion">
                    <button
                        className="bg-verdeOscuroFuerte border-2  rounded-2xl font-Urbanist text-white text-xl p-3 w-52 font-bold m-10"
                    >Guardar Cambios</button>
                </a>
            </form>

            <Footer/>
        </div>
    )
}

export default Personalizar;