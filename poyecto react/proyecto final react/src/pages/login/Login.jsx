import {useState}from "react";//importamos useState de react para poder usar el estado.portamos useAuth de AuthContext para poder usar la autenticación.
import { Link} from "react-router-dom";//importamos Link de react-router-dom para poder navegar entre las rutas.
import { AuthContext } from "../../context/Index.JSX";//importamos useAuth de AuthContext para poder usar la autenticación.

export const Login = () => {//creamos la función Login, para que el usuario pueda iniciar sesión.
    const { login } = AuthContext();
    const[userLogin, setUserLogin] = useState("");

    const handleInp = (e) => {//creamos la función handleInp, para que el usuario pueda ingresar su correo y contraseña.
        const { name, value} = e.target;
        setUserLogin({...userLogin, [name]: value, });
        };
           
    const handSubt = (event) => {//creamos la función handSubt, para que el usuario pueda enviar su correo y contraseña.
                event.preventDefault();
                login(userLogin);
            };

    return ( //retornamos un formulario para que el usuario pueda ingresar su correo y contraseña.
    <>
        <h1>Aqui se registra en la app</h1>
        <form onSubmit={handSubt} noValidate>
          <label htmlFor='email'>
            <input
              type='email'
              name='email'
              id='email'
              required
              value={userLogin.name}
              onChange={handleInp}
            />
          </label>
          <label htmlFor='password'>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={userLogin.name}
              onChange={handleInp}
            />
          </label>
          <button type='submit'>Entra!</button>
        </form>
        <Link to='/register'>{"Aun no tienes cuenta, abrela ya"}</Link>
      </>
    );
    };