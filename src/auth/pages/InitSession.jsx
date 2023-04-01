import { makeStyles, Typography } from '@material-ui/core';
import { Alert, Grid } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import {  deleteErrorMessage, startLoginWithEmailAndPassword } from '../../store/auth/thunks';
import { NetflixButton, NetflixInput } from '../../styled/styledComponents';

const formData ={
  email: '',
  password: ''
}


const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
}

export const InitSession = ({setHaveAccount}) => {
  
  const classes = useStyles();

  const dispatch = useDispatch();

  const {errorMessage} = useSelector((state)=> state.auth);

  const [formSubmitted, setFormSubmitted] = useState(false);
  

  const { 
    formState, email, password, onInputChange,
    isFormValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );
  



  const login = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    if( !isFormValid) return;

    dispatch(startLoginWithEmailAndPassword(formState));
  };


  const deleteMessage = () => {
    dispatch(deleteErrorMessage())
    setHaveAccount();
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Iniciar Sesión
      </Typography>
      <form className={classes.form}>

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
          className={classes.margin}
          onClick={login} 
          type='submit' 
          wide='medium' radius
        >
          Iniciar Sesión
        </NetflixButton>


        <Typography variant='subtitle2'>
          No tienes cuenta ?{" "}
          <span 
            className={classes.signupLink}
            onClick={deleteMessage}
          >
            Crea una aquí.{""}
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
    margin: {
      marginTop: '20px'
    },
    email: {
      marginBottom: theme.spacing(2),
    },
    password: {
      index: '30',
      background: '#fff',
      padding: '25.5px',
      height: '30px',
      borderRadius: '5px',
      border: 'none',
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



