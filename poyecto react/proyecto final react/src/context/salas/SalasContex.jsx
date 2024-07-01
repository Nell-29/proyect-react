import React,{createContext,useContext,useReducer} from "react";

const SalasContext = createContext();//creamos el contexto de las salas.    

const salasReducer = (state, action) => {//generamos la función reducer para manejar el estado de las salas.
    switch (action.type) {
        case "ADD_SALA"://caso para añadir una sala.
            return { ...state, sala: action.payload };//retornamos el estado de la sala y la sala añadida.
        case "REMOVE_SALA"://caso para eliminar una sala.
            return state.filter((_, index) => index !== action.payload);//retornamos el estado de la sala filtrando la sala eliminada.
        default:
            return state;//retornamos el estado de la sala por defecto.
    }
};

export const SalasProvider = ({ children }) => {
    const [state, dispatch] = useReducer(salasReducer, []);//usamos useReducer para manejar el estado de las salas.
    return <SalasContext.Provider value={{ state, dispatch }}>
             {children}
          </SalasContext.Provider>;//retornamos el proveedor de las salas.
};