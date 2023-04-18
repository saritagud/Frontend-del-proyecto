import { FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate();
    const estiloLabel = "font-Urbanist text-lg text-left w-full mt-5 font-bold md:text-4xl md:mt-8 xl:text-3xl";
    const estiloInput = "border-2 border-verdeOscuroFuerte h-12 text-left w-full rounded-2xl p-3 font-Urbanist font-xl font-bold md:h-[70px] md:text-3xl md:mt-3 xl:h-14";
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
                            navigate('/personalizacion');
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

                setTimeout(() => {
                    const token = localStorage.getItem("token"); // obtener el token del localStorage
                    if(token) {
                    fetch("http://localhost:3000/getImageLogin", {
                        method: "POST",
                        body: JSON.stringify(datosUsuario),
                        headers: new Headers({
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data.body)
                            localStorage.setItem("image_url", data.body);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    } else 
                    console.log('Token no creado')
                }, 1000);
        }
    };

    return (
        <div className="bg-bgColor">
            <i onClick={() => navigate('/')}>
                {' '}
                <FaArrowLeft className="cursor-pointer text-3xl text-verdeOscuro ml-7 mt-7 md:text-6xl" />{' '}
            </i>

            <section className="flex flex-col items-center">
            <img className="w-44 md:w-52" src="/src/assets/logoBot.png" />
                <h1 className="font-signikaNegative text-5xl m-5 md:text-6xl lg:text-7xl lg:mb-14">
                    Inicia Sesión{' '}
                </h1>

                <form
                    className="flex flex-col items-center justify-center bg-verdeClaro h-full w-72 rounded-2xl border-2 border-solid border-grisClaro p-4 mb-14 shadow-2xl md:w-[70%] md:h-[650px] lg:w-[70%] lg:h-[700px] xl:w-[40%] xl:h-[90vh]"
                    onSubmit={handleSubmit}
                >
                    <div className="w-72 rounded-t-2xl h-6 bg-secundaryColor -m-5 mb-1 border-t-2 border-neutralColor border-l-2 border-r-2 md:w-[540px] md:h-11 md:-mt-[100px] lg:w-[715px] lg:-mt-[150px] xl:-mt-[70px] xl:w-[550px]"></div>
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
                    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-compPrimaryColor border-2  rounded-2xl font-Urbanist mt-7 text-white text-xl p-3 w-52 font-bold md:text-4xl md:h-20 md:w-60 lg:mt-20 lg:w-96 lg:text-5xl xl:text-3xl xl:w-72">
                        Iniciar Sesión
                    </button>

                    <p className="font-Urbanist md:text-3xl md:mt-7 lg:text-4xl xl:text-3xl">
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
