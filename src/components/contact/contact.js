import React, {useState} from 'react';
import { Grid, Button, Snackbar, CardMedia, CardHeader, Card, Typography, Avatar, Dialog } from '@mui/material';
import ContactPopUp from './contact-popup';
import SharePopUp from './share-popup';

const ContactCard = () => {

    const [popUp, setPopUp] = useState(false);
    const [sharePopUp, setSharePopUp] = useState(false);
    const [snackBar, setSnackBar] = useState(false);
    const [shareSnackBar, setShareSnackBar] = useState(false);
    
    var value = {
        popUp: popUp,
        setPopUp: setPopUp,
        snackBar: snackBar,
        setSnackBar: setSnackBar,
        sharePopUp: sharePopUp,
        setSharePopUp: setSharePopUp,
        shareSnackBar: shareSnackBar, 
        setShareSnackBar: setShareSnackBar
    }
    
    const handleClose = () =>{
        setSnackBar(false)
    }
    
    const handleShareClose = () =>{
        setShareSnackBar(false)
    }

    
    return ( 
            <Card display="flex" direction={'column'}
                sx={{
                    position: 'absolute',
                    width: "350px",
                    top: '74px',
                    right: '10px',
                    height: "300px",
                    zIndex: "1000"
                }}
            >
                <Typography 
                    sx={{
                        fontSize: "14px", 
                        fontWeight: "700",
                        paddingLeft: "10px",
                        paddingTop: "10px"
                    }}
                >
                    YOUR REAL ESTATE EXPERT
                </Typography>
                <CardHeader 
                    avatar={
                        <Avatar>
                            <CardMedia
                                component="img"
                                height="40"
                                width="40"
                                src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/profile.webp"
                                alt="Rick Palante Profile"
                            />
                        </Avatar>
                    }
                    title={"Richard Parlante"}
                    subheader={"Naples, FLorida"}>
                </CardHeader>

                <Grid container item md={12} alignItems="center" direction="column" justifyContent="space-between"
                    sx={{
                        padding: "5px"
                    }}
                > 
                    
                </Grid>

            <Grid container item md={12} display="flex" direction="column"
                sx={{
                    padding: "10px!important",
                    right: 0
                }}
            >
                <Typography 
                    sx={{
                        fontSize: "14px"
                    }}
                >
                    Rick & Chris Parlante are professional real estate agents specializing in the South West Florida real estate market.
                </Typography>
            </Grid>
            <Grid container item md={12} display="flex" direction="column"
                sx={{
                    padding: "10px!important",
                    right: 0
                }}
            >
                <Button 
                    color={"primary"}
                    sx={{
                        fontSize: "14px",
                        backgroundColor: "#ED6C02",
                        color: "#fff",
                        "&:hover":{
                            backgroundColor: "#ED6C02",
                            color: "#fff"
                        }
                        
                    }}
                    onClick={()=>setPopUp(true)}
                >
                    Request Info
                </Button>
                <Button 
                    color={"primary"}
                    sx={{
                        fontSize: "14px",
                        marginTop: "10px",
                        backgroundColor: "#ED6C02",
                        color: "#fff",
                        "&:hover":{
                            backgroundColor: "#ED6C02",
                            color: "#fff"
                        }
                        
                    }}
                    onClick={()=>setSharePopUp(true)}
                >
                    Send to Friend
                </Button>
            </Grid>
            <Dialog 
                onClose={()=>setPopUp(false)} 
                open={popUp}
                scroll={"body"}
                
            >
                <ContactPopUp {...value}/>
            </Dialog>
            <Snackbar  open={snackBar}  autoHideDuration={3000}  onClose={handleClose}  message="Thank you for your interest. We will contact you shortly!!" />
        </Card>
    );
}

export default ContactCard;