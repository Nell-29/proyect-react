import React from 'react';
import { Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semitransparente
    backdropFilter: 'blur(10px)', // Efecto de desenfoque en el fondo
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: '1.2rem',
    color: theme.palette.text.secondary,
  },
  background: {
    backgroundImage: 'url("https://res.cloudinary.com/dxvasvakp/image/upload/v1719387462/strong-people-crossfit-2F793JJ_l2nmiy.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Asegura que el fondo cubra toda la pantalla
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

export const BasicPage = ({ title, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container maxWidth="sm">
        <Paper className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};
