import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    navBar: {
        maxHeight: '63px',
        borderBottom: '1px solid black',
        backgroundColor: 'pink'
    },
    headerTitle: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        //importborder: '1px solid red',
        fontSize: '8.199121522693996vw',
        fontFamily: "'Style Script', cursive",
    },
})

function Header() {

    const classes = useStyles()

    return (
        <Grid container xs={12}>
            <Grid item xs={12} className={ classes.headerTitle }>
                Random Recipe
            </Grid>
            
        </Grid>
        
    );

};

export default Header;