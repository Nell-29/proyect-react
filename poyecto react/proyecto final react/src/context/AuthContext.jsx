import { CreateContext, UseMemo } from "react";// importamos createContext y useMemo de react.para crear el contexto de autenticación.
import { UseNavigate } from "react-router-dom";// importamos useNavigate de react-router-dom. para poder navegar entre rutas.
import { UserLocalStorage } from "../hooks/index";// importamos UserLocalStorage de UserLocalSt para poder guardar el usuario en el local storage.


export const AuthContext = CreateContext();//creamos el contexto de autenticación.

//creamos el proveedor de autenticación.
export const AuthProvider = ({ children }) => {
    //uselocalstorage para guardar el usuario en el local storage.para gestionar el estado del usuario.
    const [user, setUser] = UserLocalStorage("user", null);
    //useNavigate HOOK personalizado para navegar entre rutas.
    const navigate = UseNavigate();//obtenemos la función navigate de UseNavigate.

    //funciones para loguear y desloguear al usuario.
    const login = async (data) => {//función para loguear al usuario.
        setUser(data);//guardamos el usuario en el estado.
        navigate("/", {replace: true});//navegamos en el perfil del usuario, remplazando la ruta actual.
    };

    const logout = () => {//función para desloguear al usuario.
    
          setUser(null);//borramos el usuario del estado.
    
          navigate("/", {replace: true});//navegamos en la página de inicio, remplazando la ruta actual.
        };

    const value = UseMemo(//valor del contexto de autenticación.
         () => ({//retornamos el usuario, la función de login y la función de logout.
        user,
        login,
        logout,
    }),
    [user]//dependencia del usuario.
);
return <AuthContext.Provider value={value}>
      {children}
</AuthContext.Provider>;//retornamos el proveedor de autenticación.
};
