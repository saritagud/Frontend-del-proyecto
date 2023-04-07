import Footer from "./footer"

function RegisterLogin(){
    const button = ("bg-verdeManzana p-5 rounded-2xl font-Urbanist text-2xl font-bold m-4 w-60 text-center hover:bg-verdeClaro")
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img className="w-80" src="/src/assets/logo_chatUVM.png"/>
            <a className={button} href="./login.jsx"> <button>Iniciar Sesión</button> </a>
            <a className={button} href="./register.jsx"> <button>Registrarse</button> </a>
        </div>
    )
}

export default RegisterLogin;