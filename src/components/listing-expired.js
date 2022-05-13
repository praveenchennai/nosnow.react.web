import React from 'react';
import { Paper, Grid, Button, Stack, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";

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
                        backgroundImage: "url(https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/list.webp)",
                        minHeight: "100vh",
                        backgroundRepeat: "no-repeat",
                        opacity: ".5",
                        width: "100%",
                        height: "100%",
                        backgroundPositionY: "-140px"
                    }}
                />
                <Grid container item md={12}
                    sx={{
                        position: 'absolute',
                        top: 150
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
                        top: 350
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
                    </Grid>
                    <Grid container item md={2} />
                </Grid>
                <Grid container item md={12}
                    sx={{
                        position: 'absolute',
                        bottom: 50
                    }}
                >
                    <Grid container item md={2} />
                    <Grid container item md={2}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    margin: "10px"
                                }
                            }}
                            align="center"
                        >
                            Advanced MLS tools to help buyers find your property
                        </Typography>
                    </Grid>
                    <Grid container item md={1} />
                    <Grid container item md={2}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    margin: "10px"
                                }
                            }}
                            align="center"
                        >
                            Clear and consistent communication to keep you in the loop
                        </Typography>
                    </Grid>
                    <Grid container item md={1} />
                    <Grid container item md={2}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    margin: "10px"
                                }
                            }}
                            align="center"
                        >
                            Marketing that makes and keeps you more net profit
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Stack>
        </React.Fragment>
        
    )
}

export default Home;