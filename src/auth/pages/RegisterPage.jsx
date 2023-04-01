import { makeStyles, Typography } from '@material-ui/core';
import { Alert, Grid } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { deleteErrorMessage, startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';
import { NetflixButton, NetflixInput } from '../../styled/styledComponents';

const formData = {
  displayName: '',
  email: '',
  password: '',
}


const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = ({setHaveAccount}) => {
  
  const classes = useStyles();
  
  const dispatch = useDispatch();
  
  const {errorMessage} = useSelector((state)=> state.auth);

  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );
  
  
  const register = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid) return;

    dispatch(startCreatingUserWithEmailAndPassword(formState));
    
  };

  const deleteMessage = () => {
    dispatch(deleteErrorMessage())
    setHaveAccount();
  }


  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Crea Una Cuenta
      </Typography>
      <form className={classes.form}>

        <NetflixInput 
          name="displayName" 
          type='text'
          value={displayName} 
          onChange={onInputChange} 
          className={classes.email} 
          placeholder='Nombre'
          error={ !!displayNameValid && formSubmitted}
        />

        <NetflixInput 
          name="email" 
          type='email'
          value={email} 
          onChange={onInputChange} 
          className={classes.email} 
          placeholder='Email'
          error={ !!emailValid && formSubmitted}
        />

        <NetflixInput 
          name="password" 
          type='password' 
          value={password} 
          onChange={onInputChange} 
          className={classes.password} 
          placeholder='Password'
          error={ !!passwordValid && formSubmitted}
        />
      
        <Grid 
          container
          display={!!errorMessage ? '' : 'none'} 
          sx={{mt:1}}
        >
        <Grid 
        item 
        xs={ 12 }
        >
          <Alert severity='error'>{errorMessage}</Alert>
        </Grid>
      </Grid>

        <NetflixButton 
          onClick={register} 
          type='submit' 
          wide='medium' radius
        >
          Crear Cuenta
        </NetflixButton>


        <Typography variant='subtitle2'>
          tienes cuenta ?{" "}
          <span 
            className={classes.signupLink}
            onClick={deleteMessage}
          >
          Inicia Sesión aquí.{""}
          </span>
        </Typography>
      </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '350px',
    width: '20rem',
    height: '25rem',
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: '80%',
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    color: '#fff',
    cursor: "pointer",
    "&:hover": {
      textDecoration: 'underline',
    }
  }

}))


