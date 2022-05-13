import React from 'react';
import { AppBar, Link, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import LeftMenu from './layout/leftmenu'
import { useTheme } from '@mui/material/styles';
import { useHistory } from "react-router-dom";

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
    const navi = useHistory();
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const [state, setState] = React.useState(false);
    const classes = useStyles();
    
    
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
                    <Button variant='text' onClick={()=>navi.push('/')}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                "text-transform": "capitalize",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            The Parlante Group
                        </Typography>
                    </Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    {!mdDown?<React.Fragment>
                    
                    <Button color="warning" variant='contained'
                        sx={{
                            marginLeft: "15px",
                            marginRight: "15px",
                        }}
                        onClick={()=>navi.push('/get-listed')}
                    >
                        <Typography
                            sx={{
                                fontSize: "13px",
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
                    </Button>
                    <Button color="primary" variant='contained'
                        sx={{
                            marginLeft: "15px",
                            marginRight: "15px",
                        }}
                        onClick={()=>navi.push('/listing-expired')}
                    >
                        <Typography
                            sx={{
                                fontSize: "13px",
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
                    </Button>
                    <Button color="warning" variant='contained' 
                        sx={{
                            marginLeft: "15px",
                            marginRight: "15px",
                        }}
                        onClick={()=>navi.push('/fsbo')}
                    >
                        <Typography
                            sx={{
                                fontSize: "13px",
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
                    </Button>
                    </React.Fragment>:''}
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.facebook.com/NoSnowNaples/"><FacebookIcon /></Link></IconButton>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://twitter.com/nosnownaples/"><TwitterIcon /></Link></IconButton>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.instagram.com/nosnownaples/"><InstagramIcon /></Link></IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor={mdDown?"bottom":"left"} open={state} onClose={()=>setState(false)} 
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