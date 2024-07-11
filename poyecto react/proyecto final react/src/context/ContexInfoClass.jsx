import { createContext, useReducer } from "react";//importamos createContext y useReducer de react.

const initialState = { data: [] };//creamos el estado inicial de la información.

export const ContexInfoClass = createContext(initialState);//creamos el contexto de la información.

export const GET_CLASS = "GET_CLASS"; // Constante para obtener las clases.
export const ID_CLASS = "ID_CLASS"; // Constante para eliminar una clase.
export const ADD_CLASS = "ADD_CLASS"; // Constante para añadir una clase.



function reducer(state, action) {//generamos la función reducer para manejar el estado de la información.
console.log("action",action)
    switch (action.type) {//usamos un switch para manejar los casos de las acciones.
        case "GET_CLASS":
            return { ...state, data: action.payload };//retornamos el estado de la información y la información obtenida
        case "ADD_CLASS":
            return { ...state, data:action.payload};//retornamos el estado de la información y la información añadida.
            default:
            return state;//retornamos el estado de la información por defecto.
    }
}

export const ContexInfoProvider = ({ children }) => {//exportamos el proveedor de la información.
    const [state, dispatch] = useReducer(reducer, initialState);//usamos useReducer para manejar el estado de la información.
    return (//retornamos el proveedor de la información.
    <ContexInfo.Provider value={{ state, dispatch }}> 
             {children}
    </ContexInfo.Provider>//retornamos el proveedor de la información.
    );
};
