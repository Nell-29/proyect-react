import react,{ createContext,useContext,useReducer } from "react";// importamos createContext y useContext de react.para crear el contexto de la clase y usarlo.

const ClassContext = createContext();//creamos el contexto de la clase.

// generamos la funcion reducer para manejar el estado de la clase.

const classReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CLASS"://caso para añadir una clase.
      return { ...state, class: action.payload };//retornamos el estado de la clase y la clase añadida.
    case "REMOVE_CLASS"://caso para eliminar una clase.
      return state.filter ((_,index) => index !== action.payload);//retornamos el estado de la clase filtrando la clase eliminada.
    default:
      return state;//retornamos el estado de la clase por defecto.
  }
};

export const ClassProvider = ({ children }) => {
    const [state, dispatch] = useReducer(classReducer, []); //usamos useReducer para manejar el estado de la clase.
    return  <ClassContext.Provider value={{ state, dispatch }}>
               {children}
        </ClassContext.Provider>;//retornamos el proveedor de la clase.
};