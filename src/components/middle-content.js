import React, {useState} from 'react';
import { Grid, Button, Stack, Dialog, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import ContactPopUp from './contact/contact-popup';
import { useContentQuery } from 'services/content';

const theme = createTheme();

const MiddleContent = (props) => {
    const [popUp, setPopUp] = useState(false);
    const { page }= props.value;
    var value = {
        popUp: popUp,
        setPopUp: setPopUp
    }

    const {content} = useContentQuery({
        name: page
    }, {
        skip: !page,
        selectFromResult: ({ data, status }) =>({
            content: data || []
        })
    })
  
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
                    <Grid container item md={4} xs={1}/>
                    <Grid container item md={5} xs={10}>
                        <Grid container item direction={"column"} md={12}
                            sx={{
                                marginTop: "30px"
                            }}
                        >
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
                                {content?.title || ''}
                            </Typography>
                            <Typography
                                fullWidth
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
                                {content?.title2 || ''}
                            </Typography>
                        </Grid>
                        {content?.para?.map((c, i)=>
                            <React.Fragment key={i}>
                                {c.title?
                                    <React.Fragment>
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
                                            {c.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                marginTop: "20px",
                                                fontSize: "16px",
                                                color: "#fff!important",
                                                [theme.breakpoints.down('lg')]: {
                                                    fontSize: "16px",
                                                    fontWeight: "bold"
                                                }
                                            }}
                                        >
                                            {c.content}
                                        </Typography>
                                    </React.Fragment>
                                :
                                    <Typography
                                        sx={{
                                            marginTop: "20px",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            color: "#fff!important",
                                            [theme.breakpoints.down('lg')]: {
                                                fontSize: "16px",
                                                fontWeight: "bold"
                                            }
                                        }}
                                    >
                                        {c}
                                    </Typography>
                                }
                            </React.Fragment>
                        )}
                        <Grid container item md={12}>
                            <Button 
                                color="warning" 
                                variant='contained'
                                onClick={()=>setPopUp(true)}
                                sx={{
                                    margin: "20px"
                                }}
                            >Get Listed</Button>
                        </Grid>
                    </Grid>
                    <Grid container item md={3} xs={1}/>
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

export default MiddleContent;