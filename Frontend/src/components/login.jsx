import {FaArrowLeft} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
function Login(){
    const estiloLabel = ("font-Urbanist text-xl text-left w-full m-3 font-bold")
    const estiloInput =("border-2 border-verdeOscuroFuerte h-14 text-left w-full rounded-2xl p-3 font-Urbanist text-xl")
    return(
        <div>
        <a href="index"> <FaArrowLeft  className="cursor-pointer text-3xl text-verdeOscuro ml-7 mt-7"/> </a>
        
        <section className="flex flex-col  items-center">
            <img className='w-44 ' src="/src/assets/logoBot.png" />
            <h1 className="font-signikaNegative text-5xl m-5">Inicia Sesión </h1>

            <form className="flex flex-col items-center bg-verdeClaro h-auto w-80 rounded-2xl border-2 border-solid border-grisClaro p-4 mb-16 shadow-2xl">
                <div className='w-80 rounded-t-2xl h-6 bg-verdeManzana -m-5 mb-1 border-t-2 border-grisClaro border-l-2 border-r-2'></div>
                <label className={estiloLabel}>Correo Electrónico </label>
                <input className={estiloInput} type="email"></input>
                <label className={estiloLabel}>Contraseña</label>
                <input className={estiloInput} type="password"></input>
                <button className="bg-verdeOscuroFuerte border-2  rounded-2xl font-Urbanist mt-7 text-white text-xl p-3 w-52 font-bold ">Iniciar Sesión</button>
                
                <div className='flex justify-between items-center mt-5'>
                <div className='h-1 w-32 bg-verdeOscuroFuerte '></div> <p className='m-2 text-xl text-verdeOscuroFuerte'>o</p> <div className='h-1 w-32 bg-verdeOscuroFuerte'></div>
                </div>
                <button className='w-64 bg-white p-4 border-2 border-black rounded-xl m-5 flex justify-center items-center font-Urbanist font-bold'><FcGoogle className='mr-2 text-xl'/>Iniciar Sesión con Google</button>
                <p className="font-Urbanist ">¿No tienes una cuenta? <a className="font-bold hover:text-white" href="./registro">¡Regístrate!</a> </p>

            </form>

            
        </section>
        </div>
    );
}

export default Login;