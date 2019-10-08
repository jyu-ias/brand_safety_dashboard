import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// import logo from '../../ias-platform-logo.svg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    imageContainer: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="default" position="sticky">
                <Toolbar>
                    
                    <div
                        className={classes.imageContainer}
                        style={{ width: '96px', height: '50px' }}
                    >
                       
                            <img
                                src="logo"
                                style={{ height: '6em', width: 'auto' }}
                                alt="Logo"
                            />
                       
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}