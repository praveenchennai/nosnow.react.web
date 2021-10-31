import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        opacity: 0.9
    },
});

const Header = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>NoSnowNaples</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;