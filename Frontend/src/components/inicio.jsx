import {FaCheckCircle, FaChalkboardTeacher, FaAngleRight, FaBook} from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./footer";

function LandingPage () {
    return(
        <div>
        <Nav/>
            <section className="bg-principal p-3 bg-cover bg-fixed">
            <h1 className="text-white font-signikaNegative text-5xl flex pt-96 px-3">ChatUVM</h1>
            <p className="text-white font-Urbanist text-2xl flex pt-5 px-3">El chatUVM es una herramienta diseñada pensando en los estudiantes. Resuelve cualquier dudas en solo minutos! 
            Creado por los mejores estudiantes de nuestra universidad.</p>
            <a href="./register-login.jsx"><button className="bg-verdeManzana p-4 w-72 flex justify-center rounded-3xl m-3 text-white font-Urbanist text-xl cursor-pointer hover:bg-verdeOscuro ">
            Continuar a ChatUVM
        <FaAngleRight/>
        </button></a>
        
        </section>

        <section className="flex flex-col items-center py-6">
            <h1 className="font-signikaNegative text-3xl w-full  px-5">¿Cómo usarlo?</h1>

            <p className="bg-verdeManzana m-3 mx-10 py-5 px-4 h-30 w-70 text-lg font-bold font-Urbanist rounded-lg">Haz clic en el botón principal de la web</p>
            <p className="bg-verdeManzana m-3 mx-10 py-5 px-4 h-30 w-70 text-lg font-bold font-Urbanist rounded-lg">Inicia sesión con tu correo y contraseña de chatUVM</p>
            <p className="bg-verdeManzana m-3 mx-10 py-5 px-4 h-30 w-70 text-lg font-bold font-Urbanist rounded-lg">¡Escribe cualquier pregunta al chat y listo! Estarías utilizando de forma correcta nuestro chatUVM. </p>
        </section>

        <section className="bg-verdeClaro p-5">
            <h1 className="font-signikaNegative text-3xl">¿Por qué usarlo?</h1>
        
            <div className="flex flex-col items-center w-full">
        
                <div className="flex font-Urbanist text-lg my-4 font-bold items-center ">
                    <FaCheckCircle className="text-5xl w-64"/>
                    <p>¡Rapidez a la hora de obtener respuestas! Con nuestro chatUVM solo estás a un clic de distancia para resolver tus dudas.</p>
                </div>
                <div className="flex font-Urbanist text-lg my-2 font-bold items-center ">
                    <FaChalkboardTeacher className="text-5xl  w-full"/>
                    <p>¿Tienes dudas con respecto a tu carrera? ¿Deseas conocer algo sobre la universidad? Entonces, ¿qué estás esperando para hacer tu pregunta a chatUVM?</p>
                </div>
                <div className="flex font-Urbanist text-lg my-2 font-bold items-center">
                    <FaBook className="text-5xl w-64"/>
                    <p>¡Comodidad y eficiencia! ChatUVM te permite obtener respuestas en cualquier momento y desde cualquier lugar</p>
                </div>

            </div>
                
        </section>

        <Footer/>
        </div>
        
    );
}

export default LandingPage;