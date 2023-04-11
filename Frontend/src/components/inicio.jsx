import {FaCheckCircle, FaChalkboardTeacher, FaAngleRight, FaBook} from "react-icons/fa";
import Nav from "./Nav";
import Carrusel from "./carrusel";
import Footer from "./footer";
import {useEffect, useState} from "react";


function LandingPage () {
    return(
        <div>
        <Nav/>
            <section className="bg-principal p-3 bg-cover bg-fixed">
            <h1 className="text-white font-signikaNegative text-5xl flex pt-96 px-3">ChatUVM</h1>
            <p className="text-white font-Urbanist text-xl flex pt-5 px-3">El chatUVM es una herramienta diseñada pensando en los estudiantes. Resuelve cualquier dudas en solo minutos! 
            Creado por los mejores estudiantes de nuestra universidad.</p>
            <a href="./chat"><button className="bg-verdeManzana p-3 w-64 flex justify-center rounded-3xl m-3 text-white font-Urbanist text-xl cursor-pointer hover:bg-verdeOscuro">
            Continuar a ChatUVM
        <FaAngleRight/>
        </button></a>
        </section>

        <section className=" p-5">
            <h1 className="font-signikaNegative shadow- text-4xl mt-5 mb-5 ">¿Por qué usarlo?</h1>
        
            <div className="flex flex-col items-center w-full mb-5">
        
                <div className="flex font-Urbanist text-lg  my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-verdeManzana">
                    <FaCheckCircle className="text-5xl  w-64"/>
                    <p>¡Rapidez a la hora de obtener respuestas! Con nuestro chatUVM solo estás a un clic de distancia para resolver tus dudas.</p>
                </div>
                <div className="flex font-Urbanist text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-verdeManzana">
                    <FaChalkboardTeacher className="text-5xl mr-3 w-full"/>
                    <p>¿Tienes dudas con respecto a tu carrera? ¿Deseas conocer algo sobre la universidad? Entonces, ¿qué estás esperando para hacer tu pregunta a chatUVM?</p>
                </div>
                <div className="flex font-Urbanist text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-verdeManzana">
                    <FaBook className="text-5xl w-64"/>
                    <p>¡Comodidad y eficiencia! ChatUVM te permite obtener respuestas en cualquier momento y desde cualquier lugar</p>
                </div>

            </div>
                
        </section>
        <div> 
            <p className="font-signikaNegative text-center text-3xl p-7">¡Tener respuestas a tus preguntas nunca fue tan fácil!</p>
            <Carrusel/>
        </div>
        
        <Footer/>
        </div>
    )        
}

export default LandingPage;