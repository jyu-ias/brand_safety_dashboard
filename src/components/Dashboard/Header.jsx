import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },
    imageContainer: 5,
}));


export default function Header() {
    const classes = useStyles();

    return (
       
        <AppBar style={{ backgroundColor: '#03324a', textAlign: 'center'}} position="sticky" >
            <Toolbar >
                <div
                    className={classes.imageContainer}
                    style={{ width: '15%', height: '15%', padding: '.5em' }}>
                    <img src={require('../../ExternalLink_IAS-new-logo-blue.png')} alt="logo" className="brand-logo" style={{ width: '96px', height: '20px', padding: '.5em', backgroundColor: 'white'}}/>
                
                    
                
                </div>
            </Toolbar>
        </AppBar>
        
    );
}