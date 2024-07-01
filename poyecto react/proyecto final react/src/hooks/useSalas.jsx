import { useContext } from "react";
import { SalasContext } from "../context/SalasContex";

export const UseSalas = () => { //creamos el hook para usar las salas.
    return useContext(SalasContext);//retornamos el contexto de las salas.
};