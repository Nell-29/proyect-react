import { UseContext } from "react";//importamos UseContext de react para poder usar el contexto.
import { AuthContext } from "../context/index";//importamos AuthContext de authContext para poder usar el contexto de autenticación.

// generamos un hook personalizado para acceder al contexto de autenticación.

export const UseAuthook = () => {
    // esto nos devuelve el contexto de autenticación. y ahorramos escribir UseContext(AuthContext) en cada componente.
return UseContext(AuthContext)};