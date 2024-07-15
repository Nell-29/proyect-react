import { useState } from "react";//importamos useState desde react

export const useLocalStorage = (keyName, defaultValue)  => {//creamos la funcion useLocalStorage y le pasamos keyName y defaultValue como parametros
    const [storeValue, setStoredValue ] = useState(() => {//creamos la constante storeValue y setStoredValue y le asignamos el valor de useState
        try {//manejamos el error
        const value = window.localStorage.getItem(keyName);//creamos la constante value y le asignamos el valor de localStorage.getItem
        if (value) {//si value es verdadero
            return JSON.parse(value);//retornamos el valor de value parseado
        } else {//sino
            window.localStorage.setItem(keyName, JSON.stringify(defaultValue));//guardamos el valor de defaultValue en localStorage con keyName como clave
        return defaultValue;//retornamos el valor de defaultValue 
        }
        } catch (error) {//manejamos el error
        
        return defaultValue;//retornamos el valor de defaultValue 
        }
    });

    const setValue  = (newValue) => {//creamos la funcion setValue y le pasamos value como parametro 
        try {//manejamos el error
            window.localStorage.setItem(keyName, JSON.stringify(newvalue));//guardamos el valor de value en localStorage con keyName como clave
    } catch (error) {//manejamos el error
        console.log(error);//mostramos el error en consola
    };
    setStoredValue(newValue);// seteamos el valor de setStoredValue con value 
    };
    return [storeValue, setValue]; //retornamos un array con storeValue y setValue 
};