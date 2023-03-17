import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import Button  from '@mui/material/Button';
import Gif3 from '../images/login.gif';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';


const Blackbtn = styled(Button)({
  background: '#ee4878',
  color: '#fff',
  border:'black',
  "&:hover":{ background:'#fff',color:'#ee4878'}
})

const Login = () => {
  return (
   <>
  <div className='login'>
   <div>
<img src={Gif3} className="gifi2mg" alt="gif"/>
</div>
   <div className='container-login'>
    <Box className="loginbox">
    <Avatar
  alt="Remy Sharp"
  src="https://i.pravatar.cc/150?img=12 "
  sx={{ width: 100, height: 100 }}
/>
<h2>Login your Account</h2>
       <div className='textin'>
       
      <TextField id="outlined-basic" label="Username" variant="outlined" color='error' className="Textfield" sx={{ marginTop:'20px',color:'#fff'}}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" color='error' className="Textfield" sx={{ marginTop:'20px'}}/>
      </div>
      
      <Link to={'/Hosting'} className={'logbtn'}><Blackbtn variant="contained" color='common' className='linkbtn' >Login</Blackbtn></Link>
      <h6>if you don`t have account  signup first</h6>
    </Box>
   
</div>


<div className="-signin">
<h1>Are You New To Zcloud</h1>
<h5>first sign up your account</h5>
<NavLink to={'/Signup'} className={'logbtn'}><Blackbtn variant="contained" color='common' >Signup</Blackbtn></NavLink>

</div>
</div>
   </>
  )
}

export default Login