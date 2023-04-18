import {FaCheckCircle, FaChalkboardTeacher, FaAngleRight, FaBook, FaClock} from "react-icons/fa";
import Nav from "./Nav";
import Carrusel from "./carrusel";
import Footer from "./footer";

function LandingPage () {
    return(
        <div className="bg-bgColor">
        <Nav/>
            <section className="bg-principal p-3 bg-cover bg-fixed md:h-[100vh] lg:bg-principalHorizontal lg:h-[100vh] ">
                <h1 className="text-white font-signikaNegative text-5xl flex pt-96 px-3 md:text-7xl md:pt-[550px] lg:pt-60 xl:pt-80 ur:mt-[120px]">MomoyBot</h1>
                <p className="text-white font-Urbanist text-xl flex pt-5 px-3 md:text-3xl xl:text-4xl 2xl:text-5xl">MomoyBot es un chatbot diseñado pensando en los estudiantes de la UVM. ¡Resuelve cualquier duda en tan solo minutos! 
                Creado por los mejores estudiantes de nuestra universidad.</p>
                <a href="./chat"><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 bg-secundaryColor p-3 w-64 flex justify-center rounded-3xl m-3 text-white font-Urbanist text-xl cursor-pointer md:text-3xl md:w-96 md:h-20 md:items-center ur:text-4xl ur:w-[500px] ur:h-24 font-bold">
                Continuar a MomoyBOT
            <FaAngleRight/>
            </button></a>
        </section>

        <section className=" p-5">
            <h1 className="text-center text-textColor font-signikaNegative shadow- text-4xl mt-5 mb-5 md:text-6xl ur:text-7xl" >¿Por qué usarlo?</h1>
        
            <div className="flex flex-col items-center w-full mb-5 lg:flex-row lg:flex-wrap lg:justify-center">
        
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor md:text-3xl md:p-7 lg:w-[40%] lg:text-xl lg:mr-7 2xl:text-2xl ur:text-4xl">
                    <FaCheckCircle className="hover:fill-[#fff] text-5xl mr-5 md:text-6xl "/>
                    <p className="w-10/12">¡Rapidez a la hora de obtener respuestas! Con nuestro MomoyBOT solo estás a un clic de distancia para resolver tus dudas.</p>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist grid-cols-2 text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor md:text-3xl md:p-7 lg:w-[45%] lg:text-xl 2xl:text-2xl 2xl:w-[50%] ur:text-4xl">
                    <FaChalkboardTeacher className="hover:fill-[#fff] text-5xl mr-5 md:text-6xl"/>
                    <p className="w-10/12">¿Tienes dudas con respecto a tu carrera? ¿Deseas conocer algo sobre la universidad? Entonces, ¿qué estás esperando para hacer tu pregunta a MomoyBOT?</p>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist grid-cols-2 text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor md:text-3xl md:p-7 lg:w-[40%] lg:text-xl lg:mr-7 2xl:text-2xl ur:text-4xl">
                    <FaBook className="hover:fill-[#fff] text-5xl mr-5 md:text-6xl"/>
                    <p className="w-10/12">¡Comodidad y eficiencia! MomoyBOT te permite obtener respuestas en cualquier momento y desde cualquier lugar</p>
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 flex justify-center font-Urbanist grid-cols-2 text-lg my-4 font-bold items-center rounded-2xl p-3 w-[100%] shadow-2xl bg-secundaryColor md:text-3xl md:p-7 lg:w-[48%] lg:text-xl 2xl:text-2xl 2xl:w-[50%] ur:text-4xl">
                    <FaClock className="hover:fill-[#fff] text-5xl mr-5 md:text-6xl"/>
                    <p className="w-10/12">Disponibilidad 24/7: MomoyBOT está disponible las 24 horas del día, los 7 días de la semana, ¡para que así puedas realizar tus consultas cuando desees!</p>
                </div>

            </div>

        </section>
        <div>
            <p className="font-signikaNegative text-textColor text-center text-3xl p-7 md:text-5xl ur:text-7xl">¡Tener respuestas a tus preguntas nunca fue tan fácil!</p>
            <Carrusel/>
        </div>

        <Footer/>
        </div>
    )
}

export default LandingPage;