import React, { createContext, useState, useEffect } from 'react';// Importa createContext, useState y useEffect
import ListaClass  from 'ListaClass.json'// Importa tu archivo JSON

export const DataContext = createContext();//creamos el contexto de datos.

export const DataProvider = ({ children }) => {//creamos el proveedor de datos.
  const [data, setData] = useState([]);//usamos el estado para guardar los datos del archivo JSON.

  useEffect(() => {//usamos useEffect para cargar los datos del archivo JSON en el estado.
    
    setData(ListaClass);//guardamos los datos del archivo JSON en el estado.
  }, []);//dependencia vacía para que solo se ejecute una vez.

  return (
    <DataContext.Provider value={data}>//retornamos el proveedor de datos.
      {children}//retornamos los hijos del proveedor de datos.
    </DataContext.Provider>
  );
};