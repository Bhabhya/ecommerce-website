import styled from "styled-components"
import Icon1 from '../../../assets/images/icon-1.svg'
import Icon2 from '../../../assets/images/icon-2.svg'
import Icon3 from '../../../assets/images/icon-3.svg'
import Icon4 from '../../../assets/images/icon-4.svg'
import Icon5 from '../../../assets/images/icon-5.svg'
import Logo from '/public/logo.svg';
import paymentmethod from '/public/payment-method.png';
import appStore from '/public/app-store.jpg';
import googleplay from '/public/google-play.jpg';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NewsletterImg from "/public/newsletter.png"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Footer = () => {
  return (
    <div>
    <Section className="newslettersection" style={{ background: 'url(/public/bg.png)', borderRadius: '25px' }}>
    <div className="container-fluid">
    <div className="box d-flex align-items-center">
    <div className="info">
    <h3>Stay home & get your daily <br/>needs from our shop</h3>
    <p>Start Your Daily Shopping with Nest Mart</p>
   <div className="cat">
   <SendIcon className="on"></SendIcon><input type="text" placeholder="enter your mail" className="big"></input>
   <Button className="btn">Subscribe</Button>
   </div>
    
    <br/> <br/>

    
    
    </div>
    

    <div className="img">
    <img src={NewsletterImg} className="w-100"></img>
    </div>
    
    </div>
    
    </div>
    
    </Section>
    <Section>
    
    <div className="footerwrapper">
    <div className="footerboxes">
    <div className="container-fluid">
    <div className="row">
    <div className="col">
    
    </div>

    <div className="col">
    <div className="box d-flex align-items-center w-60">
    <span><img src={Icon1}></img></span>
    <div className="info">
    <h5>Best Prices & Offers</h5>
    <p>Order $50 or more</p>
    
    </div>
    
    </div>
    </div>

    <div className="col">
    <div className="box d-flex align-items-center w-60">
    <span><img src={Icon2}></img></span>
    <div className="info">
    <h5>Free Delivery</h5>
    <p>Order $50 or more</p>
    
    </div>
    
    </div>
    </div>

    <div className="col">
    <div className="box d-flex align-items-center w-60">
    <span><img src={Icon3}></img></span>
    <div className="info">
    <h5>Great Daily Deal</h5>
    <p>Order $50 or more</p>
    
    </div>
    
    </div>
    </div>

    <div className="col">
    <div className="box d-flex align-items-center w-60">
    <span><img src={Icon4}></img></span>
    <div className="info">
    <h5>Wide Assortment</h5>
    <p>Order $50 or more</p>
    
    </div>
    
    </div>
    </div>

    <div className="col">
    <div className="box d-flex align-items-center w-60">
    <span><img src={Icon5}></img></span>
    <div className="info">
    <h5>Easy Returns</h5>
    <p>Order $50 or more</p>
    
    </div>
    
    </div>
    </div>
    
    
    </div>
    
    
    </div>
    
    </div>


    
    
    </div>
    <footer>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-3 part-1">
    <Link to='/'><img src={Logo} className="toy"></img></Link>
    <br/><br/>
    <p>Awesome grocery store website template</p>
    <br/>
    <p><LocationOnOutlinedIcon className="icon"></LocationOnOutlinedIcon><strong>Address:</strong>:Maharshi Dayanand University</p>
    <p><CallOutlinedIcon className="icon"></CallOutlinedIcon><strong>Call us:</strong>(+91)897-603-23145</p>
    <p><MailOutlinedIcon className="icon"></MailOutlinedIcon><strong>Email:</strong>abc@gmail.com</p>
    <p><WatchLaterOutlinedIcon className="icon"></WatchLaterOutlinedIcon><strong>Hours</strong>:10:00 - 18:00,Mon-Sat</p>
    
    </div>

    <div className="col-md-6 part-2">
    <div className="row">
    <div className="col">
    <h4>Company</h4>
    <ul className="footer-list mb-sm-5 mb-md-0">

    <li><Link to="#">About Us</Link></li>
    <li><Link to="#">Delivery Information</Link></li>
    <li><Link to="#">Privacy Policy</Link></li>
    <li><Link to="#">Terms & Conditions</Link></li>
    <li><Link to="#">Contact Us</Link></li>
    <li><Link to="#">Support Center</Link></li>
    <li><Link to="#">Carrers</Link></li>
    
    </ul>
    
    </div>

    <div className="col">
    
    <ul className="footer-list mb-sm-5 mb-md-0">

    <li><Link to="#"><strong>Account</strong></Link></li>
    <li><Link to="#">Delivery Information</Link></li>
    <li><Link to="#">Privacy Policy</Link></li>
    <li><Link to="#">Terms & Conditions</Link></li>
    <li><Link to="#">Contact Us</Link></li>
    <li><Link to="#">Support Center</Link></li>
    <li><Link to="#">Carrers</Link></li>
    
    </ul>
    
    </div>

    <div className="col">
    
    <ul className="footer-list mb-sm-5 mb-md-0">

    <li><Link to="#"><strong>Coorporate</strong></Link></li>
    <li><Link to="#">Delivery Information</Link></li>
    <li><Link to="#">Privacy Policy</Link></li>
    <li><Link to="#">Terms & Conditions</Link></li>
    <li><Link to="#">Contact Us</Link></li>
    <li><Link to="#">Support Center</Link></li>
    <li><Link to="#">Carrers</Link></li>
    
    </ul>
    
    </div>

    <div className="col">
    
    <ul className="footer-list mb-sm-5 mb-md-0">

    <li><Link to="#"><strong>Popular</strong></Link></li>
    <li><Link to="#">Delivery Information</Link></li>
    <li><Link to="#">Privacy Policy</Link></li>
    <li><Link to="#">Terms & Conditions</Link></li>
    <li><Link to="#">Contact Us</Link></li>
    <li><Link to="#">Support Center</Link></li>
    <li><Link to="#">Carrers</Link></li>
    
    </ul>
    
    </div>
    
    </div>
    
    </div>

    <div className="col-md-3 part-3">
    <h3>Install App</h3>
    <br/>
    <p>From App Store or Google Play</p>
    <div className="d-flex">
    <Link to={''}><img src={appStore} width={150}></img></Link>
    <Link to={''}><img src={googleplay} className="mx-3" width={150}></img></Link>
    </div>
    <br/>

    <p>Secured Payment Gateway</p>
    <img src={paymentmethod}></img>
    
    </div>
    
    </div>

    <hr/>

    <div className="row laststrip">
    <div className="col-md-3">
    <p>@ 2022, Nest-HTML Ecommerce Template
    All rights reserved</p>
    </div>

    <div className="col-md-6 d-flex">
   <div className="m-auto align-items-center ">
   <div className="phno d-flex align-items-center ">
   <span><HeadphonesIcon className="icons"></HeadphonesIcon></span>
   <div className="info ml-3">
   <h6 className="text-g">1900-888</h6>
   <p className="text-g">24/7 Support Center</p>
   </div>
   
   </div>
    </div>
    </div>
  
    <div className="col-md-3 part3">
    <div className="d-flex align-items-center">
    <h5>Follow us:</h5>
    <ul className="list-list-item">
    <li className="list-inline-item"><Link to={''}><FacebookOutlinedIcon className="one"></FacebookOutlinedIcon></Link></li>
    <li className="list-inline-item"><Link to={''}><TwitterIcon className="one"></TwitterIcon></Link></li>
    <li className="list-inline-item"><Link to={''}><InstagramIcon className="one"></InstagramIcon></Link></li>
    <li className="list-inline-item"><Link to={''}><YouTubeIcon className="one"></YouTubeIcon></Link></li>
    
    
    </ul>
    </div>
    
    </div>
    </div>

    
    </div>

    
    </footer>
    
    </Section>
    </div>
  )
}

