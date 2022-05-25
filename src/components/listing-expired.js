import React from 'react';
import { Paper, Grid, Button, Stack, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import  HomeBottomText from "./home-text";
import ListingExpiredMiddleContent from './listing-expired-middle-content'

const theme = createTheme();

const Home = (props) => {
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
                        backgroundImage: "url(https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/expired.webp)",
                        minHeight: "100vh",
                        backgroundRepeat: "no-repeat",
                        opacity: ".5",
                        width: "100%",
                        height: "100%",
                        [theme.breakpoints.down('sm')]: {
                            backgroundPositionX: "-700px"
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
                            Boost your listing to finally attract the right buyer.
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
                            Revive your expired listing and get the traffic you deserve.
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
                            >
                                Get Listed
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
            <ListingExpiredMiddleContent />
        </React.Fragment>
        
    )
}

export default Home;