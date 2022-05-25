import React from 'react';
import { Paper, Grid, Button, Stack, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import  HomeBottomText from "./home-text";
import FsboMiddleContent from './fsbo-middle-content'
const theme = createTheme();

const Fsbo = (props) => {
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
                        backgroundImage: "url(https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/fsbo.webp)",
                        minHeight: "100vh",
                        backgroundRepeat: "no-repeat",
                        opacity: ".5",
                        width: "100%",
                        height: "100%",
                        backgroundPositionY: "-440px",
                        backgroundPositionX: "-340px",
                        [theme.breakpoints.down('sm')]: {
                            backgroundPositionX: "-440px"
                        }
                    }}
                />
                <Grid container item md={12}
                    sx={{
                        position: 'absolute',
                        top: 150,
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
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "30px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Keeping more cash in your pocket. Or will it?
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Helping sellers decide it For Sale by Owner is the right strategy.
                        </Typography>
                    </Grid>
                    <Grid container item md={2} xs={1}/>
                </Grid>
                <Grid container item md={12}
                    sx={{
                        position: 'absolute',
                        top: 350
                    }}
                >
                    <Grid container item md={5} xs={1}/>
                    <Grid container item md={5} spacing={2} xs={10}>
                        <Grid container item md={4}>
                            <Button fullWidth color="warning" variant='contained'>Get Listed</Button>
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
                    <Grid container item md={2} xs={1}/>
                </Grid>
                <HomeBottomText />
            </Stack>
            <FsboMiddleContent />
        </React.Fragment>
        
    )
}

export default Fsbo;