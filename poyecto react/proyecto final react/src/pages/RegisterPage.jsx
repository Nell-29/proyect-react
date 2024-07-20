import React, {useState} from 'react';//importamos react y useState desde react
import { Link,useNavigate } from 'react-router-dom';//importamos Link desde react-router-dom
import axios from 'axios'; 
import { Box, Button, TextField, Typography } from '@mui/material';


const RegisterPage = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);
    const [userRegister, setUserRegister] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const handleInput =  (event) => {
        const {name, value} = event.target;
        setUserRegister({...userRegister,[name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userRegister.password !== userRegister.confirmPassword) {
            setErrors("las contraseñas no coinciden");
            return;
        }
    
    try {
        const response = await axios.post('http://localhost:8083/api/v1/user/create', userRegister);
        console.log("usuario creado con exito", response.data);
        navigate('/Login',{state:{message:'usuario creado con exito '}});
    } catch (error) {
        console.error("error al crear el usuario", 
            error.response ? error.response.data : error.message);
            setErrors("error al crear el usuario");
    }
};


return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
    <Typography variant="h4" component="h1" gutterBottom>
        Registrarse
    </Typography>
    <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            margin="normal"
            label="Ingrese su Nombre"
            name="name"
            value={userRegister.name}
            onChange={handleInput}
            required
        />
        <TextField
            fullWidth
            margin="normal"
            label="Ingrese un Email"
            type="email"
            name="email"
            value={userRegister.email}
            onChange={handleInput}
            required
        />
        <TextField
            fullWidth
            margin="normal"
            label="Ingrese su Clave"
            type="password"
            name="password"
            value={userRegister.password}
            onChange={handleInput}
            required
        />
        <TextField
            fullWidth
            margin="normal"
            label="Confirme su Clave"
            type="password"
            name="confirmPassword"
            value={userRegister.confirmPassword}
            onChange={handleInput}
            required
        />
        {errors && <Typography color="error">{errors}</Typography>}
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
        >
            Registrarse
        </Button>
    </form>
    <Typography variant="body2" sx={{ mt: 2 }}>
        <Link to="/login">Iniciar sesión</Link>
    </Typography>
</Box>
);
};
export default RegisterPage;