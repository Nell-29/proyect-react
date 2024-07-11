import {AppBar, Toolbar, IconButton,Typography, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";   
import{ ThemeProvider } from "@mui/material/styles";
import {inicialTheme} from "../theme/Inicial";  
import { AuthContext } from "../../hooks/index";

export const Header = () => {
    const {user, logout} = AuthContext();
    return (
        <>
       <ThemeProvider theme={inicialTheme}>
        <AppBar position="static">
          <Toolbar>
            {/* Button menú */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Reserva tu clases
            </Typography>

            {user && (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bienvenido {user.name}
              </Typography>
            )}

            <NavLink to="/sports">
              <Button variant="text" color="inherit">
                Clases
              </Button>
            </NavLink>

            <NavLink to="/">
              <Button variant="text" color="inherit">
                Salas
              </Button>
            </NavLink>

            <NavLink to="/comments">
              <Button variant="text" color="inherit">
                Profesores
              </Button>
            </NavLink>

            <NavLink to="/">
              <Button variant="text" color="inherit">
                inicio
              </Button>
            </NavLink>

            <NavLink to="/login">
              {!user && (
                <Button variant="text" color="inherit">
                  login
                </Button>
              )}
            </NavLink>

            <NavLink to="/">
              {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
              {user && (
                <Button variant="text" color="inherit" onClick={logout}>
                  logout
                </Button>
              )}
            </NavLink>

            <Link to="dashboard/settings" replace>
              {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
              {user && (
                <Button variant="text" color="inherit">
                    Dashboard
                </Button>
              )}
            </Link>

            {/* Icono de cuenta de usuario */}
            <NavLink to="/signUp">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              ></IconButton>
            </NavLink>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
    );
};