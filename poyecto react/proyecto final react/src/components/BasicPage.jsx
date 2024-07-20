import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
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
}));

export const BasicPage = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>
    </Paper>
  );
};