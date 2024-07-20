import { Navigate, useOutlet } from "react-router-dom";//importamos Navigate y useOutlet
import { UseAuth } from"../hooks/useAdmit";
import { AnotherAppBar} from "./AppBar";//importamos AppBar desde el archivo AppBar

export const PrivetLayout = () => {//creamos la funcion ProtectedLayout
    const { user } = UseAuth();//creamos la constante user y le asignamos el valor de useAuth
    const outlet = useOutlet();//creamos la constante outlet y le asignamos el valor de useOutlet
     
    if (!user) {//si no hay usuario 
        return <Navigate to='/' />;//retornamos a la pagina principal
    }

    return (//encapsulamos el contenido en un div
        <div>
            <AnotherAppBar //llamamos a la funcion AppBar
            pages={[ //creamos un array de objetos
          
             { label: "Profile", path: "profile" }, //creamos un objeto con dos propiedades
             { label: "Class", path: "class" }, //creamos un objeto con dos propiedades

             ]} 
             />
            {outlet} 
            {/*llamamos a la constante outlet*/}
        </div>
    );
};

