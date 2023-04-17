import {FaCheckCircle, FaChalkboardTeacher, FaAngleRight, FaBook, FaClock} from "react-icons/fa";
import Nav from "./Nav";
import Carrusel from "./carrusel";
import Footer from "./footer";

function LandingPage () {
    return(
        <div className="bg-bgColor">
        <Nav/>
            <section className="bg-principal p-3 bg-cover bg-fixed">
            <h1 className="text-white font-signikaNegative text-5xl flex pt-96 px-3">MomoyBot</h1>
            <p className="text-white font-Urbanist text-xl flex pt-5 px-3">El MomoyBot es una herramienta diseñada pensando en los estudiantes. Resuelve cualquier dudas en solo minutos! 
            Creado por los mejores estudiantes de nuestra universidad.</p>
            <a href="./chat"><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 bg-secundaryColor p-3 w-64 flex justify-center rounded-3xl m-3 text-white font-Urbanist text-xl cursor-pointer">
            Continuar a MomoyBot
        <FaAngleRight/>
        </button></a>
        </section>

        <section className=" p-5">
            <h1 className="text-center text-textColor font-signikaNegative shadow- text-4xl mt-5 mb-5 ">¿Por qué usarlo?</h1>
        
            <div className="flex flex-col items-center w-full mb-5">
        
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist grid-cols-2 text-lg  my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor">
                    <FaCheckCircle className="hover:fill-[#fff] text-5xl lg:mr-10 mr-5"/>
                    <p className="w-10/12">¡Rapidez a la hora de obtener respuestas! Con nuestro MomoyBot solo estás a un clic de distancia para resolver tus dudas.</p>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist grid-cols-2 text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor">
                    <FaChalkboardTeacher className="hover:fill-[#fff] text-5xl lg:mr-10 mr-5"/>
                    <p className="w-10/12">¿Tienes dudas con respecto a tu carrera? ¿Deseas conocer algo sobre la universidad? Entonces, ¿qué estás esperando para hacer tu pregunta a MomoyBot?</p>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist grid-cols-2 text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor">
                    <FaBook className="hover:fill-[#fff] text-5xl lg:mr-10 mr-5"/>
                    <p className="w-10/12">¡Comodidad y eficiencia! MomoyBot te permite obtener respuestas en cualquier momento y desde cualquier lugar</p>
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist grid-cols-2 text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor">
                    <FaClock className="hover:fill-[#fff] text-5xl lg:mr-10 mr-5"/>
                    <p className="w-10/12">Disponibilidad 24/7:Nuestro MomoyBot esta disponible disponibles las 24 horas del día, los 7 días de la semana, para que puedas realizar tus consultas cuando desees!</p>
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