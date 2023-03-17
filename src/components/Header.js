import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/icon82.png';
import Button  from '@mui/material/Button';
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';



const Blackbtn = styled(Button)({
  background: '#ee4878',
  color: '#fff',
  border:'black',
  "&:hover":{ background:'#fff',color:'#ee4878'}
})

const Header = () => {
  return (
    <>
    <div className='header'>
      <a href="/">
<img src={ logo} alt='logo' onClick={"/"}  className='logo'/></a>
<h1>Zcloud</h1>
   
    <div className='container'>
<nav className='navlink'>
    <NavLink to={"/"} className={'link'}>Home</NavLink>
    <Divider orientation="vertical" flexItem />
    <NavLink to={'About/'} className={'link'}>About</NavLink>
    <Divider orientation="vertical" flexItem />
    <NavLink to={'Contact/'} className={'link'}>Contact</NavLink>
    <Divider orientation="vertical" flexItem />
    <NavLink to={'Hosting/'} className={'link'}>Hosting</NavLink>


</nav>
<nav className='nav-menuicon'>
    <NavLink to={"/"} className={'link'}>Home</NavLink>
    <Divider orientation="vertical" flexItem />
    <NavLink to={'About/'} className={'link'}>About</NavLink>
    <Divider orientation="vertical" flexItem />
    <NavLink to={'Contact/'} className={'link'}>Contact</NavLink>
    <Divider orientation="vertical" flexItem />
    <NavLink to={'Hosting/'} className={'link'}>Hosting</NavLink>


</nav>
    </div>
    <div className='loginbtn'>
    
    <NavLink to={'Signup/'} className={'btn'}> <Button variant="outlined" color='error'  sx={{color:'#ee4878', borderColor:'#01579b'}}>SIGNUP</Button></NavLink>
    <NavLink to={'Login/'} className={'btn'}><Blackbtn variant="contained" color='common' className='linkbtn' >LOGIN</Blackbtn></NavLink>
    <MenuIcon className='menuicon' sx={{fontSize:'60px'}} />
   
    </div>
    </div>
    <Divider />
    <Divider />
 
    </> 
  )
}

export default Header