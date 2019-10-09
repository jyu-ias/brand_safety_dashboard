import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../ExternalLink_IAS-new-logo-blue.png';

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },
}));


export default function Header() {
    const classes = useStyles();

    return (
       
        <AppBar style={{ backgroundColor: '#03324a', onHover: '#fd5749'}} position="sticky" title={<img src={logo} alt="logo"/>}>
            <Toolbar>
                
            </Toolbar>
        </AppBar>
        
    );
}