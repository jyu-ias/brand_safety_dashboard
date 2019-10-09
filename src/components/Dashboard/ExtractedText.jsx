import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        minHeight: 800,
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper where the text will show up.
        </Typography>
                <Typography component="p">
                    This is the text.
        </Typography>
            </Paper>
        </div>
    );
}