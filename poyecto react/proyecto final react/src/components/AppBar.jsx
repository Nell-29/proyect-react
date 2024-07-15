import {useNavigate  } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";//importamos useAuth desde el archivo useAuth

export const AnotherAppBar = ({pages}) => { //creamos la funcion AppBar y le pasamos pages como parametro
    const { user, logout } = useAuth();//creamos la constante user y logout y le asignamos el valor de useAuth
    const navigate = useNavigate();//creamos la constante navigate y le asignamos el valor de useNavigate
    

    const handleNavigate = (patch) => {//creamos la funcion handleNavigate y le pasamos patch como parametro
        if (patch) {//si patch es verdadero
            navigate(patch);// devuelveme a la pagina de patch
        }
    };

    return (
//retornamos un nav con un span y un array de objetos
        <nav>
          <span>bienvenido escoje tus opciones</span>{" "}

          {pages?.map((page) => (
            <button key={page.label} onClick={() => handleNavigate(page.path)}>
            {/*creamos un boton con la propiedad key y le asignamos el valor de page.name
             y la propiedad onClick que llama a la funcion handleNavigate con page.path como parametro*/}
                {page.label}{" "} 
{/*creamos un boton con la propiedad key y le asignamos el valor de page.name */}
            </button>
        ))}
        {/*creamos un boton con la propiedad key y le asignamos el valor de page.name*/}
        {!!user && (
            <button onClick={logout}>
            {/*creamos un boton con la propiedad key y le asignamos el valor de logout */}
               Salir
            </button>
        )}
        </nav>
        );
     };