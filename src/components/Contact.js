import React from 'react'
import '../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <>
    <div className='contactus'>
<h3>How can we help you today?</h3>

<a href="https://github.com/"  target={'blank'}> <GitHubIcon  sx={{fontSize:'80px',marginTop:'10px', color:'black',"&:hover":{color:'#ee4878',transition:'0.50s'}}}/></a>
<a href="https://facebook.com/" target={'blank'}> <FacebookIcon sx={{fontSize:'80px',marginTop:'10px',color:'black',"&:hover":{color:'#2962ff',transition:'0.50s'}}}/></a>
<a href="https://Gmail.com/" target={'blank'}> <EmailIcon sx={{fontSize:'80px',marginTop:'10px',color:'black',"&:hover":{color:'#ee4878',transition:'0.50s'}}}/></a>
<a href="https://twitter.com/" target={'blank'}> <TwitterIcon sx={{fontSize:'80px',marginTop:'10px',color:'black',"&:hover":{color:'#2962ff',transition:'0.50s'}}}/></a>
    </div>
    
    </>
  )
}

export default Contact