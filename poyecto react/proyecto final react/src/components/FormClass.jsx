import React,{ useState, useEffect,useContext} from "react";
import {ClassContext} from "../context/ClassContext";
import { TextField, Button, Grid, Paper } from '@mui/material';

const FormClass = ({ classItem, handleSaveClass, handleCloseForm }) => {
  const { addClass, updateClass} = useContext(ClassContext);
  const [formData, setFormData] = useState({
      name: '',
      description: '',
      startTime: '',
      endTime: '',
      teacher:'',
      day:'',
  });

  useEffect(() => {
      if (classItem) {
          setFormData({
            name: classItem.name || '' ,
            description: classItem.description ||'',
            startTime: classItem.startTime ||'',
            endTime: classItem.endTime ||'',
            teacher: classItem.teacher||'',
            day: classItem.day||'',
          });
          } else {
            setFormData({
                name: '',
                description: '',
                startTime: '',
                endTime: '',
                teacher: '',
                day:'',
            });
      }
  }, [classItem]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData)=>({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      handleSaveClass(formData);
     
  };

  return (
      <Paper style={{ padding: '20px' }}>
          <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField
                          name="name"
                          label="Name"
                          fullWidth
                          value={formData.name}
                          onChange={handleChange}
                         required
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          name="description"
                          label="Description"
                          fullWidth
                          value={formData.description}
                          onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>c
                      <TextField
                          name="startTime"
                          label="Start Time"
                          type="text"
                          fullWidth
                          value={formData.startTime}
                          onChange={handleChange}
                          InputLabelProps={{
                              shrink: true,
                          }}
                         required
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          name="endTime"
                          label="End Time"
                          type="text"
                          fullWidth
                          value={formData.endTime}
                          onChange={handleChange}
                          InputLabelProps={{
                              shrink: true,
                          }}
                       required
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          name="teacher"
                          label="Teacher"
                          type="text"
                          fullWidth
                          value={formData.teacher}
                          onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          name="day"
                          label="Day"
                          type="text"
                          fullWidth
                          value={formData.day}
                          onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button type="submit" variant="contained" color="primary">
                          {classItem ? 'Update Class' : 'Add Class'}
                      </Button>
                      <Button variant="contained" color="secondary" onClick={handleCloseForm}>
                          Cancel
                      </Button>
                  </Grid>
              </Grid>
          </form>
      </Paper>
  );
};

export default FormClass;






