import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../imagenes/logo.png'
import logoUser from '../imagenes/logoUser.png'


export const Header = () => {

    const classes = useStyles();

    const navigate = useNavigate();

    const {displayName} = useSelector((state) => state.auth);

    const [show, setShow] = useState(false);

    const userClick = () => {
        navigate('/profile');
    }

    const logoClick = () => {
        navigate('/');
    }

    const hideHeader = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    };


    useEffect(() => {
        window.addEventListener('scroll',hideHeader);

        return ()=> window.removeEventListener('scroll',hideHeader);
    }, [])
    

  return (
    <AppBar position="sticky"  elevation={0} className={`${(show) ? classes.transparent : classes.root}` }>
        <Toolbar className={classes.toolbar}>
            <img onClick={logoClick} src={logo} alt="logo" className={classes.logo}/>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <h1>{''}</h1>
                    <h3 style={{textTransform: 'capitalize'}}>
                        {displayName}
                    </h3>
            </Grid>
            <img onClick={userClick} src={logoUser} style={{cursor:'pointer', height:'40px',width: '40px',marginLeft: '10px'}}/>
        </Toolbar>
    </AppBar>
  )
}


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#111',
        top: 0,
        left: 0,
        right: 0,
    },
    transparent: {
        backgroundColor: 'transparent',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '100px',
        cursor: 'pointer',
  },
}))
