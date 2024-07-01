import {useContext  } from "react";
import { ClassContext } from "../context/ClassContext";

export const useClass = () => {//creamos el hook para usar el contexto de las clases.
    return useContext(ClassContext);//retornamos el contexto de las clases.
};