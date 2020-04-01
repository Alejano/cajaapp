import React,{Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center', 
    },
  }));

const ErrorCaja = ({mensaje}) => {
    const classes = useStyles();
    
    return(
        <Paper elevation={3} className={classes.title}>
        <span>{mensaje}</span> 
        </Paper>
    );
}

export default ErrorCaja;