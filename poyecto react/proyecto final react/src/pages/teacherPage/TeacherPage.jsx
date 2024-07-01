import {link  } from "react-router-dom";
import{useTeacher} from "../hooks/useTeacher";
import { UseAuthook } from "../../hooks/userAut";
import React,{useEffect,useState} from "react"; 
import  axios  from "axios";
import{useSalas} from "../hooks/UseSalas";
import {useClass} from "../hooks/useClass";

export const TeacherPage = () => {
    const {user,logout} = UseAuthook(); //usamos el hook personalizado para acceder al usuario y la función de logout.
    const [inputs, setInputs] = useState({
        name: "",
        class: "",
        code: "",
        teacher: user.id,
        sala: "",
        image: "",
    });//creamos un estado para los inputs. 
    
    //creamos una función para manejar los cambios en los inputs.
    const salas = useSalas();//usamos el hook personalizado para acceder a las salas.//creamos una función para manejar los cambios en los inputs.
    const clases = useClass();//usamos el hook personalizado para acceder a las clases. //creamos una función para manejar los cambios en los inputs.

useEffect(() => {
    const getSalas = () => {//creamos una función para obtener las salas.
        const SalasGet = salas.find(sala => sala.Email === user.email);//buscamos las salas por el email del usuario.
        if (SalasGet) {//si hay salas.
            setInputs(prevState => ({
                ...prevState,//actualizamos los inputs.
                sala: SalasGet._id }));//actualizamos los inputs.
            
        } else {
            console.log("No hay salas");//si no hay salas.  
            
        }
    };
if (salas.length > 0) {//si hay salas.
    getSalas();//llamamos a la función getSalas.{
    
}   
}, [salas, user.email]);//pasamos las dependencias.

const handleInp = (e) => {//creamos una función para manejar los cambios en los inputs.
    const { name, value } = e.target;
    setInputs(prevState => ({
        ...prevState,//actualizamos los inputs.
        [name]: value }));//actualizamos los inputs.
    };

const handleSubt = async (e) => {//creamos una función para manejar el envío del formulario.
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3001/class", inputs);//enviamos los inputs al servidor.
       console.log('sala registrada: ', response.data);//mostramos en consola la sala registrada.
       window.alert("Sala registrada");//mostramos una alerta de que la sala fue registrada.
       window.location.href='//poyecto react';//recargamos la página.
    } catch (error) {
        console.log(error);//si hay un error, lo mostramos en consola.
    }
};
return (// pintamos el header y el formulario para que el profesor pueda registrar una clase.
    <>
    <header className="header">
      <div className="left-section">
        {/* //* CONNOS LLEVA A HOME */} UN LOGO QUE 
        <link to="/autorizado/home">
          <img 
            src="https://res.cloudinary.com/dxvasvakp/image/upload/v1719330894/chicas-entrenando-en-gym-flat-vector-illustration_jkgsuh.jpg" 
            alt="Pantalla de inicio"
            className="marca"
          />
        </link>
        <p className="logo-text">My fitness Class</p>
      </div>
      <div className="right-section">
        {/* //* CON UN LOGO QUE NOS LLEVA A PERFIL */}
        <link to="/autorizado/profile">
          <img 
            src='https://res.cloudinary.com/dxvasvakp/image/upload/v1719331397/fitness-logo-man-woman-76825344_fqjkcq.jpg'
            alt="usuario"
            className="pickUser"
          />
          <br />
          {/* //* CON UN BOTÓN DE LOGOUT QUE VIENE DEL CONTEXTO USEAUTH*/}
          <button id="buttonLogout" key={"logout"} onClick={logout}>
            Closed Session
          </button>
        </link>
      </div>
    </header>
    {/* //* LE PONEMOS UN HANDLESUBMIT PARA QUE NO HAGA LO DEFAULT, SI NO LO QUE LE PIDA */}
    <form onSubmit={handleSubt}>
  {/* //* VAMOS PINTANDO EL INPUT DE DATOS DEL COCHE 
  //* QUE CUANDO CAMBIE SE UNE AL HANDLECHANGE DE ARRIBA Y SE UNE A LOS CAMPOS QUE CREAMOS
  //* ARRIBA EN EL USESTATE*/}
      <label>Class:</label>
      <input type="text" name="Class" value={inputs.class} onChange={handleInp} required />
      <br />
      <label>Salas:</label>
      <input type="text" name="Salas" value={inputs.sala} onChange={handle} required />
      <br />
      <label>Profesor</label>
      <input type="text" name="profesor" value={inputs.Ano} onChange={handleChange} required />
      <br />
      <label>Permiso Ambiental:</label>
      <input type="text" name="Permiso_Ambiental" value={inputs.Permiso_Ambiental} onChange={handleChange} required />
      <br />
      <label>Color:</label>
      <input type="text" name="Color" value={inputs.Color} onChange={handleChange} required />
      <br />
      <label>URL de la Imagen:</label>
      <input type="url" name="Imagen" value={inputs.image} onChange={handleChange} required />
      <br />
      <button type="submit">Registrate en nuestras Clases</button>
    </form>
  </>
);
};

