import React, { Fragment,useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import ErrorCaja from './ErrorCaja';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'right', 
        placeSelf: 'center',
    },
  }));

const ClienteSerch = () => {
    const classes = useStyles();
    const clientaDB = '123';
    const [error,guardarError] = useState(false);
    const [cliente,actualizarCliente] = useState(0);

    const actualizarState= e =>{
        //console.log(e.target.value);
        actualizarCliente(parseInt(e.target.value,10) )        
    }
    const buscarCliente = e => {
        e.preventDefault();

        if(cliente === 0 || isNaN(cliente)){
            guardarError(true);
            return;
        }

        guardarError(false);
    }
      
    return(
        <Fragment>
            <Grid container spacing={2}>                    
                <Grid item xs={4} className={classes.title}>
                    <span className="titleCaja">Caja</span>
                </Grid>                                  
            </Grid>   
            { error ? <ErrorCaja mensaje="numero no encontrado"/> : null}
            <Grid container spacing={2}>
                    
                <Grid item xs={4} className={classes.title}>
                    <label >Paciente: </label>
                </Grid>
                <Grid item xs={8}>
                <form noValidate autoComplete="off" onSubmit={buscarCliente}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField 
                        type="number" 
                        name="idCliente" 
                        id="outlined-basic" 
                        label="ID Cliente" 
                        variant="outlined"                    
                        onChange={actualizarState}
                        />    
                    </Grid>  
                    <Grid item xs={6}>                  
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"  
                                                
                        >Send</Button>
                    </Grid> 
                </Grid>
                </form>
                </Grid>                    
            </Grid>   
        </Fragment> 
    );
}

export default ClienteSerch;