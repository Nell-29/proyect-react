import React, { useState, useEffect } from 'react';//importamos useState para poder manejar el estado del formulario
import { Link } from 'react-router-dom';//importamos Link para poder redirigir a la pagina de registro
import { useAuth } from '../hooks/useAuth';//importamos el hook useAuth para poder logearnos

 export const LoginPag = () => {//creamos la funcion LoginPage
    const { login, error } = useAuth();//creamos una constante que va a ser igual a useAuth
    const [userLogin, setUserLogin] = useState({
        email:"",
        password: "",
    });//creamos una constante que va a ser igual a useState

    const [checkErrors, setCheckErrors] = useState ({
        email:"",
        password:"",
    });

    const handleInput = (ev) => {//creamos la funcion handleLogin
        const {name, value} = ev.target;//creamos una constante que va a ser igual a ev.target que va a ser el nombre y el valor del evento
        setUserLogin({...userLogin,[name]: value });//seteamos el estado del formulario con el valor del evento

        const handleSubmit = async (event) => {//creamos la funcion handleSubmit
            event.preventDefault();//prevenimos el comportamiento por defecto del formulario que es recargar la pagina
       const anotherError = { email: "", password:""};

       if (!userLogin.email) {
        anotherError.email = "por favor añade tu direccion de correo electronico"
        
       }
       if(!userLogin.password) {
        anotherError.password = "por favor añade tu clave"
        
       }
       setCheckErrors(anotherError);

       if (!anotherError.email && !anotherError.password) {
        await login(userLogin);
        
       }
       
        };

        useEffect(() => {
            if (error) {
                setCheckErrors(prevErrors => ({
                    ...prevErrors,
                    password: "usuario u contraseña incorrecta.. intentelo de nuevo"
                }));
                
            }
        },[error]);

        return (//retornamos un formulario con un input de tipo email y otro de tipo password y un boton de tipo submit
            <div>
                <h1> registrarse </h1>{/*titulo de la pagina*/}
                <form onSubmit={handleSubmit}>{/*formulario con la funcion handleSubmit y noValidate para que no valide el formulario por defecto*/}
                    <input
                        type='email'
                        name='email'
                        id='email'
                        required
                        value={userLogin.name}
                        onChange={handleInput}
                    />
                    {checkErrors.email && <p>{checkErrors.email}</p>}
                    <label htmlFor='password'>{/*label para el input de tipo password*/}
                    <input
                        type='password'
                        name='password'
                        id='password'
                        required
                        value={userLogin.password}
                        onChange={handleInput}
                    />
                    </label>
                    {checkErrors.password && <p>{checkErrors.password}</p>}
                    <button type="submit">logeate</button>
                </form>
                <Link to='/register'>{'No tienes u a cuenta , creala ya ..'}</Link>
            </div>
        );
    };
};

