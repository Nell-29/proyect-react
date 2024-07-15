import { Navigate, useOutlet } from "react-router-dom";
import { AnotherAppBar } from "./AppBar";//importamos AppBar desde el archivo AppBar
import { useAuth } from "../hooks/useAuth";//importamos useAuth desde el archivo useAuth
import React from "react";

 export const HomeLayout = () => {//creamos la funcion homeLayout
    const { user } = useAuth();//creamos la constante user y le asignamos el valor de useAuth
    const outlet = useOutlet();//creamos la constante outlet y le asignamos el valor de useOutlet

    if (user) {//si hay usuario
        return <Navigate to='/dashboard/profile' replace />;//retornamos a la pagina de perfil
    }

    return ( // encapsulamos el contenido en un div
        <div>
            <AnotherAppBar //llamamos a la funcion AppBar
            pages={[//creamos un array de objetos
             { label: "Home", path: "/" },//creamos un objeto con dos propiedades
             { label: "Login", path: "/login" },//creamos un objeto con dos propiedades
             { path: "/register", label: "Register" },
             ]} 
            />
            {outlet}
        </div>
    );// llamamos a la constante outlet 
};

