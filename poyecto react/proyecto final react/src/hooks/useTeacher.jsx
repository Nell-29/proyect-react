import {useContext  } from "react";
import {TeacherContext} from "../context/TeacherContext";

//generamos un hook para poder usar el contexto en cualquier parte de la aplicacion
export const useTeacher = () => {//creamos el hook para usar el contexto de los profesores.
    return useContext(TeacherContext);//retornamos el contexto de los profesores.
};