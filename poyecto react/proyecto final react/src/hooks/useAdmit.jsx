import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";//importamos AuthContext desde el archivo AuthContext

export const UseAuth = () => {//creamos la funcion useAuth
    const context = useContext(AuthContext);//retornamos el contexto de AuthContext

if(!context) {
    throw new Error ('useAuth debe ser utilizado dentro de un AuthProvider')
}

return context;
};