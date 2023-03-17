import React from 'react'
import '../App.css'
import Gif1 from '../images/man.gif';
import Gif2 from '../images/swipingman.gif';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';
import Button  from '@mui/material/Button';
const Blackbtn = styled(Button)({
  background: '#ee4878',
  color: '#fff',
  border:'black',
  "&:hover":{ background:'#fff',color:'#ee4878'}
})



const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='container-home'>
        <h2>Get Your Website Online
In Three Easy Steps</h2>
       <p>We help you get your business online. From domain names to affordable hosting plans, get everything you need to set up your website.</p>
      
</div>
<NavLink to={'Login/'} className={'btn'}><Blackbtn variant="contained" color='common' className='linkbtn' >Get started</Blackbtn></NavLink>
<div>
  <img src={Gif1} className="gifi1mg" alt="gif"/>
</div>
</div>
<Divider/>
<div className='home'>

<div>
  <img src={Gif2} className="gif2img" alt="gif"/>
</div>
<NavLink to={'About/'} className={'btn'}><Blackbtn variant="contained" color='common' className='linkbtn' >About as</Blackbtn></NavLink>
<div className="container-home">
<h2>Run your website smooth and clean</h2>
       <p>1-Click Web Hosting, 24/7 Expert Support & Free Professional Email.
         Sign Up Today! Includes Award-Winning 
        Expert 24/7 Support. World's Largest Inventory. 
        Lowest Industry Prices. 
        24/7 Phone & Chat Support. Over 80m Domains Managed. Services: Linux, Windows</p>

        </div>
</div>
    </>
  )
}

export default Home