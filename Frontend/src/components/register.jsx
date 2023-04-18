import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Registro() {
    const navigate = useNavigate();
    const estiloLabel = "font-Urbanist text-lg text-left w-full mt-5 font-bold md:text-4xl md:mt-8 xl:text-3xl ur:text-4xl";
    const estiloInput = "border-2 border-verdeOscuroFuerte h-12 text-left w-full rounded-2xl p-3 font-Urbanist font-xl font-bold md:h-[70px] md:text-3xl md:mt-3 xl:h-14 ur:h-20";
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmacionPassword] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const regexLength = 5;
        if (
            username.length < regexLength ||
            password.length < regexLength ||
            username.length < regexLength ||
            confirmarPassword.length < regexLength ||
            correoElectronico.length < regexLength ||
            password !== confirmarPassword
        ) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Ingrese datos validos",
                showConfirmButton: false,
                timer: 4000,
            })
                .then(() => {})
                .then(() => {
                    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
                    if (!password || !regexPassword.test(password)) {
                        Swal.fire({
                            position: "top-center",
                            icon: "error",
                            title: "La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.",
                            showConfirmButton: false,
                            timer: 4000,
                        });
                        return;
                    }
                })
                .then(() => {
                    const regexUsername = /^[a-zA-Z0-6]+$/;
                    if (!username || !regexUsername.test(username)) {
                        Swal.fire({
                            position: "top-center",
                            icon: "error",
                            title: "Por favor ingresa un nombre de usuario válido (sólo letras y números).",
                            showConfirmButton: false,
                            timer: 4000,
                        });
                        return;
                    }
                });
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
                    console.log(data);
                    localStorage.setItem("token", data.token); // aqui almaceno el token en local storage
                    navigate("/chat");
                    if(data.error == false){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: '¡Bienvenido!',
                            showConfirmButton: false,
                            timer: 4000,
                        });
                    } 
                })
                .catch((err) => {
                    console.log(err);
                });

            const formData = new FormData();
            formData.append("username", username);
            formData.append("image", file);

            fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem("image_url", data.image.url);
                })
                .catch((error) => console.error("Error", error));
        }
    };
    return (
        <div>
            <i onClick={() => navigate('/')}>
                {" "}
                <FaArrowLeft className="cursor-pointer text-3xl text-contrastPrimaryColor ml-7 mt-7 md:text-6xl" />{" "}
            </i>
            <section className="flex flex-col items-center">
                <img className="w-44 md:w-52" src="/src/assets/logoBot.png" />
                <h1 className="font-signikaNegative text-5xl m-3 md:text-6xl">Regístrate</h1>

                <form className="flex flex-col items-center bg-contrastSecundaryColor h-full w-72 rounded-2xl border-2 border-solid border-grisClaro p-4 mb-14 shadow-2xl md:w-[70%] lg:w-[70%] xl:w-[50%] xl:h-auto ur:w-[40%] border-t-[30px] border-t-secundaryColor" onSubmit={handleSubmit}>

                    <label className={estiloLabel}>Correo Institucional</label>
                    <input className={estiloInput} type="email" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value.trim())} name="correoElectronico"></input>
                    <label className={estiloLabel}>Nombre de Usuario</label>
                    <input className={estiloInput} type="text" value={username} onChange={(e) => setUsername(e.target.value.trim())} name="username"></input>
                    <label className={estiloLabel}>Contraseña</label>
                    <input className={estiloInput} type="password" value={password} onChange={(e) => setPassword(e.target.value.trim())} name="contrasena"></input>
                    <label className={estiloLabel}>Confirma tu contraseña </label>
                    <input className={estiloInput} type="password" value={confirmarPassword} onChange={(e) => setConfirmacionPassword(e.target.value.trim())} name="contrasenaConfirmacion"></input>
                    <label className={estiloLabel} htmlFor="file">Foto de perfil(Opcional) </label>
                    <input className="w-full text-lg font-Urbanist font-bold m-3 cursor-pointer md:text-3xl" type="file" id="file" onChange={(e) => {const selectedFile = e.target.files[0]; console.log(selectedFile); setFile(selectedFile)}}></input>
                    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-primaryColor border-2  rounded-2xl font-Urbanist m-5 text-white text-xl p-3 w-56 font-bold md:text-4xl md:h-20 md:w-60">Registrar</button>

                    <p className="font-Urbanist md:text-4xl md:mt-3 md:mb-7 text-center">
                        ¿Tienes una cuenta?{' '}
                        <a
                            className="font-bold hover:text-white"
                            href="/login"
                        >
                            ¡Inicia de Sesión!
                        </a>{' '}
                    </p>
                </form>
            </section>
        </div>
    );
}

export default Registro;
