import { useEffect, useState } from 'react'
import Footer from './footer'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function Personalizar (){
    const navigate = useNavigate();
    const existeToken = localStorage.getItem('token');
    const estiloLabel = "font-Urbanist text-xl text-left w-full mt-8 font-bold";
    const estiloSelect = "h-14 rounded-xl p-3 font-Urbanist font-bold text-xl border-2 border-compPrimaryColor";

    const [ theme, setTheme ] = useState('');

    //useEffect(() => {
    //    if ( !existeToken ) navigate('/');
    //}, [])

    function establecerTema(e) {
        setTheme(e);
    }

    function cambiarTema() {
        if (theme == "Tema Uvm") {
            localStorage.setItem('theme', "");
        } else if (theme == "Tema Oscuro") {
            localStorage.setItem('theme', "theme-dark");
        } else if (theme == "Tema Azul") {
            localStorage.setItem('theme', "theme-blue");
            console.log("funciona")
        }
    }

    return(
        <div className='flex flex-col items-center bg-bgColor'>
            <i className='w-full text-left' onClick={() => navigate('/')}>
                {" "}
                <FaArrowLeft className="cursor-pointer text-4xl text-contrastPrimaryColor ml-7 mt-7" />{" "}
            </i>
            <h1 className='font-signikaNegative text-textColor text-5xl text-center m-4'>¡Personaliza tu MomoyBOT!</h1>

            <p className='font-Urbanist text-textColor text-center text-[20px] m-5'>Al proveer esta información, MomoyBOT te podrá proporcionar mejores respuestas</p>

            <form className="flex flex-col  bg-contrastSecundaryColor h-auto w-72 lg:w-80 rounded-2xl border-2 border-solid border-neutralColor p-4 mb-16 shadow-2xl">

            <div className="w-62 lg:w-80 rounded-t-2xl h-6 bg-secundaryColor -m-5 mb-1 border-t-2 border-neutralColor border-l-2 border-r-2"></div>
                <label className={estiloLabel}>Carrera</label>
                <select className='h-14 rounded-xl text-base pl-3 font-Urbanist font-bold lg:text-xl border-2 border-compPrimaryColor'>
                    <option>Ingeniería en Computación</option>
                    <option>Ingeniería Industrial</option>
                    <option>Administración de empresas</option>
                    <option>Contaduría</option>
                    <option>Derecho</option>
                </select>

                <label className={estiloLabel}>Trimestre</label>
                <input className='border-2 border-compPrimaryColor h-14 text-left w-full rounded-2xl p-3 font-Urbanist text-xl font-bold' type="text"></input>

                <label className={estiloLabel}>Tema</label>
                <select className={estiloSelect} onClick={(e) => establecerTema(e.currentTarget.value)}>
                    <option>Tema Uvm</option>
                    <option>Tema Oscuro</option>
                    <option>Tema Azul</option>
                </select>

                <label className={estiloLabel}>Sonido de mensajes</label>
                <select className={estiloSelect}></select>

                <button className="bg-secundaryColor border-2  rounded-2xl font-Urbanist text-white text-xl p-3 w-52 font-bold m-10" onClick={cambiarTema()}>Guardar Cambios</button>
            </form>

            <Footer/>
        </div>
    )
}

export default Personalizar;