import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function Registro() {
    const navigate = useNavigate();
    const estiloLabel = "font-Urbanist text-lg text-left w-full mt-5 font-bold";
    const estiloInput = "border-2 border-verdeOscuroFuerte h-12 text-left w-full rounded-2xl p-3 font-Urbanist font-xl font-bold";
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmacionPassword] = useState("")
    const [file, setFile] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();

        const regexLength = 5;
            if(username.length < regexLength && password.length < regexLength && confirmarPassword.length < regexLength){
                alert('Ingrese datos validos')

                if (password !== confirmarPassword) {
                    alert("La contraseña y la confirmación de la contraseña no coinciden.")
                }
                    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
                        if (!password || !regexPassword.test(password)) {
                        alert("La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.");
                        return;
                    }
                    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!correoElectronico || !regexEmail.test(correoElectronico)) {
                        alert("Por favor ingresa un correo electrónico válido.");
                        return;
                    }
            
                    const regexUsername = /^[a-zA-Z0-6]+$/;
                        if (!username || !regexUsername.test(username)) {
                        alert("Por favor ingresa un nombre de usuario válido (sólo letras y números).");
                        return;
                    }
                
                } else {
                    const datosUsuario = {
                        correo: correoElectronico,
                        username: username,
                        password: password,
                    };
                    console.log(datosUsuario);
                    fetch("http://localhost:3000/registrar_usuario", {
                        method: "POST",
                        body: JSON.stringify(datosUsuario),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data)
                            localStorage.setItem("token", data.token); // aqui almaceno el token en local storage
                            navigate('/personalizacion');
                        })
                        .catch((err) => {
                            console.log(err);
                        });

                        const formData = new FormData();
                        formData.append("username", username);
                        formData.append("image", file);

                        fetch("http://localhost:3000/upload", {
                            method: 'POST',
                            body: formData,
                        })
                        .then((response) => {response.json()})
                        .then(data => console.log(data))
                        .catch((error) => console.error('Error',error))
            }
    }          
    return (
        <div>
            <i onClick={() => navigate('/')}>
                {" "}
                <FaArrowLeft className="cursor-pointer text-3xl text-verdeOscuro ml-7 mt-7" />{" "}
            </i>
            <section className="flex flex-col items-center">
                <img className="w-44 " src="/src/assets/logoBot.png" />
                <h1 className="font-signikaNegative text-5xl m-3 ">Regístrate</h1>

                <form className="flex flex-col items-center bg-verdeClaro h-full w-72 lg:w-80 rounded-2xl border-2 border-solid border-grisClaro p-4 mb-14 shadow-2xl" onSubmit={handleSubmit}>
                    <div className="w-72 lg:w-80 rounded-t-2xl h-6 bg-verdeManzana -m-5 mb-1 border-t-2 border-grisClaro border-l-2 border-r-2"></div>

                    <label className={estiloLabel}>Correo Institucional</label>
                    <input className={estiloInput} type="email" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value.trim())} name="correoElectronico"></input>
                    <label className={estiloLabel}>Nombre de Usuario</label>
                    <input className={estiloInput} type="text" value={username} onChange={(e) => setUsername(e.target.value.trim())} name="username"></input>
                    <label className={estiloLabel}>Contraseña</label>
                    <input className={estiloInput} type="password" value={password} onChange={(e) => setPassword(e.target.value.trim())} name="contrasena"></input>
                    <label className={estiloLabel}>Confirma tu contraseña </label>
                    <input className={estiloInput} type="password" value={confirmarPassword} onChange={(e) => setConfirmacionPassword(e.target.value.trim())} name="contrasenaConfirmacion"></input>
                    <label className={estiloLabel} htmlFor="file">Foto de perfil(Opcional) </label>
                    <input className="w-56 text-lg font-Urbanist font-bold m-3 cursor-pointer " type="file" id="file" onChange={(e) => {const selectedFile = e.target.files[0]; console.log(selectedFile); setFile(selectedFile)}}></input>
                    <button className="bg-verdeOscuroFuerte border-2  rounded-2xl font-Urbanist m-5 text-white text-xl p-3 w-56 font-bold ">Registrar</button>
                </form>
            </section>
        </div>
    );
}

export default Registro;
