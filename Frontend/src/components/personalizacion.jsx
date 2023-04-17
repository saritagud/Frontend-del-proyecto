import { useState, useEffect } from "react";
import Footer from "./footer";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Personalizar() {
    const navigate = useNavigate();
    const existeToken = localStorage.getItem("token");
    const estiloLabel = "font-Urbanist text-xl text-left w-full mt-8 font-bold sm:text-4xl";
    const estiloSelect = "h-14 rounded-xl p-3 font-Urbanist font-bold text-xl border-2 border-compPrimaryColor sm:text-3xl w-[100%] sm:h-20";
    const [temaSeleccionado, setTemaSeleccionado] = useState(1);
    const [sonidoSeleccionado, setSonidoSeleccionado] = useState(1);

    useEffect(() => {
        if (!existeToken) navigate("/");
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
            console.log(`El tema seleccionado es: ${temaSeleccionado}`);
            console.log(`El sonido seleccionado es: ${sonidoSeleccionado}`);

            if (temaSeleccionado == "Tema Uvm") {
                localStorage.setItem('theme', "");
            } else if (temaSeleccionado == "Tema Oscuro") {
                localStorage.setItem('theme', "theme-dark");
            } else if (temaSeleccionado == "Tema Azul") {
                localStorage.setItem('theme', "theme-blue");
            }
            const datosUsuario = {
                estilosPref: temaSeleccionado,
                sonidoPref: sonidoSeleccionado,
            }

            fetch("http://localhost:3000/personalizacion", {
                method: "PUT",
                body: JSON.stringify(datosUsuario),
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${existeToken}`
                }
              })
              .then(response => {
                if (!response.ok) {
                  throw new err("Error al actualizar los datos");
                }
                console.log("Datos actualizados correctamente");
              })
              .catch(err => {
                console.error(err);
              });

    };
    return (
        <div className="flex flex-col items-center bg-bgColor">
            <i className="w-full text-left" onClick={() => navigate("/")}>
                {" "}
                <FaArrowLeft className="cursor-pointer text-4xl text-contrastPrimaryColor ml-7 mt-7" />{" "}
            </i>
            <h1 className="font-signikaNegative text-textColor text-5xl text-center m-4 sm:mt-6">¡Personaliza tu MomoyBOT!</h1>

            <p className="font-Urbanist text-textColor text-center text-[20px] m-5 sm:text-3xl">Al proveer esta información, MomoyBOT te podrá proporcionar mejores respuestas</p>

            <form className="flex flex-col items-center bg-contrastSecundaryColor h-auto w-72 rounded-2xl border-2 border-solid border-neutralColor p-4 mb-16 shadow-2xl sm:w-[70%] sm:h-[650px]" onSubmit={handleSubmit}>
                <div className="w-[540px] rounded-t-2xl h-6 bg-verdeOscuroFuerte -m-5 mb-1 border-t-2 border-neutralColor border-l-2 border-r-2 sm:h-10"></div>
                <label className={estiloLabel}>Carrera</label>
                <select className={estiloSelect}>
                    <option>Ingeniería en Computación</option>
                    <option>Ingeniería Industrial</option>
                    <option>Administración de empresas</option>
                    <option>Contaduría</option>
                    <option>Derecho</option>
                </select>

                <label className={estiloLabel}>Tema</label>
                <select className={estiloSelect} value={temaSeleccionado} onChange={(e) => setTemaSeleccionado(e.target.value)}>
                    <option>Tema Uvm</option>
                    <option>Tema Oscuro</option>
                    <option>Tema Azul</option>
                </select>

                <label className={estiloLabel}>Sonido de mensajes</label>
                <select className={estiloSelect} value={sonidoSeleccionado} onChange={(e) => setSonidoSeleccionado(e.target.value)}>
                    <option value={1}>Sonido 1</option>
                    <option value={2}>Sonido 2</option>
                    <option value={3}>Sonido 3</option>
                </select>

                <button onClick={() => navigate('/chat')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-verdeOscuroFuerte border-2 rounded-2xl font-Urbanist text-white text-xl p-3 w-52 font-bold mt-10 sm:text-3xl sm:w-96 sm:h-20 ">Guardar Cambios</button>
            </form>

            <Footer />
        </div>
    );
}

export default Personalizar;
