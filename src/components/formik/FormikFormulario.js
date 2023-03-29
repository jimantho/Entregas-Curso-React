import { Grid, TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import React from 'react'
import *  as Yup from 'yup'

export const FormikFormulario = () => {

  // AXIOS

  // useEffect(() => {
  //   /* const data = fetch("https://jsonplaceholder.typicode.com/posts")
  //   data.then( res => res.json())
  //   .then(res => console.log(res)) */
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => console.log(res.data))
  // }, [])

  const enviarForm = (data) => {
    console.log(data);
    resetForm()
  }

  const datos = {
    name: '',
    email: "",
    password: ""
  }

  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik(
    {
      initialValues: datos,
      onSubmit: enviarForm,
      validationSchema: Yup.object().shape({
        name: Yup.string().required("Complete su nombre por favor").max(15, "el nombre es de 15 caracteres"),
        email: Yup.string().email().required("Complete su email por favor"),
        password: Yup.string().required("Complete su contrasena por favor").min(8, "la contrasena es muy debil")

      }),
      validateOnChange: false,

    }
  )


  return (
    <div>
      <Typography color="primary" variant="h2" align="center" component="h2">
        Formulario de Registro
      </Typography>

      <form className='form-container' onSubmit={handleSubmit}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            alignItems={"center"}
            justifyContent="space-evenly"
            spacing={2}
            sx={{ width: "100%" }}>
            <Grid item xs={12} md={7}>
              <TextField
                type="text"
                label="Ingrese sus nombres"
                name='name'
                value={values.name}
                onChange={handleChange}
                fullWidth
                error={errors.name ? true : false}
                helperText={errors.name}
              /* 
              variant="outlined"
              
             
               */
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                type="text"
                label="Ingrese su Email"
                name='email'
                value={values.email}
                onChange={handleChange}
                fullWidth
                error={errors.email ? true : false}
                helperText={errors.email}
              /* 
               variant="outlined"              
               
                */
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                type="password"
                label="Ingrese Contrasena"
                name='password'
                value={values.password}
                onChange={handleChange}
                fullWidth
                error={errors.password ? true : false}
                helperText={errors.password}
              /* 
              variant="outlined"
              
              
               */
              >
              </TextField>
            </Grid>
          </Grid>

        </Box>
        <Box>
          <Grid item xs={12} md={7}>
            <Button type='submit' variant='contained'>Enviar</Button>
          </Grid >
        </Box>
      </form>



    </div>

  )
}

//ME QUEDE 12:47
