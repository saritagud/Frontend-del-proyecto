import { FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate();
    const estiloLabel = "font-Urbanist text-xl text-left w-full mt-2 font-bold sm:text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl ur:text-5xl";
    const estiloInput = "border-2 border-verdeOscuroFuerte h-12 text-left w-full rounded-2xl p-3 font-Urbanist font-xl font-bold sm:h-[60px] md:h-[70px] md:text-3xl md:mt-3 xl:h-14 2xl:h-[70px] ur:h-20";
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const regexLength = 5;
        if (password.length < regexLength) {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Ingrese datos válidos',
                showConfirmButton: false,
                timer: 4000,
            });

            const regexPassword =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
            if (!password || !regexPassword.test(password)) {
                // alert("La contraseña debe contener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número.");
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'La contraseña debe contener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número',
                    showConfirmButton: false,
                    timer: 4000,
                });
                return;
            }
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!correoElectronico || !regexEmail.test(correoElectronico)) {
                // alert("Por favor ingresa un correo electrónico válido.");
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Por favor ingresa un correo electronico válido',
                    showConfirmButton: false,
                    timer: 4000,
                });
                return;
            }
        } else {
            const datosUsuario = {
                correo: correoElectronico,
                password: password,
            };
            console.log(datosUsuario);
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosUsuario),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.error == false) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: '¡Bienvenido!',
                            showConfirmButton: false,
                            timer: 4000,
                        });
                        if (data.token) {
                            localStorage.setItem('token', data.token); // aqui almaceno el token en local storage
                            navigate('/chat');
                        }
                    } else {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: 'El usuario no está registrado o la contraseña está errada',
                            showConfirmButton: false,
                            timer: 4000,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'error de servidor',
                        showConfirmButton: false,
                        timer: 4000,
                    });
                });
                fetch("http://localhost:3000/getImage", {
                    method: "POST",
                    body: JSON.stringify(datosUsuario),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data.image.url)
                    localStorage.setItem("image_url", data.image.url);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
        }
    };

    return (
        <div className="bg-bgColor">
            <i onClick={() => navigate('/')}>
                {' '}
                <FaArrowLeft className="cursor-pointer text-3xl text-contrastPrimaryColor ml-7 mt-7 md:text-6xl" />{' '}
            </i>

            <section className="flex flex-col items-center">
            <img className="w-44 md:w-52 ur:w-60" src="/src/assets/logoBot.png" />
                <h1 className="font-signikaNegative text-5xl m-5 md:text-6xl lg:text-7xl lg:mb-14 ur:text-8xl">
                    Inicia Sesión{' '}
                </h1>

                <form
                    className="flex flex-col items-center justify-center bg-contrastSecundaryColor h-full w-72 rounded-2xl border-2 border-solid border-grisClaro p-4 mb-14 shadow-2xl sm:h-[50vh] sm:w-[70%] md:w-[70%] md:h-[50vh] lg:w-[60%] lg:h-[55vh] xl:w-[40%] xl:h-[50vh] 2xl:h-[60vh] ur:h-[70vh] ur:w-[35%] border-t-[30px] border-t-secundaryColor"
                    onSubmit={handleSubmit}
                >
                    <label className={estiloLabel}>Correo Electrónico </label>
                    <input
                        className={estiloInput}
                        type="email"
                        value={correoElectronico}
                        onChange={(e) =>
                            setCorreoElectronico(e.target.value.trim())
                        }
                        name="correoElectronico"
                    ></input>
                    <label className={estiloLabel}>Contraseña</label>
                    <input
                        className={estiloInput}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
                        name="contrasena"
                    ></input>
                    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-primaryColor border-2  rounded-2xl font-Urbanist mt-4 text-white text-xl p-3 w-52 font-bold sm:text-3xl sm:w-60 sm:mt-10 md:text-4xl md:h-20 md:w-60 lg:mt-14 lg:w-80 lg:text-4xl xl:text-3xl xl:w-72 2xl:text-4xl 2xl:w-80 ur:text-5xl ur:w-96 ur:h-24 ur:mt-20">
                        Iniciar Sesión
                    </button>

                    <p className="font-Urbanist text-center md:text-3xl md:mt-7 lg:text-4xl xl:text-3xl ur:text-[40px] text-textColor sm:text-2xl sm:mt-6 sm:mb-6 2xl:text-4xl 2xl:mt-10 2xl:mb-10 ur:mt-14">
                        ¿No tienes una cuenta?{' '}
                        <a
                            className="font-bold hover:text-white"
                            href="./registro"
                        >
                            ¡Regístrate!
                        </a>{' '}
                    </p>
                </form>
            </section>
        </div>
    );
}

export default Login;
