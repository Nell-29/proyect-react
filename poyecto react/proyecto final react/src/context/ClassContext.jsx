import axios from "axios";
import React,{createContext, useReducer, useEffect,useContext } from "react";

export const ClassContext = createContext();

const classReducer = (state, action) => {
    switch (action.type) {
        case "GET_CLASSES":
            return action.payload;
        case "ADD_CLASS":
            return [...state, action.payload];
        case "UPDATE_CLASS":
            const updatedClass = action.payload;
            return state.map(classItem => (classItem._id === updatedClass._id ? updatedClass : classItem)); 
        case "DELETE_CLASS":
            return state.filter(classItem => classItem._id !== action.payload);   
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
        const classData = {
            name: 'sushi',
            description: 'comida',
            startTime: 1222,
            endTime: 1433,
            teacher: ['teacherName1', 'teacherName2'], // Nombres que serán convertidos a ObjectId
            user: ['userName1', 'userName2'], // Nombres que serán convertidos a ObjectId
            day: 'JUEVES'
          };
          

        const addClass = async (classData) => {
            try {
                const response = await axios.post('http://localhost:8083/api/v1/class/created', classData);
                dispatch({type: "ADD_CLASS", payload: response.data});
                console.log('Class Data:', req.body);
            } catch (error) {
                if(error.response && error.response.status === 409) {
                console.error('conflicto:estaclase ya existe o no es seguro probarla '); 
            } else { 
    
                  console.error('Error al crear la clase:', error);
            }
        };
    };

        const updateClass = async (id,classItem) => {
            try {
                const response = await axios.put(`http://localhost:8083/api/v1/class/getById/${id}`, classItem);
                dispatch({type: "UPDATE_CLASS", payload: response.data});
            } catch (error) {
                console.error("Error al actualizar la clase",error);
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
};

export const useClass = () => {
    const context = useContext(ClassContext);
    if (!context) {
        throw new Error('useClass debe ser utilizado dentro de un ClassProvider');
    }
    return context;
};