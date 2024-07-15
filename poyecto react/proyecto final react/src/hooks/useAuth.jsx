import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";//importamos AuthContext desde el archivo AuthContext

export const useAuth = () => {//creamos la funcion useAuth
    return useContext(AuthContext);//retornamos el contexto de AuthContext
};