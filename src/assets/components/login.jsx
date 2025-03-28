import { useState } from "react";

const users = [
    {username: "admin" , password: "123"},
    {username: "user" , password: "12345"}
]

function Login({setUser}){
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    // Validar datos
    const validandoDatos = (e) => {
        e.preventDefault()
        // evalua datos
        if (username === "" || password === "") {
            setError(true)
            setErrorMessage("Todos los campos son obligatorios")
            return
        }

        // Buscar datos
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        // si el usuario existe
        if (user) {
            setError(false)
            setUser(username)
        }
        // si el usuario no existe
        else {
            setError(true)
            setErrorMessage("Nombre de usuario o contraseña incorrectos")
        }
        // limpiar datos
        setUsername("")
        setpassword("")
    };
    return (
        <>
            <h1>Iniciar Sesion</h1>
            <form action="" onSubmit={validandoDatos}>
                <input type="text"
                placeholder="Nombre de Usuario" 
                value={username}
                onChange={(x) => setUsername(x.target.value)}
                name="username"
                />
                <input type="password"
                placeholder="Contraseña" 
                value={password}
                onChange={(x) => setpassword(x.target.value)}
                name="password"
                />
                <button type="submit">Iniciar Sesion</button>
            </form>
            {error && <p>{errorMessage}</p>}
        </>
    )
}

export default Login;