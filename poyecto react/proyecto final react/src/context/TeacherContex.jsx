import {createContext, useEffect, useState, useContext} from "react";
import axios from "axios";// import axios from "axios";para hacer las peticiones a la api y poder obtener los datos de los profesores
import React from "react";

export const TeacherContext = createContext();// creamos el contexto para poder usarlo en cualquier parte de la aplicacion

export const TeacherProvider = ({children}) => {// creamos el provider para poder usar el contexto en cualquier parte de la aplicacion
    const [teachers, setTeachers] = useState([]);// creamos el estado para guardar los datos de los profesores
  

    useEffect(() => {
        const getTeacher = async () => {
            try{
                // usamos useEffect para hacer la peticion a la api y obtener los datos de los profesores
                const res = await axios.get('http://localhost:8081/api/v1/teacher/getall')// hacemos la peticion a la api
                setTeachers(res.data);// guardamos los datos de los profesores
            } catch (err) {// si la peticion falla
                console.error(err);// mostramos el error en la consola
            }
            };
            getTeacher();// llamamos a la funcion para obtener los datos de los profesores
    }, []);
// creamos el provider para poder usar el contexto en cualquier parte de la aplicacion
    return (
        <TeacherContext.Provider value={{teachers, loading}}>
            {children}
        </TeacherContext.Provider>
    );
}
