import { CircularProgress, Grid } from "@mui/material";
import {makeStyles } from '@material-ui/core';
import logo from '../imagenes/logo.png';

export const CheckingAuth = () => {

    const classes = useStyles();

  return (
        <div className={classes.root}>
            <Grid
            container
            spacing={0}
            display="flex"
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.root}
            sx={{ minHeight: '100vh', backgroundColor: '#121212'}}
        >

                <Grid container
                    spacing={0}
                    display="flex"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    className={classes.root}
                >
                    <img src={logo} alt="logo" className={classes.logo}/>
                    <CircularProgress style={{'color': '#e50914', 'width': '10vh', 'height': '10vh'}}/>
                </Grid>
            </Grid>
        </div>



  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      },
    logo: {
        width: "30%",
        height: "30%",
        marginBottom: "10px"

    }
}))
