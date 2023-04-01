import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { Plans } from '../../components/Plans';
import netflixavatar from '../../imagenes/logoUser.png';
import { startLogout } from '../../store/auth/thunks';
import { NetflixButton } from '../../styled/styledComponents';

export const Profile = () => {
  const classes = useStyles();
  const {email, displayName} = useSelector((state)=> state.auth)

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout())
  }



  return (
    <>
    <Header/>
    <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center' }}>
      <div className={classes.root}>
        <Typography variant='h3'>Edit Profile</Typography>
          <div className={classes.info}>
            <img src={netflixavatar} alt='avatar'/>
            <div className={classes.details}>
                <div className={classes.plans}>
                  <Typography variant='h6' style={{textTransform: 'capitalize'}}>{displayName}</Typography>
                  <Typography variant='h6'>{email}</Typography>
                  <Typography className={classes.plansText} variant='h5' gutterBottom>Plans</Typography>
                  <Plans cost={16900}>Netflix Básico</Plans>
                  <Plans cost={26900 }>Netflix Standard</Plans>
                  <Plans wide='medium' color="gray" cost={38900}>Netflix Premium</Plans>
                  <NetflixButton onClick={logout} radius wide='fullwidth'>Cerrar Sesión</NetflixButton>
                </div>
            </div>
          </div>
      </div>
    </div>
    </>


  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    marginBottom: '50px',
    "& img": {
      height: "100px",
      [theme.breakpoints.down('xs')]: {
        display: "none",
      }
    }
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6" : {
      backgroundColor:'#aaa',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: '18px'
    }
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgray"
  }

}));

