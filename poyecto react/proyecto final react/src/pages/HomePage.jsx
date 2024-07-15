import { BasicPage } from "../components/BasicPage";

export const HomePage = () => {//exportamos el componente HomePage
    return (//retornamos el componente BasicPage con title y description
            <BasicPage title="Inicio" description="Bienvenido selecciona tu || ruta" />
    );
}