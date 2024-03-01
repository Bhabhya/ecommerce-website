
import Catslider from "../../components/catslider/Catslider"
import Products from "../../components/products/Products"
import Sliders from "./slider/Sliders"
import Banner4 from '../../assets/images/banner4.jpg'
import styled from "styled-components"
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topproducts from "./topproducts/Topproducts"



const Index = () => {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade:false,
    arrows:true
  };

  return (
    <div>
      <Sliders></Sliders>
      <Catslider></Catslider>
      <sliderBannerBanner></sliderBannerBanner>

      <Section>
        <div className="homeproducts">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <h2 className="hd mb-0 mt-0">Popular Products</h2>
              <ul className="list list-inline filtertab">
                <li className="list-inline-item"><a className="cursor">All</a></li>

                <li className="list-inline-item"><a className="cursor">Milk & Diaries</a></li>

                <li className="list-inline-item"><a className="cursor">Coffees & Teas</a></li>

                <li className="list-inline-item"><a className="cursor">Pet Foods</a></li>

                <li className="list-inline-item"><a className="cursor">Meats</a></li>

                <li className="list-inline-item"><a className="cursor">Vegetables</a></li>

                <li className="list-inline-item"><a className="cursor">Fruits</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="productrow">
          <div className="item ">
            <Products tag='sale'></Products>
          </div>

          <div className="item">
            <Products tag='hot'></Products>
          </div>

          <div className="item">
            <Products tag='new'></Products>
          </div>

          <div className="item">
            <Products tag='best'></Products>
          </div>

          <div className="item">
            <Products tag='new'></Products>
          </div>

          <div className="item">
            <Products></Products>
          </div>

          <div className="item">
            <Products></Products>
          </div>

          <div className="item">
            <Products tag='best'></Products>
          </div>

         
        </div>
      </Section>




      <Section>
      <div className="homeproductsdaily">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline filtertab">
              <li className="list-inline-item"><a className="cursor">Featured</a></li>

              <li className="list-inline-item"><a className="cursor">Popular</a></li>

              <li className="list-inline-item"><a className="cursor">New Added</a></li>
            </ul>
          </div>
          <br/>

          <div className="row">
          <div className="col md-3 pr-5">
          <img src={Banner4} className="w-30"></img>
          
          </div>

          <div className="col-md-9">
          <Slider {...settings} className='prodslider'>
          <div className="item">
          <Products tag='sale'></Products>
          </div>

          <div className="item">
          <Products tag='new'></Products>
          </div>

          <div className="item">
          <Products tag='sale'></Products>
          </div>

          <div className="item">
          <Products tag='hot'></Products>
          </div>

          <div className="item">
          <Products tag='sale'></Products>
          </div>

          <div className="item">
          <Products tag='sale'></Products>
          </div>
         
          </Slider>
          
          </div>
        </div>

      </div>
</div>
      
    </Section>

    <Section className="topproductssection">
    <div className="container-fluid">
    <div className="row">
    <div className="col">
    <Topproducts title='Top Selling'></Topproducts>
    </div>

    <div className="col">
    <Topproducts title='Trending Products'></Topproducts>
    </div>

    <div className="col">
    <Topproducts title='Recently Added'></Topproducts>
    </div>

    <div className="col">
    <Topproducts title='Top Rated'></Topproducts>
    </div>
    
    </div>
    
    </div>

   
    
    
    </Section>

    
    </div>
    
  )
}

export default Index

const Section = styled.div`

.homeproducts{
  margin-bottom: 150px;
  padding: 5px 0px;
}

.filtertab{
  margin-left: auto;
  cursor: pointer;
}

.filtertab li{
  margin-left: 8px;
  transition: all 0.3s ease-in-out;
}

.filtertab li a{
  color: #000;
  text-decoration: none;
  font-size: 20px;
  position: relative;
  font-weight: 600;
}

.filtertab li a:hover{
  color: #3bb77e;
}

.productrow{
  display: flex;
  padding: 30px 0px;
  flex-wrap: wrap;
  width: 110%;
  margin-right: -500px;
}

.productrow .item{
  width: 20%;
  //height: 200px;//
  //background-color: #ccc;//
  padding: 150px 15px;
  margin-left: 20px;
  margin-top: -300px;
  
}

.homeproductsdaily{
  margin-top: -150px;
}

.prodslider .item{
  padding: 0px 3px;
}

.row img{
  margin-bottom: -30px;
}

.newslettersection{
  width: 100%;
  height: auto;
  margin-top: 50px; 
}

.newslettersection .box{
  background:url(/public/bg.png);
  width: 100%;
  height: auto;
  padding: 40px 80px;
  border-radius: 30px;
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


`;
