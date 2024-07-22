import React,{ useContext, useState} from 'react';//importamos react y useState desde react
import FormClass from '../components/FormClass';
import { ClassContext } from '../context/ClassContext';//importamos ClassContext desde el archivo ClassContext
import { Button, Typography, Card, CardContent, CardActions, Grid,Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ClassPage = () => {//creamos la funcion ClassPage
    const {classes,addClass,updateClass,deleteClass} = useContext(ClassContext);//creamos la constante clase y le asignamos el valor de useContext
    const [showForm, setShowForm] = useState(false);//creamos la constante openForm y le asignamos el valor de useState
    const [selectedClass, setSelectedClass] = useState(null);//creamos la constante selectedClass y le asignamos el valor de useState
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
    
    const handleOpenForm = (classItem) => {
        setSelectedClass(classItem);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setSelectedClass(null);
        setShowForm(false);
    };
    const handleDelete = (classId) => {
        deleteClass(classId);
        setNotification({ open: true, message: 'Clase eliminida correctamente!', severity: 'success' });
    };

    const handleSaveClass = async (classItem) => {
       try{
        if(classItem._id) {
            await updateClass(classItem._id,classItem);
            setNotification({open:true, message:'clase modificada con exito', severity:'success'});
        } else {
            await addClass(classItem);
            setNotification({ open: true, message: 'Class added successfully!', severity: 'success' });
        }
                handleCloseForm();
    } catch (error) {
        if (error.response && error.response.status === 409) {
            setNotification({ open: true, message:error.response.data.message || 'Conflict: Class already exists or there is a conflict with the data.', severity: 'error' });
        } else {
            setNotification({ open: true, message: 'An error occurred while saving the class.', severity: 'error' });
        }
    }
};
    const handleCloseNotification = () => {
        setNotification({ ...notification, open: false });
    };


    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Classes
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleOpenForm(null)} 
                style={{ marginBottom: '20px' }}
            >
                Add Class
            </Button>
            <Grid container spacing={2}>
                {classes.map((classItem) => (
                    <Grid item xs={12} sm={6} md={4} key={classItem._id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{classItem.name}</Typography>
                                <Typography color="textSecondary">{classItem.description}</Typography>
                                <Typography variant="body2">Start Time: {classItem.startTime}</Typography>
                                <Typography variant="body2">End Time: {classItem.endTime}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => handleOpenForm(classItem)}>
                                    Edit
                                </Button>
                                <Button size="small" color="secondary" onClick={() => handleDelete(classItem._id)}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {showForm && (
                <div style={{ marginTop: '20px' }}>
                    <FormClass classItem={selectedClass} handleSaveClass={handleSaveClass} handleCloseForm={handleCloseForm} />
                </div>
            )}
            <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleCloseNotification}>
                <Alert onClose={handleCloseNotification} severity={notification.severity}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </div>
    );
};
export default ClassPage;//exportamos ClassPage
    