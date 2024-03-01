import styled from "styled-components"
import Slider from 'react-slick';
import { useState } from "react";

const Catslider = () => {

const [itembg,setitembg]=useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec'
])
    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true,
        centerMode:true
      };
  return (
    <Section>
    <div className="catslidersection">
    <div className="container-fluid">
    <h2 className="hd">Featured Categories</h2>
    <Slider {...settings} className='cat_slider_main' id='cat_slider_main'>
    {
        itembg.length !==0 && itembg.map((item,index)=>{
            return ( 
                <div className="item" key={index}>
            <div className="info" style={{background:item}}>
            <img src="/public/burger.webp"></img>
            <h5>Cake & Milk</h5>
            <p>26 Items</p>
            </div>
        
            </div>
            )
        })
    }
    
   
    
    </Slider>


    </div>
    
    </div>
    </Section>
  )
}

export default Catslider

const Section=styled.div`
.catslidersection{
    width: 100%;
    height: auto;
    padding: 30px 0px;
    padding-left: 10px;
}

.cat_slider_main .item{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
padding: 15px;
    //background-color: #ccc;//
}

.cat_slider_main .item .info{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
}

.cat_slider_main .item .info h5{
    font-weight: 600;
}

.cat_slider_main .item .info p{
    font-size: 18px;
    opacity: 0.8;
    color: #000;
    margin-bottom: 0px;
}

.slick-arrow{
    position: absolute;
    top: 5%;
    //right: 0.3%;//
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: gray;
    z-index: 100;
    transition: all 0.2s ease-in-out;
    margin-left: 1200px;
    right: 80px;
  }

  .slick-arrow:hover{
    background-color: #3bb77e;
  }


.cat_slider_main .slick-slide{
    padding-right: 40px;
}


img{
    //margin-top: -10px;//
    width: 200px;
    height: 150px;
}


`;