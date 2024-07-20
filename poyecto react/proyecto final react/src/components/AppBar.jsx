import {useNavigate  } from "react-router-dom";
import { UseAuth } from "../hooks/useAdmit";//importamos useAuth desde el archivo useAuth

export const AnotherAppBar = ({pages}) => { //creamos la funcion AppBar y le pasamos pages como parametro
    const { user, logout } = UseAuth();//creamos la constante user y logout y le asignamos el valor de useAuth
    const navigate = useNavigate();//creamos la constante navigate y le asignamos el valor de useNavigate
    

    const handleNavigate = (path) => {//creamos la funcion handleNavigate y le pasamos patch como parametro
        if (path) {//si patch es verdadero
            navigate(path);// devuelveme a la pagina de patch
        }
    };

    return (
//retornamos un nav con un span y un array de objetos
        <nav>
          <span>bienvenido escoje tus opciones</span>{" "}

          {pages?.map((page) => (
            <button key={page.path} onClick={() => handleNavigate(page.path)}>
            {/*creamos un boton con la propiedad key y le asignamos el valor de page.name
             y la propiedad onClick que llama a la funcion handleNavigate con page.path como parametro*/}
                {page.label}{ " "}
{/*creamos un boton con la propiedad key y le asignamos el valor de page.name */}
            </button>
        ))}
        {/*creamos un boton con la propiedad key y le asignamos el valor de page.name*/}
        {!!user && (
            <button key={"logout"} onClick={logout}>
            {/*creamos un boton con la propiedad key y le asignamos el valor de logout */}
               Salir
            </button>
        )}
            </nav>
        );
     };