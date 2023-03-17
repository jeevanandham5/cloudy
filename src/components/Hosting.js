import React from 'react'
import '../App.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
const Hosting = () => {
  return (
    <>
    <div className='container-home'>
      <h3>start hosting your web site</h3>
      <a href="https://hostinger.com/"  target={'blank'}> <CloudUploadIcon  sx={{fontSize:'80px',marginTop:'10px', color:'black',"&:hover":{color:'#ee4878',transition:'0.50s'}}}/></a>
      <a href="/Contact"  target={'blank'}> < ContactSupportIcon  sx={{fontSize:'80px',marginTop:'10px', color:'black',"&:hover":{color:'#ee4878',transition:'0.50s'}}}/></a>
    </div>
    </>
  )
}

export default Hosting