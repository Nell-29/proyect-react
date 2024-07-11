import React, { useState, useEffect } from 'react';

   
    const ClassUser = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/ClassList.json');
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error('Error al recibir la data data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      return (
        <div>
          <h1> apuntate a una clase gratis </h1>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ClassUser;
