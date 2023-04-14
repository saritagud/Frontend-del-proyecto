import {FaCheckCircle, FaChalkboardTeacher, FaAngleRight, FaBook} from "react-icons/fa";
import Nav from "./Nav";
import Carrusel from "./carrusel";
import Footer from "./footer";


function LandingPage () {
    return(
        <div>
        <Nav/>
            <section className="bg-principal p-3 bg-cover bg-fixed">
            <h1 className="text-white font-signikaNegative text-5xl flex pt-96 px-3">MomoyBot</h1>
            <p className="text-white font-Urbanist text-xl flex pt-5 px-3">El MomoyBot es una herramienta diseñada pensando en los estudiantes. Resuelve cualquier dudas en solo minutos! 
            Creado por los mejores estudiantes de nuestra universidad.</p>
            <a href="./chat"><button className="bg-secundaryColor p-3 w-64 flex justify-center rounded-3xl m-3 text-white font-Urbanist text-xl cursor-pointer hover:bg-contrastSecundaryColor">
            Continuar a MomoyBot
        <FaAngleRight/>
        </button></a>
        </section>

        <section className=" p-5">
            <h1 className="text-textColor font-signikaNegative shadow- text-4xl mt-5 mb-5 ">¿Por qué usarlo?</h1>
        
            <div className="flex flex-col items-center w-full mb-5">
        
                <div className="flex font-Urbanist text-lg  my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor">
                    <FaCheckCircle className="text-5xl  w-64"/>
                    <p>¡Rapidez a la hora de obtener respuestas! Con nuestro MomoyBot solo estás a un clic de distancia para resolver tus dudas.</p>
                </div>
                <div className="flex font-Urbanist text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor">
                    <FaChalkboardTeacher className="text-5xl mr-3 w-full"/>
                    <p>¿Tienes dudas con respecto a tu carrera? ¿Deseas conocer algo sobre la universidad? Entonces, ¿qué estás esperando para hacer tu pregunta a MomoyBot?</p>
                </div>
                <div className="flex font-Urbanist text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor">
                    <FaBook className="text-5xl w-64"/>
                    <p>¡Comodidad y eficiencia! MomoyBot te permite obtener respuestas en cualquier momento y desde cualquier lugar</p>
                </div>

            </div>

        </section>
        <div>
            <p className="font-signikaNegative text-textColor text-center text-3xl p-7">¡Tener respuestas a tus preguntas nunca fue tan fácil!</p>
            <Carrusel/>
        </div>

        <Footer/>
        </div>
    )
}

export default LandingPage;