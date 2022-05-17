import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import { TextField, Paper , Toolbar, AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import * as service from '../../service';
import * as googleService from '../../services/google';
import { setRegister } from 'api/auth';
const useStyles = makeStyles(listingCss());

const ContactPopUp = (props) => { 
    const {setPopUp, setSnackBar} = props;
    const classes = useStyles();
    const register = useSelector(state=>state.auth.register);
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(true);

    useEffect(()=>{
        if(register.firstName.length>0 && register.lastName.length>0 && register.email.length>0 && register.phone_number.length>0){
            setDisableButton(false)
        }
    }, [register])

    const onFirstNameChange = (event) =>{
        dispatch(setRegister({firstName: event.target.value}))
    }

    const onLastNameChange = (event) =>{
        dispatch(setRegister({lastName: event.target.value}))
    }

    const onEmailChange = (event) =>{
        dispatch(setRegister({email: event.target.value}))
    }

    const onPhoneChange = (event) =>{
        if(register.phone.length<11){
            dispatch(setRegister({phone: event.target.value}));
            dispatch(setRegister({phone_number: `+1${event.target.value}`}));
        }
    }

    const onZipChange = (event) =>{
        console.log(event.target.value)
        if(event.target.value.length===5){
            dispatch(setRegister({zip: event.target.value}))
            googleService.getAddressByZipGoogle(event.target.value)
            .then(result=>{
                console.log(result)
                dispatch(setRegister({address: result.address}));
            })
            .catch(error=>{
                console.log(error)
            })
        } else {
            dispatch(setRegister({zip: event.target.value}))
        }
        
    }

    const onTaxChange = (event) =>{
        dispatch(setRegister({taxId: event.target.value}))
    }

    const onAddressChange = (event) =>{
        var address = {
            ...register.address,
            streetName: event.target.value
        }
        dispatch(setRegister({address: address}))
    }

    const onSend = () =>{
        setLoading(true);
        setDisableButton(true);
        service.register(register)
        .then(result=>{
            console.log(result)
            setSnackBar(true)
        })
        .catch(error=>{
            if(error==='UsernameExistsException'){
            }
        })
    }

    

return ( 
    <React.Fragment>
        <AppBar position="sticky" elevation={0} className={classes.appbar_site}>
            <Toolbar>
                <Typography variant="h6"
                    sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        flexGrow: 1
                    }}
                >I’m interested in learning more about selling</Typography>
                <Button 
                    variant="contained" 
                    className={[classes.btn_orange, classes.mt10].join(' ')}
                    onClick={()=>{
                        setPopUp(false);
                    }}
                >Close</Button>
            </Toolbar>
        </AppBar>
        <Paper elevation={0} sx={{
            padding: "40px",
            minHeight: "200px"
        }}>
            {register.zip?.length===5?
                <React.Fragment>
                    <TextField 
                        variant="outlined" 
                        type="text" 
                        fullWidth
                        margin="normal" 
                        label="First Name *"
                        placeholder="Enter your first name"
                        name="firstName" 
                        onChange={onFirstNameChange}
                        value={register.firstName || ''} 
                    />
                    <TextField 
                        variant="outlined" 
                        type="text" 
                        fullWidth
                        margin="normal" 
                        label="Last Name *"
                        placeholder="Enter your last name"
                        name="lastName" 
                        onChange={onLastNameChange}
                        value={register.lastName || ''} 
                    />
                    <TextField 
                        variant="outlined" 
                        type="text" 
                        fullWidth
                        margin="normal" 
                        label="E-Mail *"
                        placeholder="Enter your email address"
                        name="email" 
                        onChange={onEmailChange}
                        value={register.email || ''} 
                    />
                    <TextField 
                        variant="outlined" 
                        type="number" 
                        fullWidth
                        margin="normal" 
                        label="Phone *"
                        placeholder="Enter your Phone Number"
                        name="phone" 
                        onChange={onPhoneChange}
                        value={register.phone || ''}  
                    />

                    <TextField 
                        variant="outlined" 
                        type="text" 
                        fullWidth
                        margin="normal" 
                        label="Tax ID# (if you have it)"
                        placeholder="Enter your Tax ID# (if you have it)"
                        name="taxId" 
                        onChange={onTaxChange}
                        value={register.taxId || ''}  
                    />

                    <TextField 
                        variant="outlined" 
                        type="text" 
                        fullWidth
                        margin="normal" 
                        label="Address *"
                        placeholder="Enter your Appartment Number, Street Name of Property"
                        name="streetName" 
                        onChange={onAddressChange}
                        value={register.address?.streetName || ''}  
                    />
                    
                    {register.address?.city || register.address?.state ? 
                        <Typography variant="body1">{`${register.address?.city} ${register.address?.state}, ${register.address?.zipCode} United States`}</Typography>
                        : 
                        ""
                    }
                </React.Fragment>
            :
                <React.Fragment>
                    <TextField 
                        variant="outlined" 
                        type="number" 
                        fullWidth
                        margin="normal" 
                        label="Zip Code *"
                        placeholder="Enter your Zipcode of Property"
                        name="zip" 
                        onChange={onZipChange}
                        value={register.zip || ''} 
                        sx={{
                            marginTop: "30px"
                        }} 
                    />
                </React.Fragment>
        }
            
        
            <Button 
                color={"primary"}
                sx={{
                    fontSize: "14px",
                    backgroundColor: "#ED6C02",
                    color: "#fff",
                    marginTop: "30px",
                    marginBottom: "10px",
                    "&:hover":{
                        backgroundColor: "#ED6C02",
                        color: "#fff"
                    },
                    "&:disabled": {
                        backgroundColor: "#939393de",
                        color: "#dfdcdcde"
                    }
                    
                }}
                size={'large'}
                fullWidth
                onClick={(()=>onSend())}
                disabled={disableButton || loading}
            >
                {loading?'Please Wait...' : 'Send'}
            </Button>
        </Paper>
    </React.Fragment>

)}

export default ContactPopUp;