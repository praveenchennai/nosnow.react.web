import React, {useState} from 'react';
import { Grid, Button, Stack, Dialog, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import ContactPopUp from './contact/contact-popup';

const theme = createTheme();

const GetListedMiddleContent = (props) => {
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
                            How are our listings different?
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
                            The right pricing.
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
                            We don't determine the price. They buyers do. 80% of the successful marketing of your home happens when you set the price right.
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
                            Correct analysis of comparables and recent sales.
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
                            We don't just take a random average of your zip code or neighborhoods around your property. We compare Apples to Apples and consider a wide range of factors to determine the right strategy for your listings.
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
                            No "Autopilot Marketing"
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
                            We go beyond lawn-signs, newspaper, open houses, and MLS listings.We believe marketing should be clearly measurable... not just based on home and luck.
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

export default GetListedMiddleContent;