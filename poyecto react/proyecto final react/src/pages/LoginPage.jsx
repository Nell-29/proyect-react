import React, { useEffect, useState } from 'react';//importamos useState para poder manejar el estado del formulario
import { Link, useNavigate } from 'react-router-dom';//importamos el hook useAuth para poder logearnos
import { TextField, Button, Container, Typography,Box } from '@mui/material';
import { styled } from '@mui/system';
import { UseAuth } from '../hooks/useAdmit';

const FormContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8rem',
});
const Form = styled('form')({
    width: '100%', // Fix IE 11 issue.
    marginTop: '1rem',
});

const SubmitButton = styled(Button)({
    margin: '1.5rem 0 1rem',
});

const ErrorText = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
}));


const LoginPage = () => {//creamos la funcion LoginPage 
const {login, error} = UseAuth();//creamos una constante que va a ser igual a useAuth
const [userLogin, setUserLogin] = useState({
        email:"",
        password: "",
    });//creamos una constante que va a ser igual a useState

const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",

});//creamos una constante que va a ser igual a useState

    const navigate = useNavigate();//creamos una constante que va a ser igual a useHistory

    const handleInput = (ev) => {//creamos la funcion handleLogin
        const {name, value} = ev.target;//creamos una constante que va a ser igual a ev.target que va a ser el nombre y el valor del evento
        setUserLogin({...userLogin,[name]: value });//seteamos el estado del formulario con el valor del evento
    };
        const handleSubmit =  async(event) => {//creamos la funcion handleSubmit
            event.preventDefault();//prevenimos el comportamiento por defecto del formulario que es recargar la pagina
           const newErrors = {email:"",password:""};//creamos una constante que va a ser igual a un objeto vacio
        

        if (!userLogin.email) {//si no hay un email en el formulario
            newErrors.email = "el email es requerido";//seteamos el error del email
        }

        if (!userLogin.password) {//si no hay una contraseña en el formulario
            newErrors.password = "la contraseña es requerida";//seteamos el error de la contraseña
        }

        setFormErrors(newErrors);//seteamos el estado del formulario con los errores
        
        if(!newErrors.email && !newErrors.password){//si hay errores en el formulario) {
           const success = await login(userLogin);
           if (success) {
               navigate('/profile');
           } else {
                setFormErrors({...newErrors, email:"usuario o contraseña incorrectos", password:""});
        }
    }
};

    useEffect(() => {
        if (error) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                  email:" ",
                password:"usuario o contraseña incorrectos"
            }));   
        }
    },[error]);

    return (
        <FormContainer component="main" maxWidth="xs">
            <Box className="root">
                <Typography component="h1" variant="h5">
                    INICIAR
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={userLogin.email}
                        onChange={handleInput}
                        error={Boolean(formErrors.email)}
                        helperText={formErrors.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={userLogin.password}
                        onChange={handleInput}
                        error={Boolean(formErrors.password)}
                        helperText={formErrors.password}
                    />
                    <SubmitButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Iniciar sesión
                    </SubmitButton>
                </Form>
                <Link to='/register'>
                    No tienes una cuenta, créala ya
                </Link>
            </Box>
        </FormContainer>
    );
};


export default LoginPage;//exportamos el componente LoginPage

