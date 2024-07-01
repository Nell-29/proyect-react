import { BasicPag} from "../../components/BasicPag";// Desactivamos la regla de ESLint para la validación de tipos de props en este archivo.

export const Home = () => {//creamos la función Home, para que el usuario pueda ver la página de inicio.
  return (//retornamos la página de inicio.
    <BasicPag
      title="Home"
      description="Bienvenido a la página de inicio de la aplicación."
    />
  );
};