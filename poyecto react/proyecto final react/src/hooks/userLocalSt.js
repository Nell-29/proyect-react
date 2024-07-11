import { UseState } from "react";

// uso el custom hook para guardar el usuario en el local storage

export const UserLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = UseState (() => {
        // usamos un try catch para evitar errores
        try {
          //en value, almacenamos el valor de kayname en el window.local storage
            const value = window.localStorage.getItem(keyName);

            // si el valor existe, retornamos el valor parseado
            if (value) {
                return JSON.parse(value);
            } else {

                // si hay un error, retornamos el valor por defecto
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;  
            }
            
        } catch (error) { return defaultValue; // si hay un error, retornamos el valor por defecto
              
                }
             });

          // terminamos la callback del useState y creamos una funcion para setear el valor en el local storage
         // cambio el valor de la variable keyname y en el stored value
       const setValue =(newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));// guardamos el valor en el local storage
        } catch (err) {
            console.log(err);
            
        }
        setStoredValue(newValue);// cambiamos el valor de la variable keyname y en el stored value
        
    };

    return [storedValue,setValue];// retornamos el valor y la funcion para setear el valor.
      
};