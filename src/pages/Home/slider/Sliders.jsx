import Slider from 'react-slick';
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from '../../../assets/images/slider-1.png'
import Slide2 from '../../../assets/images/slider-2.png'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Newsletter from '../../../components/newsletter/Newsletter';


const Sliders = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true
      };
  return (
    <Section className='homeslider'>
    <div className='container-fluid position-relative'>
    <Slider {...settings} className='home_slider_main'>
    <div className='item'>
    <img src={Slide1} className='w-100'></img>
    <div className='info'>
<h2 className='mb-4'>
Don't miss amazing <br/>
Grocery details
</h2>

<p>Sign up for the daily newsletter</p>
<SendIcon className='on'></SendIcon><input type='text' placeholder='enter your email' className='big' ></input>
<Button className='btn'>subscribe</Button>
    
    </div>
    </div>

    <div className='item'>
    <img src={Slide2} className='w-100'></img>
    <div className='info'>
<h2 className='mb-3'>
Fresh Vegetables <br/>
Big Discounts
</h2>

<p>Sign up for the daily newsletter</p>

    
    </div>
    
    </div>
   
  </Slider>

  
    </div>
    
    
    </Section>
  )
}

export default Sliders



const Section=styled.section`
.homeslider{
    padding: 30px 0px;
}

img {
    height: auto; /* Maintain aspect ratio */
    border-radius: 20px; /* Apply border-radius to all four corners */
    overflow: hidden;
    margin-top: -20px;
  }
.home_slider_main {
    border-radius: 20px;
    position: relative;
  }

  .home_slider_main .slick-dots{
    position: absolute;
    bottom: 30px;
  }

  .home_slider_main .slick-dots button::before{
    font-size: 10px;
    width: 5px;
    height: 5px;
  }
  .slick-arrow{
    position: absolute;
    top: 47%;
    right: 0.3%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: gray;
    z-index: 100;
    transition: all 0.2s ease-in-out;
    margin-left: 30px;
  }

  .slick-arrow:hover{
    background-color: #3bb77e;
  }

  .slick-arrow .slick-next{
    right: 2%;
  }

  .slick-arrow .slick-prev{
    left: 2%;
  }

  .home_slider_main .item{
    position: relative;

  }

  

  .home_slider_main .item .info{
    position: absolute;
    //margin-top: -100px;//
    top: 5%;
    left: 7%;
    z-index: 100;
  }

  .home_slider_main .item .info h2{
font-size: 44px;
font-weight: bolder;
color: rgba(0,0,0,0.8);
margin-top: 50px;
  }

  .home_slider_main .item .info p{
font-size: 24px;
font-weight:500;
color:#7E7E7E;
  }

  .newsletterbanner{
    width: 500px;
    height: 60px;
    position: absolute;
    bottom: 100px;
    left: 2%;
    top: 300px;
    z-index: 100;
    border-radius: 50px;
    //background-color: pink;//

   
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
}

.tops{
  top: 8px;
  left: 10px;
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

.on{

  //background-color: pink;//
  margin-top: 10px;
  padding-left: 5px;
  position: absolute;
  rotate: -18deg;
}

`;