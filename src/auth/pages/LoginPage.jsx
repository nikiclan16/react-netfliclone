import { Button, makeStyles, Typography } from "@material-ui/core";
import logo from '../../imagenes/logo.png';
import Banner from '../../imagenes/fondoAuth.jpg';

import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from "../../styled/styledComponents";
import { RegisterPage } from "./RegisterPage";
import { InitSession } from "./InitSession";

export const LoginPage = () => {

  const classes = useStyles();
  const [haveAccount, setHaveAccount] = useState(false);

  const createAccount = () => {
    setHaveAccount(!haveAccount);
  }

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo}/>
      <div className={classes.info}>

        {
          (haveAccount) 
          ? (<RegisterPage setHaveAccount={createAccount}/>) 
          : (<InitSession setHaveAccount={createAccount}/>)
        }
       
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Banner})`,
    objectFit: 'contain',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '150px',
    cursor: 'pointer',
  },
  session: {
    position: 'fixed',
    zIndex: 15,
    right: 20,
    top:20,
  },
  info: {
    color: '#fff',
    zIndex: 15,
    textAlign: 'center',
    "& h4": {
      fontWeight: '800',
    },
    "& h5": {
      fontWeight: '400',
    }

  }
}))


