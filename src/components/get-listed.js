import React, {useState} from 'react';
import { Paper, Grid, Button, Stack, Typography, Dialog, Snackbar} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import  HomeBottomText from "./home-text";
import ContactPopUp from './contact/contact-popup';
import MiddleContent from './middle-content'

const theme = createTheme();

const Home = (props) => {
    const [popUp, setPopUp] = useState(false);
    const [snackBar, setSnackBar] = useState(false);

    var value = {
        popUp: popUp,
        setPopUp: setPopUp,
        snackBar: snackBar,
        setSnackBar: setSnackBar
    }
    
    const handleClose = () =>{
        setSnackBar(false)
    }

    return (
        <React.Fragment>
            <Stack
                direction="column" 
                spacing={3}
                alignItems="center" 
                sx={{
                    height: "100vh",
                    backgroundColor: "#000"
                }}
            >
                <Paper 
                    sx={{
                        backgroundImage: "url(https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/list.webp)",
                        minHeight: "100vh",
                        backgroundRepeat: "no-repeat",
                        opacity: ".5",
                        width: "100%",
                        height: "100%",
                        backgroundPositionY: "-50px",
                        [theme.breakpoints.down('sm')]: {
                            backgroundPositionX: "-250px"
                        }
                    }}
                />
                <Grid container item md={12}
                    sx={{
                        position: 'absolute',
                        top: 280,
                        [theme.breakpoints.down('sm')]: {
                            top: 100,
                        }
                    }}
                >
                    <Grid container item md={5} xs={1}/>
                    <Grid container item md={5} xs={10}>
                        <Typography
                            sx={{
                                fontSize: "50px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('xl')]: {
                                    fontSize: "30px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Robust strategies and support that sets your listing apart.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            A team of experts specializing in supporting you - the seller.
                        </Typography>
                    </Grid>
                    <Grid container item md={2} />
                </Grid>
                <Grid container item md={12}
                    sx={{
                        position: 'absolute',
                        top: 480
                    }}
                >
                    <Grid container item md={5} xs={1}/>
                    <Grid container item md={5} xs={10} spacing={2}>
                        <Grid container item md={4}>
                            <Button 
                                fullWidth 
                                color="warning" 
                                variant='contained'
                                onClick={()=>setPopUp(true)}
                                >
                                Get Listed
                            </Button>
                        </Grid>
                        <Grid container item md={4}>
                            <Button 
                                fullWidth 
                                color="primary" 
                                variant='contained'
                                target="_blank" href="http://www.nosnownaples.com"
                            >
                                Browse Properties
                            </Button>
                        </Grid>
                        <Grid container item md={4}>                            
                            <Button 
                                fullWidth 
                                color="warning" 
                                variant='contained'
                                target="_blank" href="http://www.nosnowevalue.com/"
                            >
                                What's your home worth?
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container item md={2} />
                </Grid>
                <HomeBottomText />
            </Stack>
            <MiddleContent value={{page: 'get-listed'}}/>
            <Dialog 
                onClose={()=>setPopUp(false)} 
                open={popUp}
                scroll={"body"}
            >
                <ContactPopUp {...value}/>
            </Dialog>
            <Snackbar  open={snackBar}  autoHideDuration={3000}  onClose={handleClose}  message="Thank you for your Comments/Question. We will contact you shortly!!" />
        </React.Fragment>
        
    )
}

export default Home;