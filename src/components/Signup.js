import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';
import Button  from '@mui/material/Button';
import Gif3 from '../images/login.gif';
import Gif4 from '../images/signup.gif';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';


const Blackbtn = styled(Button)({
  background: '#ee4878',
  color: '#fff',
  border:'black',
  "&:hover":{ background:'#fff',color:'#ee4878'}
})

const Signup = () => {
  return (
   <>
  <div className='signup'>
   <div>
<img src={Gif3} className="gifi2mg" alt="gif"/>
</div>
   <div className='container-signup'>
    <Box className="signupbox">
    <Avatar
  alt="Remy Sharp"
  src="https://i.pravatar.cc/150?img=12 "
  sx={{ width: 100, height: 100 }}
/>
<h2>Login your Account</h2>
       <div className='textin'>
       
      <TextField id="outlined-basic" label="Username" variant="outlined" color='error' className="Textfield" sx={{ marginTop:'20px',color:'#fff'}}/>
      <TextField id="outlined-basic" label="E-mail" variant="outlined" color='error' className="Textfield" sx={{ marginTop:'20px'}}/>
      <TextField id="outlined-basic" label=" New password" variant="outlined" color='error' className="Textfield" sx={{ marginTop:'20px',color:'#fff'}}/>
      <TextField id="outlined-basic" label=" Confirm Password" variant="outlined" color='error' className="Textfield" sx={{ marginTop:'20px'}}/>
      </div>
      
      <NavLink to={'/Hosting'} className={'logbtn'}><Blackbtn variant="contained" color='common' className='linkbtn' >Submit</Blackbtn></NavLink>
   
    </Box>
   
</div>
<img src={Gif4} className="gifi2mg" alt="gif"/>

</div>
   </>
  )
}

export default Signup