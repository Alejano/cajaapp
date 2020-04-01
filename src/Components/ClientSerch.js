import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'right', 
    },
  }));

const ClienteSerch = () => {
    const classes = useStyles();
      
    return(
        <Fragment>
            <Grid container spacing={2}>                    
                <Grid item xs={4} className={classes.title}>
                    <span className="titleCaja">Caja</span>
                </Grid>                                  
            </Grid>   
            
            <Grid container spacing={2}>                    
                <Grid item xs={4} className={classes.title}>
                    <span >Paciente: </span>
                </Grid>
                <Grid item xs={8}>
                    <form>
                        <input type="text"></input>
                    </form>
                </Grid>                    
            </Grid>   
        </Fragment> 
    );
}

export default ClienteSerch;