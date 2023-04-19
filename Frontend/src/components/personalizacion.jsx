import { useState, useEffect } from "react";
import Footer from "./footer";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Personalizar() {
    const navigate = useNavigate();
    const existeToken = localStorage.getItem("token");
    const estiloLabel = "font-Urbanist text-xl text-left w-full font-bold md:text-3xl md:mt-4 2xl:text-4xl ur:text-5xl ur:mt-7";
    const estiloSelect = "h-14 rounded-xl p-3 font-Urbanist font-bold text-xl border-2 border-compPrimaryColor md:text-3xl md:mt-4 w-[100%] md:h-20 cursor-pointer ur:text-4xl ur:mt-6";
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
                  throw new Error("Error al actualizar los datos");
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
                <FaArrowLeft className="cursor-pointer text-4xl text-contrastPrimaryColor ml-7 mt-7 2xl:text-6xl ur:text-6xl" />{" "}
            </i>
            <h1 className="font-signikaNegative text-textColor text-5xl text-center m-4 md:mt-6 2xl:text-7xl ur:text-8xl">¡Personaliza tu MomoyBOT!</h1>

            <p className="font-Urbanist text-textColor text-center text-[20px] font-bold m-5 md:text-3xl 2xl:text-4xl ur:text-5xl">Al proveer esta información, MomoyBOT te podrá proporcionar mejores respuestas</p>

            <form className="flex flex-col items-center bg-contrastSecundaryColor h-auto w-72 rounded-2xl border-2 border-solid border-neutralColor p-4 mb-16 shadow-2xl md:w-[60%] xl:w-[40%] 2xl:h-[55vh] 2xl:w-[30%] ur:h-[65vh] border-t-[30px] border-t-secundaryColor ur:mt-10" onSubmit={handleSubmit}>

                <label className={estiloLabel}>Tema</label>
                <select className={estiloSelect} value={temaSeleccionado} onChange={(e) => setTemaSeleccionado(e.target.value)}>
                    <option>Selecciona tu tema</option>
                    <option>Tema Uvm</option>
                    <option>Tema Oscuro</option>
                    <option>Tema Azul</option>
                </select>

                <label className={estiloLabel}>Sonido de mensajes</label>
                <select className={estiloSelect} value={sonidoSeleccionado} onChange={(e) => setSonidoSeleccionado(e.target.value)}>
                    <option value={1}>Selecciona tu sonido preferido</option>
                    <option value={1}>Sonido 1</option>
                    <option value={2}>Sonido 2</option>
                    <option value={3}>Sonido 3</option>
                </select>

                <button onClick={() => window.location.reload(false)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-primaryColor border-2 rounded-2xl font-Urbanist text-white text-xl p-3 w-52 font-bold mt-10 md:text-3xl md:w-80 md:mt-6 md:h-20 xl:w-52 xl:text-xl xl:h-[60px] xl:mt-4 2xl:mt-14 2xl:h-[80px] 2xl:text-3xl 2xl:w-72 ur:w-96 ur:h-[100px] ur:mt-20 ur:text-4xl">Guardar Cambios</button>
                <a/>
            </form>
        </div>
    );
}

export default Personalizar;
