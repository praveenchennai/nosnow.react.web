import React, {useState} from 'react';
import { Grid, Button, Stack, Dialog, Snackbar, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import ContactPopUp from './contact/contact-popup';

const theme = createTheme();

const MiddleContent = (props) => {
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
                    backgroundColor: "#404040"
                }}
            >
                <Grid container item md={12}>
                    <Grid container item md={5} xs={1}/>
                    <Grid container item md={5} xs={10}>
                        <Typography
                            sx={{
                                marginTop: "30px",
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('xl')]: {
                                    fontSize: "30px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Tried of the cookie*-cutter real estate sales approach?
                        </Typography>
                    <Typography
                        sx={{
                            marginTop: "20px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('lg')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        Yard signs, open houses, some flyers, MLS Listing...
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "20px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('lg')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        ...here is to hoping the right buyer will stumble in and fall in love with the over-hyped countertops in the property description.
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "20px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('lg')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        What's the REAL reason buyers end up buying your house? 
                    </Typography>
                    <Grid container item md={12}>
                    <Button 
                        color="warning" 
                        variant='contained'
                        onClick={()=>setPopUp(true)}
                        sx={{
                            marginTop: "20px"
                        }}
                    >Get Listed</Button>
                    </Grid>
                    <Typography
                        sx={{
                            marginTop: "20px",
                            paddingBottom: "20px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#fff!important",
                            [theme.breakpoints.down('lg')]: {
                                fontSize: "16px",
                                fontWeight: "bold"
                            }
                        }}
                    >
                        *speaking of cookies... don't get us started on the fresh baked cookies smell at the open house that will magically get people to buy
                    </Typography>
                    </Grid>
                    <Grid container item md={2} xs={1}/>
                </Grid>
            </Stack>
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

export default MiddleContent;