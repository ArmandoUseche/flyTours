function Bienvenido({user, setUser}) {
    const cerrarSesion = () => {
        setUser([]);
    }
    return (
        <>
            <h1>Bienvenido {user}</h1>
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
        </>
    )
}

export default Bienvenido;