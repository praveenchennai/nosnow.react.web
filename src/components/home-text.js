import React from 'react';
import { Grid, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme();


const HomeBottomText = (props) => {
    const xsUp = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <React.Fragment>
        {xsUp?<Grid container item md={12}
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
        </Grid>:''}
        </React.Fragment>
    )
}

export default HomeBottomText;