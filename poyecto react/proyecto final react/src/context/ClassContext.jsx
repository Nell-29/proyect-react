import axios from "axios";
import React,{createContext, useReducer, useEffect } from "react";

export const ClassContext = createContext();

const classReducer = (state, action) => {
    switch (action.type) {
        case "GET_CLASSES":
            console.log("action.payload", action.payload);
            return action.payload;
        case "ADD_CLASS":
            return [...state, action.payload];
        case "UPDATE_CLASS":{
            const updatedClass = action.payload;
            return state. map((classItem) => {
                if (classItem._id === updatedClass._id) {
                    return updatedClass;
                }
                return classItem;
        
            });
        }
        case "DELETE_CLASS":
            return state.filter((classItem) => classItem._id !== action.payload);   
        
        default:
            return state ;

    }
    };

    export const ClassProvider = ({children}) => {
        const [classes, dispatch] = useReducer(classReducer, []);

        useEffect(() => {
            const getClasses = async () => {
                try {
                    const response = await axios.get('http://localhost:8083/api/v1/class/getAll/');
                    dispatch({type: "GET_CLASSES", payload: response.data});
                } catch (error) {
                    console.error("error al obtener las clases", error);
                }
            };
            getClasses();
        }, []);

        const addClass = async (classItem) => {
            try {
                const response = await axios.post('http://localhost:8083/api/v1/class/create', classItem);
                dispatch({type: "ADD_CLASS", payload: response.data});
            } catch (error) {
                console.error("error al agregar la clase", error);
            }
        };

        const updateClass = async (id,classItem) => {
            try {
                const response = await axios.put(`http://localhost:8083/api/v1/class/getById/${id}`, classItem);
                dispatch({type: "UPDATE_CLASS", payload: response.data});
            } catch (error) {
                console.error("error al actualizar la clase", error);
            }
        };

        const deleteClass = async (id) => {
            try {
                await axios.delete(`http://localhost:8083/api/v1/class/delete/${id}`);
                dispatch({type: "DELETE_CLASS", payload: id});
            } catch (error) {
                console.error("error al eliminar la clase", error);
            }
        };

        return (
            <ClassContext.Provider value={{classes, addClass, updateClass, deleteClass}}>
                {children}
            </ClassContext.Provider>
        );
}