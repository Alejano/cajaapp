import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../images/Logo.png';
import carita from '../images/carita.png';


function HeaderCaja(){

    return(
        <div>  
            <Grid container spacing={2} className="headercaja">                    
                <Grid item xs={6}>
                    <img className="logo" src={Logo}/>
                </Grid>
                <Grid item xs={6} className="gridCarita">
                    <div className="containerspace">
                        <div className="caritacontainer"><img className="carita" src={carita}/></div>
                        <span>id cliente</span>
                    </div>
                </Grid>                    
            </Grid>                              
        </div>
    );
        
    
}

export default HeaderCaja;