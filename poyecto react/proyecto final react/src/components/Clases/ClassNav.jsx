import  ClassProvider  from "../../context/index";// importamos el proveedor de la clase.
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/container"; 
import { memo } from "react";   


const ClassImage = ClassProvider.map((Class) => {
    const image = memo(ClassProvider.find(({ id }) => id === ClassProvider.id));
    if (image) {
      Class.images = image.images;
    }
    return Class;
  });
  
  const ClassList = () => {
    return (
      <Container maxWidth="lg">
        {/* Contenedor de la lista de productos */}
        <Grid container spacing={2} justifyContent="flex-start">
          {ClassImage.map((Class) => (
            <Grid item key={Class.id} xs={12} sm={6} md={4} lg={3}>
              {/* Tarjeta de la clase */}
              <ProductCard Class={Class} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default ClassList;