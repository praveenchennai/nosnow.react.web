import React from 'react';
import { Card, Paper, Grid, Button, Stack, CardContent, Typography, Divider} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from "@mui/material/styles";
import Page1 from './page1'


const theme = createTheme();

const useStyles = makeStyles(()=>({
    root: {
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: 'white',
      width: "100vw",
      top: 0,
    },
    page1: {
        position: "relative",
        top: "-120px"
    },
    lastName:{
        paddingLeft: "90px",
        color: "#000",
        fontSize: "90px",
        [theme.breakpoints.down('md')]: {
            fontSize: "40px",
            fontWeight: "bold",
            paddingLeft: "20px",
        },
    },
    heading1:{
        position: 'absolute',
        top: 150
    },
    para:{
        [theme.breakpoints.down('md')]: {
            position: 'inherit',
            fontSize: "20px",
            fontWeight: "bold",
            //padding: "10px",
            margin: "0px",
            width: "100vw",
        },
        [theme.breakpoints.down('xl')]: {
            display: 'none'
        },
        position: 'absolute',
        top: 440,
        backgroundColor: "#fff",
        opacity: 0.8,
        padding: "10px",
        margin: "20px",
        width: "40%"
    },
    line: {
        borderWidth: "3px",
        borderColor: "#B91224!important"
    },
    title: {
        fontSize: "50px",
        fontWeight: "bold",
        color: "#fff!important",
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
            fontWeight: "bold"
        }
    },
    pt10: {
        paddingTop: "10px",
        textAlign: "justify"
    },
    para1: {
        paddingTop: "10px",
        textAlign: "justify",
        color: "#000"
    }

}));

const Home = (props) => {
    const classes = useStyles();
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
                        backgroundImage: "url(https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/listinghome.webp)",
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
                    <Grid container item md={5} />
                    <Grid container item md={5} >
                        <Typography
                            sx={{
                                fontSize: "50px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Sell your Naples property for the best profit and at the right time.
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
                            Southwest Florida Real Estate Team specilizing in supporting the Seller.
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
                    <Grid container item md={5} />
                    <Grid container item md={5} spacing={2}>
                        <Grid container item md={4}>
                            <Button fullWidth color="warning" variant='contained'>Get Listed</Button>
                        </Grid>
                        <Grid container item md={4}>
                            <Button fullWidth color="primary" variant='contained'>Browse Properties</Button>
                        </Grid>
                        <Grid container item md={4}>                            
                            <Button fullWidth color="warning" variant='contained'>What's your home worth?</Button>
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
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Advanced MLS tools to help buyers find your property
                        </Typography>
                    </Grid>
                    <Grid container item md={1} />
                    <Grid container item md={2} >
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            Clear and consistent communication to keep you in the loop
                        </Typography>
                    </Grid>
                    <Grid container item md={1} />
                    <Grid container item md={2} >
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                [theme.breakpoints.down('md')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
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