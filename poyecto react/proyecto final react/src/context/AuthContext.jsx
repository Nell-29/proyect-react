import { createContext, useContext, useMemo,useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";//importamos useLocalStorage desde el archivo useLocalStorage
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
    //creamos la funcion AuthProvider y le pasamos children como parametro
    const [user, setUser] = useLocalStorage("user", null); //creamos la constante user y setUser y le asignamos el valor de useLocalStorage
    const [error, setError] = useState(null);//creamos la constante error y setError y le asignamos el valor de useLocalStorage
    
    const navigate = useNavigate();//creamos la constante navigate y le asignamos el valor de useNavigate

    const login = async (data) => {//creamos la funcion login y le pasamos data como parametro
        
        try {
            const response = await axios.get('http://localhost:8083/api/v1/class/getAll/', user);//creamos una constante que va a ser igual a la respuesta de axios
           console.log("usuario logeado con exito", response.data);
            setUser(data);
            navigate("/dashboard/profile", {replace:true});
        } catch (error) {
            console.error("error al logearse", 
                error.response? error.response.data:error.message);
                setError("usuario o contraseña incorrectos",error.message);//seteamos el valor de setError con un mensaje de error        
        
            }
    };

    const register = async (data) => {//creamos la funcion register y le pasamos data como parametro
        try {
        const registerUsers = JSON.parse(localStorage.getItem("user"));//creamos una constante que va a ser igual a la respuesta de localStorage
        registerUsers.push(data);//agregamos el valor de data a la constante resgiterUser    
        localStorage.setItem("user", JSON.stringify(registerUsers));//guardamos el valor de resgiterUser en localStorage
        setUser(data);//seteamos el valor de setUser con data
        navigate("/dashboard/profile", {replace:true});//navegamos a la pagina de login
        } catch (error) {

            console.error("error al registrarse",error.message);
            setError("error al registrarse",error.message);//seteamos el valor de setError con un mensaje de error
        }
    }
    const logout = () => {//creamos la funcion logout
        setUser(null);//seteamos el valor de setUser con null
        navigate("/", {replace:true});//navegamos a la pagina de login
    };

    const value = useMemo(()=> (//creamos la constante value y le asignamos el valor de useMemo
         {//retornamos un objeto con las siguientes propiedades
            user,
            login,
            logout,
            register,
            error,
        }),[user,error]); //pasamos user como dependencia para que se ejecute cada vez que cambie

    //retornamos el componente AuthContext.Provider con el valor de value y children como hijos.
        return <AuthContext.Provider value={value}> 
              {children}
        </AuthContext.Provider>;
};




    