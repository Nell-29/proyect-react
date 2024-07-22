import React from "react";
import { Grid } from "@material-ui/core"; // Importar Grid
import { BasicPage } from "../components/BasicPage";

export const HomePage = () => {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: '#de5e5e', padding: '20px' }}>
    <Grid item xs={12}>
      <BasicPage title="Bienvenido" description="Por favor, selecciona tu || ruta" />
    </Grid>
  </Grid>
);
};
