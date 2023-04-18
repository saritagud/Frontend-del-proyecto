import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Nav() {
  const navigate = useNavigate();
  const existeToken = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  function LogoutButton(props) { // pasando a isLoading como una prop
    const { isLoading } = props;

    const handleLogout = () => {
      setIsLoading(true);

      fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.removeItem("token");
          setIsLoading(false);
          navigate("/")
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });

        if(existeToken) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Has cerrado la sesión exitosamente',
            showConfirmButton: false,
            timer: 2000,
        });
        }
    };

    return (
      <>
        {localStorage.getItem("token") && (
          <button
          
            className="bg-secundaryColor p-4 rounded-2xl font-Urbanist font-bold text-xl m-5 w-52 hover:bg-contrastSecundaryColor text-textColor shadow-md md:text-3xl md:w-64 lg:text-xl lg:h-10 lg:w-40 lg:m-2 lg:p-1 lg:rounded-xl ur:text-2xl ur:h-14  ur:w-52 ur:mt-8"
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? "Cerrando sesión..." : "Cerrar sesión"}
          </button>
        )}
      </>
    );
  }

  return (
    <div className="">
        <header className="bg-bgColor h-14 flex items-center justify-between px-5 w-full md:h-24 lg:h-20 border-primaryColor border-[0.5px]">
            <img className="w-14 cursor-pointer ur:w-20" src="/src/assets/robotBot.png"  onClick={() => navigate('/')}/>
            <nav>
                <FaBars className="text-2xl h-full w-full cursor-pointer text-secundaryColor md:text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)} />

                {isOpen && (
                    <ul className="origin-top-right absolute right-0 mt-3 w-full h-screen rounded-md shadow-lg bg-bgColor ring-1 ring-black ring-opacity-5 text-right cursor-pointer ">
                        { 
                          existeToken && // Mostrar la pagina chat y personalizacion unicamente cuando el usuario este logueado
                          <>
                            <p onClick={() => navigate('/chat')} className="block px-4 py-3 hover:bg-compSecundaryColor text-2xl font-Urbanist">
                            <li className="md:text-4xl md:mt-5 text-textColor cursor-pointer">ChatUVM</li>
                          </p>
                          <p onClick={() => navigate('/personalizacion')} className="block px-4 py-3 hover:bg-compSecundaryColor text-2xl font-Urbanist">
                              <li className="md:text-4xl md:mt-5 text-textColor cursor-pointer">Personalizacion</li>
                          </p>
                          </>
                        }
                        {
                          !existeToken && // Mostrar la pagina login y registro unicamente cunado el usuario no tenga una cuenta o haya iniciado sesion
                          <>
                            <p onClick={() => navigate('/login')} className="block px-4 py-3 hover:bg-compSecundaryColor text-2xl font-Urbanist font-bold">
                            <li className="md:text-4xl md:mt-5 text-textColor">Iniciar Sesión</li>
                            </p>
                            <p onClick={() => navigate('/registro')} className="block px-4 py-3 hover:bg-compSecundaryColor text-2xl font-Urbanist cursor-pointer font-bold">
                                <li className="md:text-4xl md:mt-5 text-textColor cursor-pointer">Registrarse</li>
                            </p>
                          </>
                        }
                        <LogoutButton isLoading={isLoading}/>
                    </ul>
                )}

                

                    <div className="p:hidden sm:hidden md:hidden lg:block">
                    <ul className="flex justify-between w-full ur:h-32">
                        { 
                          existeToken && // Mostrar la pagina chat y personalizacion unicamente cuando el usuario este logueado
                          <>
                            <p onClick={() => navigate('/chat')} className="block px-4 py-3 hover:bg-compSecundaryColor  rounded-2xl text-2xl font-Urbanist ur:text-3xl ur:mt-8">
                            <li className="text-textColor cursor-pointer font-bold">MomoyBOT</li>
                          </p>
                          <p onClick={() => navigate('/personalizacion')} className="block px-4 py-3 hover:bg-compSecundaryColor  rounded-2xl text-2xl font-Urbanist ur:text-3xl  ur:mt-8">
                              <li className="text-textColor font-bold cursor-pointer">Personalizacion</li>
                          </p>
                          </>
                        }
                        {
                          !existeToken && // Mostrar la pagina login y registro unicamente cunado el usuario no tenga una cuenta o haya iniciado sesion
                          <>
                            <p onClick={() => navigate('/login')} className="block px-4 py-3 hover:bg-compSecundaryColor  rounded-2xl text-2xl font-Urbanist ur:text-3xl ur:mt-8">
                            <li className="text-textColor cursor-pointer font-bold">Iniciar Sesión</li>
                            </p>
                            <p onClick={() => navigate('/registro')} className="block px-4 py-3 hover:bg-compSecundaryColor  rounded-2xl text-2xl font-Urbanist ur:text-3xl ur:mt-8">
                                <li className="text-textColor cursor-pointer font-bold">Registrarse</li>
                            </p>
                          </>
                        }
                        <LogoutButton isLoading={isLoading}/>
                    </ul>
                  </div>
            </nav>
        </header>
    </div>
);
}

export default Nav;









// El codigo de abajo lo dejo por si es necesario hacer una modificacion previa al cambio hecho en el commit numero 35
// Atte: Atilio



// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// function Nav() {
//     const [isOpen, setIsOpen] = useState(false);
//     const cerrarSesion = () => {
//       fetch("http://localhost:3000/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({}),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//   return (
//     <div className="">
//       <header className="bg-white h-20 flex items-center justify-between px-5 w-screen ">
//           <img className='w-16' src="/src/assets/robotBot.png" />
//         <nav>
//           <FaBars className="text-3xl h-full w-full cursor-pointer text-verdeManzana " onClick={() => setIsOpen(!isOpen)}/>

//           {isOpen && (
//           <ul className="origin-top-right absolute right-0 mt-5 w-full h-screen rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-right">
//             <a className="block px-4 py-3 hover:bg-compPrimaryColor text-2xl font-Urbanist" href="./chat"><li>ChatUVM</li></a>
//             <a className="block px-4 py-3 hover:bg-compPrimaryColor text-2xl font-Urbanist" href="./personalizacion"><li>Personalizacion</li></a>
//             <a className="block px-4 py-3 hover:bg-compPrimaryColor text-2xl font-Urbanist" href="./login"><li>Iniciar Sesión</li></a>
//             <a className="block px-4 py-3 hover:bg-compPrimaryColor text-2xl font-Urbanist" href="./registro"><li>Registrarse</li></a>
//             <button className="bg-verdeManzana p-4 rounded-2xl font-Urbanist font-bold text-xl m-5 w-52 hover:bg-black text-white shadow-md" onClick={cerrarSesion}>Cerrar Sesión</button>
//           </ul>
          
//           )}
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Nav;
