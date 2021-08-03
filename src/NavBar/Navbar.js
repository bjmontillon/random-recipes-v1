import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    headerContainer: {
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        fontFamily: "'Quicksand', sans-serif",

    },
    headerTitle: {
        fontWeight: '600',
        fontFamily: "'Quicksand', sans-serif",
        color: 'black',
    },
})

function Navbar () {
    const classes = useStyles();
    return (
        <Grid className={classes.headerContainer} container xs={12}>
            <Grid item xs={12}>
                <Typography>
                    <Link className={classes.headerTitle}>
                        Home
                    </Link>
                </Typography>
            </Grid>
        </Grid>

    )

}

export default Navbar