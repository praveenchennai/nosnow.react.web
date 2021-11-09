import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        opacity: 0.9,
        background: "transparent",
        position: "absolute"
    },
});

const Header = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static" className={classes.root} elevation={0}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Naples Real Estate</Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Naples Communities</Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Community LifeStyle</Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Real Estate Resource</Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Living In Naples</Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>News</Typography> */}
                    <Button color="inherit">Search</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;