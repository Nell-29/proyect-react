import { Navigate, useOutlet } from "react-router-dom";
import { AnotherAppBar } from "./AppBar";//importamos AppBar desde el archivo AppBar
import { UseAuth } from "../hooks/useAdmit";//importamos useAuth desde el archivo useAuth


  const HomeLayout = () => {//creamos la funcion homeLayout
    const { user } = UseAuth();//creamos la constante user y le asignamos el valor de useAuth
    const outlet = useOutlet();//creamos la constante outlet y le asignamos el valor de useOutlet
     console.log("outlet", outlet);
    if (user) {//si hay usuario
        return <Navigate to='/dashboard/profile' replace />;//retornamos a la pagina de perfil
    }

    return ( // encapsulamos el contenido en un div
        <div>
            <AnotherAppBar //llamamos a la funcion AppBar
            pages={[//creamos un array de objetos
             { label: "Home", path: "/" },//creamos un objeto con dos propiedades
             { label: "Login", path: "/login"},//creamos un objeto con dos propiedades
             { label: "Register", path: "/register"},
           
            ]}
            />
            {outlet}
        </div>
    );// llamamos a la constante outlet 
};

export default HomeLayout;//exportamos HomeLayout
