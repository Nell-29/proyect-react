import {useFetch } from "./index.jsx";
import {GET_CLASS, ID_CLASS, ADD_CLASS } from "../context/index.jsx ";

export const useClass = () => {
    const useGetAllClass = async () => {
        useFetch("https://localhost:8081/api/v1/class/getAll"), GET_CLASS;
    }
    const useFindClass = async (id) => {
        useFetch(`https://localhost:8081/api/v1/class/getById/${id}`), ID_CLASS;
    }
    const useGetAddClass = async (data) => {
        useFetch(`https://localhost:8081/api/v1/class/create`),{body:data, method: 'POST'} , ADD_CLASS;
    }
    
    return {useGetAllClass,useFindClass,useGetAddClass};//retornamos el contexto de las clases.
};