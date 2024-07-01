/* eslint-disable react/prop-types */ // Desactivamos la regla de ESLint para la validación de tipos de props en este archivo.

import { UseNavigate } from "react-router-dom";//importamos UseNavigate de react-router-dom para poder navegar entre las rutas.
import { useAuth } from "../contextos/AuthContext";
import {  memo } from "react";//importamos useMemo de react para poder usar la función useMemo.

// definimos el componente AppBar, que recibe la llamada por la prop pages.

export const AppBar =  ({ pages }) => {
  const navigate = UseNavigate();//obtenemos la función navigate de UseNavigate.
  const { user, logout } = useAuth();//Usamos el hook useAuth para obtener el usuario y la función logout.

  // Definimos la función handleNavigate, que recibe un path y navega a la ruta correspondiente.
  const handleNavigate = memo( (path) => {
    // Si el path no es nulo, navegamos a la ruta correspondiente.
    if (path) {
        navigate(path); 
    }
    });

    return (

        // Creamos un elemento nav que contendrá los botones de navegación.
        <nav>
        <span>React Router Auth</span>{" "}
        {/* Texto que se muestra en la barra de navegación */}
        {/* Iteramos sobre el array pages para crear un botón por cada página */}
        {pages?.map((page) => (
          <button key={page.label} onClick={() => handleNavigate(page.path)}>
            {page.label}{" "}
            {/* Etiqueta del botón, que corresponde a la label de la página */}
          </button>
        ))}
        {/* Si el usuario está autenticado, mostramos el botón de iniciar seccion*/}
        {!!user && (
          <button key={"logout"} onClick={logout}>
            Iniciar sesión
          </button>
        )}
      </nav>
     );
    };