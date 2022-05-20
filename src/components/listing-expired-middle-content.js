import React, {useState} from 'react';
import { Grid, Button, Stack, Dialog, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import ContactPopUp from './contact/contact-popup';

const theme = createTheme();

const ListingExpiredMiddleContent = (props) => {
    const [popUp, setPopUp] = useState(false);

    var value = {
        popUp: popUp,
        setPopUp: setPopUp
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
                            Your listing not getting any traction? 
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('xl')]: {
                                    fontSize: "30px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Feel like giving up? Don't!
                        </Typography>
                    </Grid>
                    <Grid container item md={5} xs={1}/>
                    <Grid container item md={5} xs={10}>
                        <Typography
                            sx={{
                                marginTop: "30px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Let's talk about sales and pricing strategy.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            It's often the simple things - like pricing and a solid marketing strategy to move a home. Let's take a deep dive and see where things might have been missed.
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: "30px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Are you competing in the right space?
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Listing your home is such a personal experience. It's easy to look at your home in a different way than a typical buyer does. We can help bring clarity and help you complete with the right comparables.
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: "30px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Focus on what really matters.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Most buyers ultimately decide on a property because of the location, neighborhood, and lifestyle choices - not granite countertops and paint.
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: "30px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Barking up the wrong tree?
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Most marketing takes a cookie-cutter approach that tends to spend marketing dollars in all the wrong places. Let's create a strategy and ensure maximum impact for your money.
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: "30px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Never split the difference.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                
                                color: "#fff!important",
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Negotiating can be a tough exercise sometimes. Our responsive and experienced team brings know-how and the right tactics to the table.
                        </Typography>
                    <Grid container item md={12}>
                    <Button 
                        color="warning" 
                        variant='contained'
                        onClick={()=>setPopUp(true)}
                        sx={{
                            marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >Get Listed</Button>
                    </Grid>
                    
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
        </React.Fragment>
        
    )
}

export default ListingExpiredMiddleContent;