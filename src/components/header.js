import React from 'react';
import { AppBar, Link, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import LeftMenu from './layout/leftmenu'
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles({
    root: {
        background: "transparent",
        position: "absolute"
    },
    paper: {
      backgroundColor: "#002C5D",
      color: "#fff",
  },
});




const Header = (props) => {
    console.log('props', props)
    const [state, setState] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const bottom = useMediaQuery(theme.breakpoints.down('md'));
    const leftmenus = (r) =>{
        setState(r);
    }
    return (
        <React.Fragment>
            <AppBar position="sticky" className={classes.root} elevation={0}>
                <Toolbar>
                    <IconButton onClick={()=>leftmenus(true)} size="large" edge="start" color="inherit" aria-label="menu" 
                        sx={{ 
                            mr: 2,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('md')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        The Parlante Group
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('md')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        I want to list
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "18px",
                            marginLeft: "35px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('md')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        My Listing Expired
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "18px",
                            marginLeft: "35px",
                            marginRight: "35px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('md')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        For Sale By Owner
                    </Typography>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.facebook.com/NoSnowNaples/"><FacebookIcon /></Link></IconButton>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://twitter.com/nosnownaples/"><TwitterIcon /></Link></IconButton>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.instagram.com/nosnownaples/"><InstagramIcon /></Link></IconButton>
                    </Toolbar>
            </AppBar>
            <Drawer anchor={bottom?"bottom":"left"} open={state} onClose={()=>setState(false)} 
              PaperProps={{
                sx: {
                  backgroundColor: "#002C5D",
                  color: "#fff",
                  fontWeight: "bold"
                }
              }}
            >
                <LeftMenu value={props}/>
            </Drawer>
        </React.Fragment>
    )
}

export default Header;