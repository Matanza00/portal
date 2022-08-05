import React from 'react'
import video from '../assets/Overly_Trim.mp4'
import './login.scss'
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Button, Paper, Avatar, TextField, FormControlLabel, Checkbox, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const theme = createTheme({
  palette: {
    primary: {
      main: '#69BADD',
    },
    secondary: {
      main: '#001B2E',
    },
  }
});
const Login = () => {
  return ( 
    <div className="login">
      <div className='overlay'></div>
      <video className='video' src={video} autoPlay loop muted/>
          <ThemeProvider theme={theme}>
          <Paper elevation={10} className='paper'>
            <Avatar className='avatar'><LockOutlinedIcon className='icon'/></Avatar>
            <h1>Sign In</h1>
            <TextField className='txtf' color='primary' label='Username' fullWidth required placeholder=' Enter Username' />
            <TextField className='txtf' label='Password' fullWidth required placeholder=' Enter Password' type='password'/>
            <FormControlLabel 
              control={
                <Checkbox
                  name='checkedB'
                  color='primary'
                  />
              }
              label='Remember Me'
            />
            <p to='/home' style={{textDecoration:'none'}}>
            <Link to='/home' style={{textDecoration:'none'}}>
            <Button className='btn' type='submit' color='primary' fullWidth variant='contained'>Sign In</Button>
            </Link>
            </p>
            <Typography>
              Forgot Password?
            </Typography>
          </Paper>
          </ThemeProvider>
    </div>
  )
}

export default Login