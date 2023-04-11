import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function Registro() {
    const estiloLabel = "font-Urbanist text-lg text-left w-full mt-5 font-bold";
    const estiloInput = "border-2 border-verdeOscuroFuerte h-12 text-left w-full rounded-2xl p-3 font-Urbanist font-xl";
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmacionPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmarPassword) {
            alert("La contraseña y la confirmación de la contraseña no coinciden.");
        } else {
            const datosUsuario = {
                correo: correoElectronico,
                username: username,
                password: password,
            };
            console.log(datosUsuario);
            fetch("http://localhost:3000/registrar_usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datosUsuario),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <div>
            <a href="/index">
                {" "}
                <FaArrowLeft className="cursor-pointer text-3xl text-verdeOscuro ml-7 mt-7" />{" "}
            </a>
            <section className="flex flex-col items-center">
                <img className="w-44 " src="/src/assets/logoBot.png" />
                <h1 className="font-signikaNegative text-5xl m-3 ">Registrate</h1>

                <form className="flex flex-col items-center bg-verdeClaro h-full w-80 rounded-2xl border-2 border-solid border-grisClaro p-4 mb-14 shadow-2xl" onSubmit={handleSubmit}>
                    <div className="w-80 rounded-t-2xl h-6 bg-verdeManzana -m-5 mb-1 border-t-2 border-grisClaro border-l-2 border-r-2"></div>

                    <label className={estiloLabel}>Correo Institucional</label>
                    <input className={estiloInput} type="email" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} name="correoElectronico"></input>
                    <label className={estiloLabel}>Nombre de Usuario</label>
                    <input className={estiloInput} type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username"></input>
                    <label className={estiloLabel}>Contraseña</label>
                    <input className={estiloInput} type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="contrasena"></input>
                    <label className={estiloLabel}>Confirma tu contraseña </label>
                    <input className={estiloInput} type="password" value={confirmarPassword} onChange={(e) => setConfirmacionPassword(e.target.value)} name="contrasenaConfirmacion"></input>
                    <label className={estiloLabel}>Foto de perfil(Opcional) </label>
                    <input className="w-56 text-lg font-Urbanist font-bold m-3 cursor-pointer " type="file"></input>
                    <button className="bg-verdeOscuroFuerte border-2  rounded-2xl font-Urbanist m-5 text-white text-xl p-3 w-56 font-bold ">Registar</button>
                </form>
            </section>
        </div>
    );
}

export default Registro;
