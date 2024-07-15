import { createContext, useMemo, useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";//importamos useLocalStorage desde el archivo useLocalStorage
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const AuthContext = createContext();//creamos el contexto AuthContext

export const AuthProvider = ({ children }) => {//creamos la funcion AuthProvider y le pasamos children como parametro
    const [user, setUser] = useLocalStorage("user", null); //creamos la constante user y setUser y le asignamos el valor de useLocalStorage
    const [error, setError] = useState(null);//creamos la constante error y setError y le asignamos el valor de useState
    
    
    const navigate = useNavigate();//creamos la constante navigate y le asignamos el valor de useNavigate

    const login = async (data) => {//creamos la funcion login y le pasamos data como parametro
        try {
            const response = await axios.post("http://localhost:3001/login",data)
            console.log("ya se encuentra logeado",response.data);
            setUser(data);//seteamos el valor de setUser con data
            navigate("/dashboard/profile", {replace:true});//navegamos a la pagina de perfil
            
        } catch (error) {
            console.error("error al logearse",
            error.response ? error.response.data : error.message);

            
            setError("Usuario o contraseña incorrectos",error.message);//seteamos el valor de setError con el mensaje de error
        }
        
    };

    const logout = () => {//creamos la funcion logout
        setUser(null);//seteamos el valor de setUser con null
        navigate("/", {replace:true});//navegamos a la pagina de login
    };

    const value = useMemo(
        ()=> (//creamos la constante value y le asignamos el valor de useMemo
         {//retornamos un objeto con las siguientes propiedades
            user,
            login,
            logout,
        }),
    [user]//pasamos user como dependencia para que se ejecute cada vez que cambie
);
    //retornamos el componente AuthContext.Provider con el valor de value y children como hijos.
        return <AuthContext.Provider value={value}> 
              {children}
        </AuthContext.Provider>;
};

    