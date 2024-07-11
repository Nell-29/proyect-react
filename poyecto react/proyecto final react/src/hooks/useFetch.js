import { useState, useEffect, useContext, useCallback } from "react";//importamos useState, useEffect y useContext de react para poder usarlos.
import {ContextInfo} from "../context/index.JSX";//importamos ContextInfo de ContexInfo para poder usar el contexto de la información. 

export const UseClassFetch = () => {
    const { dispatch } = useContext(ContextInfo);
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = useCallback(async (url, typeAction, options = {}) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        dispatch({ type: typeAction, payload: result });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, [dispatch]);
  
    useEffect (() => {
      fetchData(url, typeAction, options);
    }, [fetchData, url, options, typeAction, dispatch]);
  
    return { loading, error };
    };
