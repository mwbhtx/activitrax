import React, { useEffect, useState } from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import './login.css'
import stravaLoginButton from '../../assets/btn_strava_connectwith_orange@2x.png'
import activitraxLogo from '../../assets/activitrax-logo-5-1x.webp'
import poweredByStravaLogo from '../../assets/api_logo_pwrdBy_strava_stack_white.png'
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function Login(props) {
  return (
    <>
      <UserLoginForm/>
    </>
  );
}

function UserLoginForm(props) {

  return (
    <>
    <Box className="userLoginFormContainer">
      <Card className="userLoginForm">
        <img alt="" id="activitraxLogoImg" src={activitraxLogo}/>
        <span style={{fontFamily: "var(--font-family-3)", fontSize: "2em", fontWeight: "600"}}>activitrax.io</span>
        <span style={{fontFamily: "var(--font-family-3)", fontSize: "1em", maxWidth: "16em", whiteSpace: "wrap", fontWeight: "200"}}>Synchronize your Strava activities with your favorite music streaming service.</span>
        <Outlet/>
      </Card>
    
    <img alt="" className="buttonImage" style={{marginTop: "2rem"}} src={poweredByStravaLogo}></img>
    </Box>
    </>
  );
}

export function CreateAccountForm() {

  const [isLoading, setLoading] = useState(false);
  
  const [formObjects, setFormErrors] = useState({
    fname: {
      value: "",
      helper: "",
      error: false,
    },
    lname: {
      value: "",
      helper: "",
      error: false,
    },
    email: {
      value: "",
      helper: "",
      error: false,
    },
    pass: {
      value: "",
      helper: "",
      error: false,
    },
    passConfirm: {
      value: "",
      helper: "",
      error: false,
    }
  })

  const handleSubmit = (event) => {

    // disable default submit actions
    event.preventDefault()

    if (formFieldsValid()) {

    // enabled loading circle
    setLoading(true)

    // Make a request for a user with a given ID
    axios.post('http://localhost:8080/api/user-create', {
        firstName: formObjects.fname.value,
        lastName: formObjects.lname.value,
        email: formObjects.email.value,
        password: formObjects.pass.value,
    })
    .then(function (response) {
    // handle success
    })
    .catch(function (error) {
    // handle error

    })
    .then(function () {
    // always executed
    setLoading(false);
    });
    }
  }

  const validateName = (name) => {

    var error;
    var helperMessage;

    if (name == "") {
      error = true; 
      helperMessage = "Name field is required";
    } else if (name.length > 35) {
      error = true; 
      helperMessage = "Name field too long";
    }

    return [error, helperMessage];
  }
  
  const validateEmail = (email) => {

    var error = false;
    var helperMessage;

    const regPattern = RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    if (!regPattern.test(email)) {
      error = true;
      helperMessage = 'enter a valid email';
    } 
    return [error, helperMessage];
  }
  
  const validatePassword = (pass) => {
    var error = false;
    var helperMessage;
    const regPattern = RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
    if (!regPattern.test(pass)) {
      
      error = true;
      helperMessage = 'password not complex enough.';

    }
    return [error, helperMessage];
  }
  
  const validatePasswordConfirmation = (pass1, pass2) => {
    var error = false;
    var helperMessage;
    if (pass1 != pass2) {
      error = true;
      helperMessage = 'passwords do not match.'
    }
    return [error, helperMessage];
  }

  const formFieldsValid = () => {
    if (
      formObjects.fname.error 
      || formObjects.lname.error
      || formObjects.email.error
      || formObjects.pass.error
      || formObjects.passConfirm.error
      ) {
        return false;
      } else {
        return true;
      }
  }

  const setFormObject = (newValue, newErrorState, newHelperMessage, objectNameKey) => {
    setFormErrors((prevState) => ({
      ...prevState,
      [objectNameKey]: {
        value: newValue,
        helper: newHelperMessage,
        error: newErrorState,
      }
    }))
  }

  const fnameHandler = (e) => {
    var value = e.target.value;
    var [error, message] = validateName(value);
    setFormObject(value, error, message, 'fname');
  }

  const lnameHandler = (e) => {
    var value = e.target.value;
    var [error, message] = validateName(value);
    setFormObject(value, error, message, 'lname');
  }

  const emailHandler = (e) => {
    var value = e.target.value;
    var [error, message] = validateEmail(value);
    setFormObject(value, error, message, 'email');
  }

  const passHandler = (e) => {
    var value = e.target.value;
    var [error, message] = validatePassword(value);
    setFormObject(value, error, message, 'pass');
  }

  const passConfirmHandler = (e) => {
    var value = e.target.value;
    var [error, message] = validatePasswordConfirmation(value, formObjects.pass.value);
    setFormObject(value, error, message, 'passConfirm');
  }

  return (
    <>
    <form className="formContainer" onSubmit={handleSubmit}>
        <TextField helperText={formObjects.fname.helper} onChange={(e) => fnameHandler(e)} error={formObjects.fname.error} required fullWidth type="name" size="small" label="first name" variant="outlined" />
        <TextField helperText={formObjects.lname.helper} onChange={(e) => lnameHandler(e)} error={formObjects.lname.error} required fullWidth type="name" size="small" label="last name" variant="outlined" />
        <TextField helperText={formObjects.email.helper} onChange={(e) => emailHandler(e)} error={formObjects.email.error} required fullWidth type="email" size="small" label="email" variant="outlined" />
        <TextField helperText={formObjects.pass.helper} onChange={(e) => passHandler(e)} error={formObjects.pass.error} required fullWidth type="password" size="small" label="password" variant="outlined" />
        <TextField helperText={formObjects.passConfirm.helper} value={formObjects.passConfirm.value} onChange={(e) => passConfirmHandler(e)} error={formObjects.passConfirm.error} required fullWidth type="password" size="small" label="confirm password" variant="outlined" />
        {isLoading ? <CircularProgress/> : <Button type="submit" margin="normal" fullWidth variant="contained">Create Account</Button>}
    </form>
        <div>
        <span>Already a member? <br/></span>
        <Link component={RouterLink} to="/" variant="body2" ahref="/">sign in</Link>
        </div>
    </>
  )
}

export function SignInForm() {
  return (
    <>
    <form className="formContainer">
        <TextField fullWidth type="email" size="small" id="outlined-basic" label="email" variant="outlined" />
        <TextField fullWidth type="password" size="small" id="outlined-basic" label="password" variant="outlined" />
        <Button fullWidth variant="contained">Sign In</Button>
    </form>

      <div>
      <span>Not a member yet?<br/></span>
      <Link component={RouterLink} to="/register" variant="body2" ahref="/register">create an account</Link>
      </div>
    </>
  )
}