export default Footer

const Section=styled.div`  


.footerwrapper{
    width: 120%;
    padding: 25px 0px;
    //padding-right: -500px;//
    margin-left: -250px;
    padding-left: -100px;
    //background-color: pink;//
    
}

.footerboxes .box{
    background-color: #F4F6FA;
    //padding: 5px 5px;//
    //padding-left: 500px;//
    border-radius: 10px;
    
   
    //background-color: yellow;//
}

.info{
    padding: 5px;
    
    
    //padding-right: -500px;//
    //background-color: gray;//
}

.info p{
    margin-bottom: 0px;
}

.info img{
    position: relative;
    transition: all 0.3s ease-in-out;
   
}

.box:hover img{
    transform: translateY(-5px);
}

 img{
     width: 100%;
      height: auto ;
     
}

.row{
    padding-left: 10px;
}

.icon{
    color: #3bb77e;
}

.part-2{

margin-top: 30px;
}

.part-2 ul li{
list-style: none;
margin-bottom: 5px;
margin-left: -30px;

}

.part-2 ul li a{
color: #000;
opacity: 0.8;
text-decoration: none;
transition: all 0.2s ease-in-out;
}

.part-2 ul li a:hover{
color: #3bb77e;
}

.part-3{

margin-top: 30px;
}

.laststrip{
    padding: 15px 0px;
}

.phno{
    margin-top: -10px;
}


.phno h6{
    font-size: 24px;
}

.phno p{
    font-size: 18px;
}

.icons {
    font-size: 34px;
    
}



.part3{
    //background-color: pink;//
    margin-right: -500px;
    width: 30%;
    
}

.part3 h5{
    margin-bottom: 0px;
    width: 50%;
    margin-left: -100px;
    margin-right: -80px;

}

.part3 ul{
    margin-bottom: 0px;
    padding-left: 5px;
    //background-color: gray;//
    width: 100%;
}

.part3 ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #3bb77e;
    border-radius: 50%;
    margin-bottom: 20px;
    transition: all 0.2s ease-in-out;
}

.part3 ul li a:hover{
    background-color: #000;
}

.one{
    color: #fff;
    margin-bottom: 10px;
}

.newslettersection{
  width: 100%;
  height: auto;
  margin-top: 50px; 
 
  
  
  
  
}

.newslettersection .box{

  width: 100%;
  height: auto;
  padding: 40px 80px;
  background-color: pink;
  
}



.info{
  width: 70%;

}

.info h3{
font-size: 39px;
font-weight: bold;
line-height: 70px;
}

.img {
  width: 80%;
 
}

.newslettersection .box .newsletterbanner{
  position: relative;
  left: 0px;
  bottom: inherit;
  
}

.newsletterbanner{
    width: 500px;
    height: 60px;
    position: absolute;
    bottom: 100px;
    left: 10%;
    top: 800px;
    z-index: 100;
    //background-color: green;//
    margin-top: -300px;
    
    
  }
.newsletterbanner input{
width: 80%;
height: 100%;
background-color: #fff;
border-radius: 30px;
border: 0px;
outline: none;
padding-left: 50px;
font-size: 20px;
padding-right: 100px;
margin-left: -100px;

}
  
.newsletterbanner Button{
  padding: 10px 30px;
  border-radius: 50px;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  background: #3bb77e;
  height: 60px;
  font-size: 20px;
  text-transform: capitalize;
  //background-color: orange;//
  margin-right: 90px;
  
}

.tops{
  top: 150px;
  left: -80px;
  z-index: 10;
  transform: rotate(-21deg);
  opacity: 0.5;
  position: absolute;
  
}

.big{
  border-radius: 18px;
  font-size: 24px;
  padding-left: 30px;
  padding-right: 40px;
}
 
.btn{
  background-color: #3bb77e;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  margin-left: -30px;
  margin-top: -12px;
}

.btn:hover{
  background-color: #FDC040;
  color: #fff;
  cursor: pointer;
}

.cat{
  //background-color: pink;//
  width:80%
}

.on{

//background-color: pink;//
margin-top: 10px;
padding-left: 5px;
position: absolute;
rotate: -18deg;
}

`;