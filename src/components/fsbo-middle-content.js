import React, {useState} from 'react';
import { Grid, Button, Stack, Dialog, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import ContactPopUp from './contact/contact-popup';

const theme = createTheme();

const FsboMiddleContent = (props) => {
    const [popUp, setPopUp] = useState(false);

    var value = {
        popUp: popUp,
        setPopUp: setPopUp,
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
                            Sure, you can try to handle the sale of your home yourself. 
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
                            After all, you get to keep more money that way. Right?
                        </Typography>
                    </Grid>
                    <Grid container item md={5} xs={1}/>
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
                            Are you really keeping the most net dollars?
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
                            Sure, commissions do cut into your profit...but the question is how big is the profit in the first place? In most cases, we can get you more net dollars by listing with us. We also listed a property for $1,500,000 and sold it for $1,835,000. That's a 16.2% increase after commissions.
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
                            Do you know the right price strategy?
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
                            Listing your home in such a personal experience. It's easy to over - or undervalue your home and either sell it too fast for too little or sit on your listing too long due to the wrong pricing. We can help you price it just right.
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
                            Are you presenting your property in the right light?
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
                            Taking your own protos and writing your own description might save you some dollars - but potential buyers can usually spot it right away. Having the right team take care of these things for you is a very valuable investment to get you top dollar.
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
                            Anybody knows how to market, right?
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
                            Sure, you can post on Facebook and create some flyers. But will those work? The professional marketing team at the Parlante Group has the experience and strategy to get your listing the attention you deserve.
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
                            Have you thought of the buyer and what they need?
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
                            Buyers get the services of real estate professional for free. Agents know the entire inventory versus only one home. They will comparison shop for the buyer, give advice, negotiate the contract, handle inspections, closings & escrow all for free. The question becomes why would a buyer want to take that on?
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

export default FsboMiddleContent;