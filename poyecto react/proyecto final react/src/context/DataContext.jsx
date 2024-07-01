import React, { createContext, useState, useEffect } from 'react';// Importa createContext, useState y useEffect
import listaClass  from './classContext/listaClass.json';//importamos el archivo JSON con los datos de las clases.

export const DataContext = createContext();//creamos el contexto de datos.

export const DataProvider = ({ children }) => {//creamos el proveedor de datos.
  console.log(listaClass)
  const [data, setData] = useState(listaClass);//usamos el estado para guardar los datos del archivo JSON.


  return (
    <DataContext.Provider value={data}>//retornamos el proveedor de datos.
      {children}//retornamos los hijos del proveedor de datos.
    </DataContext.Provider>
  );
};