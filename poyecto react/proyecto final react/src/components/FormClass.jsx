import React,{ useState, useEffect, useContext } from "react";
import { ClassContext } from "../context/ClassContext";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle,Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const FormClass = ({classItem, handleCloseForm}) => {
    const { addClass, updateClass, deleteClass } = useContext(ClassContext);
    const [formClass, setFormClass] = useState({
      name : '',
      description:'',
      startTime: '',
      endTime:'',
      day:'',
      endTime :'',
      teacher: '',
      salas:'',
    });

    const [notification, setNotification] = useState ({open:false, message:'',severity:'success'});

    useEffect(() => {
        if (classItem) {
            setFormClass({
                name: classItem.name,
                description: classItem.description,
                startTime: classItem.startTime,
                day:'',
                endTime: classItem.endTime,
                teacher: classItem.teacher,
                salas: classItem.salas,
            });
        } else {
            setFormClass({
              name : '',
              description:'',
              startTime: '',
              endTime:'',
              day:'',
              endTime :'',
              teacher: '',
              salas:'',
            });
        }
    }, [classItem]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormClass((prevData) => ({...prevData, [name]: value,
        }));
        };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
           if (classItem) {
           await updateClass(classItem._id,formClass);
           setNotification({open:true,message:'clase actualiada correctamente', severity:'success'});
           } else {
           await addClass(formClass);
           setNotification({open:true,message:'clase agregada correctamente', severity:'success'});
           }
        handleCloseForm();
    } catch(error){
      setNotification({open:true,message:'ha ocurrido un error'+error.message, severity:'error'});
    }
  };

  const handleDelete = async () =>{
try {
  await deleteClass(classItem._id);
  setNotification({ open: true, message: 'Class borrada safisfactoriamente !', severity: 'success' });
  
  handleCloseForm();

} catch (error) {
  setNotification({ open: true, message: 'Error ocurrido: ' + error.message, severity: 'error' });
  
}
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
};

    return (
      <>
      <Dialog open={true} onClose={handleCloseForm}>
          <DialogTitle>{classItem ? "Edit Class" : "Add Class"}</DialogTitle>
          <DialogContent>
              <TextField
                  autoFocus
                  margin="dense"
                  name="name"
                  label="Name"
                  type="text"
                  fullWidth
                  value={formClass.name}
                  onChange={handleChange}
              />
              <TextField
                  margin="dense"
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth
                  value={formClass.description}
                  onChange={handleChange}
              />
              <TextField
                  margin="dense"
                  name="startTime"
                  label="Start Time"
                  type="time"
                  fullWidth
                  value={formClass.startTime}
                  onChange={handleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
              <TextField
                  margin="dense"
                  name="endTime"
                  label="End Time"
                  type="time"
                  fullWidth
                  value={formClass.endTime}
                  onChange={handleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
              <TextField
                  margin="dense"
                  name="day"
                  label="Day"
                  type="text"
                  fullWidth
                  value={formClass.day}
                  onChange={handleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
              <TextField
                  margin="dense"
                  name="teacher"
                  label="Teacher"
                  type="text"
                  fullWidth
                  value={formClass.teacher}
                  onChange={handleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
              <TextField
                  margin="dense"
                  name="salas"
                  label="Salas"
                  type="text"
                  fullWidth
                  value={formClass.salas}
                  onChange={handleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
          </DialogContent>
          <DialogActions>
              <Button onClick={handleCloseForm} color="inherit">
                  cancelar
              </Button>
              {classItem && (
                  <Button onClick={handleDelete} color="error">
                      Delete
                  </Button>
              )}
              {classItem && (
                  <Button onClick={handleCloseNotification} color="error">
                      notification
                  </Button>
              )}
              <Button onClick={handleSubmit} color="primary">
                  {classItem ? "Update" : "Add"}
              </Button>
          </DialogActions>
      </Dialog>
      <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleCloseNotification}>
                <Alert onClose={handleCloseNotification} severity={notification.severity}>
                    {notification.message}
                </Alert>
            </Snackbar>
  </>
);
};

export default FormClass
