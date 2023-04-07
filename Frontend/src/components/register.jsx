
function Registro(){
    const estiloLabel = ("font-Urbanist text-xl text-left w-full ")
    const estiloInput =("border-2 border-grisClaro h-11 text-left w-full rounded-2xl")
    return(
        <div className="flex flex-col  items-center">
            <h1 className="font-signikaNegative text-5xl mt-20">Registrate</h1>

            <form className="flex flex-col items-center bg-verdeClaro h-full w-80 rounded-2xl border-2 border-solid border-grisClaro p-4 m-5">
                <label className={estiloLabel}>Nombre y Apellido</label>
                <input className={estiloInput} type="text"></input>
                <label className={estiloLabel}>Correo Electrónico </label>
                <input className={estiloInput} type="email"></input>
                <label className={estiloLabel}>Nombre de Usuario</label>
                <input className={estiloInput} type="text"></input>
                <label className={estiloLabel}>Contraseña</label>
                <input className={estiloInput} type="password"></input>
                <label className={estiloLabel}>Confirma tu contraseña </label>
                <input className={estiloInput} type="password"></input>
                <button className="bg-white border-2 border-grisClaro rounded-2xl font-Urbanist my-7  text-xl p-3 w-40 font-bold">Registrarme</button>
            </form>
        </div>
    );
}

export default Registro;