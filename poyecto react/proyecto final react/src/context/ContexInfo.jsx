import { createContext,useState, useEffect } from "react";

import axios from "axios";

export const ContextInfo = createContext();

export const ContextInfoProvider = ({children}) => {

    const [user, setUser] = useState([]);
  

    useEffect(() => {
        const getUseInfo = async () => {
        try {
          const response = await axios.get('http://localhost:8081/api/v1/teacher/getall');
            setUser(response.data);
            
        } catch (error) {
            console.error("error al obtener la informacion del usuario",error);
        }
    }
    getUseInfo();
    }, []);

    return (
        <ContextInfo.Provider value={{user}}>
            {children}
        </ContextInfo.Provider>
    );
}