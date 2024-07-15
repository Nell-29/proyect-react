export const BasicPage = ({title, description }) => {//creamos la funcion basicPage y le pasamos title y description como parametros
    return (//retornamos un div con title y description
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};