import { makeStyles } from '@material-ui/core';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FirebaseAuth } from '../auth/firebase/firebaseConfig';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { NetflixRoutes } from '../netflix/routes/NetflixRoutes';
import { login, logout } from '../store/auth/authSlice';
import { CheckingAuth } from '../ui/ChekingAuth';

export const AppRouter = () => {

  const classes = useStyles();

  const {status} = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {

    onAuthStateChanged(FirebaseAuth,async(user)=> {
      if(!user) return dispatch(logout());

      const {uid, email, displayName} = user;

      dispatch(login({uid, email, displayName}));
    })

  }, [])
  

  if(status === 'checking') {
    return <CheckingAuth/>
  }

  return (
    <div className={classes.root}>
      <Routes>
          {
              (status === "not-authenticated")
              ?<Route path='/auth/*' element={<AuthRoutes/>}/>
              :<Route path='/*' element={<NetflixRoutes/>}/>
          }

          <Route path='/*' element={ <Navigate to='/auth/login'/> } />
      </Routes>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    
  }
}))
