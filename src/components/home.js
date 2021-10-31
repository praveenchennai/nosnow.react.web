import React from 'react';
import { Card, CardMedia, CardContent, Typography, Link} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createOverrides from './theme';

const baseTheme = createTheme();

const useStyles = makeStyles({
    root: {
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: 'white',
      height: "100vh"
    },
});

const Home = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ThemeProvider theme={{...baseTheme, overrides: createOverrides(baseTheme)}}>
                <Card>
                    <CardMedia 
                        className={classes.root}
                        component="img"
                        src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/rickhome.webp"
                        alt="Rick Parlante"
                    />

                    <CardContent className={'MuiCardContent-root'}>
                        <Typography
                        className={'MuiTypography--heading'}
                        color={'inherit'}
                        variant={'h3'}
                        gutterBottom
                        >
                            RICK
                        </Typography>
                        <Typography className={'MuiTypography--subheading'} color={'inherit'}>
                            The space between the stars and galaxies is largely empty.
                        </Typography>
                        <Typography
                            className={'MuiTypography--explore'}
                            color={'inherit'}
                            variant={'caption'}
                        >
                            <Link color={'inherit'} underline={'none'}>EXPLORE</Link>
                        </Typography>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Home;