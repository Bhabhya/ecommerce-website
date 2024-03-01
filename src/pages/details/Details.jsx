
import styled from "styled-components"
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Products from "../../components/products/Products";



const Details = () => {

    const [activesize, setactivesize]=useState(0);
    const [inputvalue,setinputvalue]=useState(1);
    const [activetab,setactivetab]=useState(0)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true
      };

      var related = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true
      };

      const isactive=(index)=>{
        console.log('Clicked on index:', index);
        setactivesize(index);
      };

      const plus=()=>{
setinputvalue(inputvalue+1)

      }

      const minus=()=>{

        if (inputvalue!=1){
            setinputvalue(inputvalue-1)
        }

      }

  return (
    <Section className='detailspage'>
    <div className="breadcrumbwrapper">
    <div className="container-fluid">
    <ul className="breadcrumb">
  <li><Link>Home</Link> /</li>
  <li><Link>Vegetable & Tubers</Link> /</li>
  <li>Seeds of Change Organic</li>
  
</ul>
    
    </div>
    
    </div>

    <div className="container-fluid detailscontainer">
    <div className="row">
    <div className="col-md-9 part-1">
    <div className="row">
    <div className="col-md-6">
    <div className="productzoom">
    <InnerImageZoom src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(420,420)"  zoomType="hover" zoomScale={2}/>
    </div>

    <Slider {...settings} className='zoomslider'>

   

    <div className="item">
    <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(150,150)" className="w-100"></img>
    </div>

    <div className="item">
    <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(150,150)" className="w-100"></img>
    </div>

    <div className="item">
    <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(150,150)" className="w-100"></img>
    </div>

    <div className="item">
    <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(150,150)" className="w-100"></img>
    </div>

    <div className="item">
    <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(150,150)" className="w-100"></img>
    </div>

    <div className="item">
    <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(150,150)"></img>
    </div>
    
    </Slider>



    </div>

    <div className="col-md-6 productinfo">
    <h1>Seeds of Change Organic Quinoa,Brown</h1>
    <div className="align-items-center mb-4">
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{marginTop:'-50px'}} />
    <span className="text-light">(32 reviews)</span>
    
    </div>

    <div className="pricesec d-flex align-items-center">
    <span className="text-g pricelarge">$38</span>
<div className="ml-2 d-flex flex-column">
<span className="text-org">26% off</span>
<span className="text-g oldprice">$52</span>

</div>
    
    </div>

   <p>The sun dipped below the horizon, casting a warm, golden glow across the tranquil landscape. As evening unfolded, the chirping of crickets filled the air, harmonizing with the gentle rustling of leaves in the nearby trees</p>

<div className="productsize d-flex align-items-center">
<span>Size/Weight: </span>
<ul className="list list-inline mb-0">
<li className="list-inline-item"><a className={`tag ${activesize ===0?'active':''}`} onClick={()=>isactive(0)}>50g</a></li>
<li className="list-inline-item"><a className={`tag ${activesize ===1?'active':''}`} onClick={()=>isactive(1)}>60g</a></li>
<li className="list-inline-item"><a className={`tag ${activesize ===2?'active':''}`} onClick={()=>isactive(2)}>80g</a></li>
<li className="list-inline-item"><a className={`tag ${activesize ===3?'active':''}`} onClick={()=>isactive(3)}>100g</a></li>
<li className="list-inline-item"><a className={`tag ${activesize ===4?'active':''}`} onClick={()=>isactive(4)}>150g</a></li>

</ul>

</div>

<div className="addcartsection pt-4 pb-4 d-flex-align-items-center">
<div className="countersec">
<input type="number" value={inputvalue}></input>
<span className="arrow plus" onClick={plus}><KeyboardArrowUpIcon></KeyboardArrowUpIcon></span>
<span className="arrow minus" onClick={minus}><KeyboardArrowDownIcon></KeyboardArrowDownIcon></span>

</div>

<Button className="btn"><AddShoppingCartIcon></AddShoppingCartIcon>Add to Cart</Button>
<Button className="btns"><FavoriteBorderIcon></FavoriteBorderIcon></Button>
<Button className="btns"><CompareArrowsIcon></CompareArrowsIcon></Button>


</div>

    </div>
    
    </div>
    
    </div>

    <div className="card mt-5 p-3 detailpagestabs">
    <div className="customtabs">
    <ul className="list list-inline">
    <li className="list inline-item"><Button onClick={()=>setactivetab(0)}>Description</Button></li>

    <li className="list inline-item"><Button onClick={()=>setactivetab(1)}>Additional Info</Button></li>

    <li className="list inline-item"><Button onClick={()=>setactivetab(2)}>Reviews(3)</Button></li>
    
    
    </ul>
    <br/>

    {

        activetab===0 &&
    

    <div className="tablecontent">
    <p>Material UI aims to provide building blocks for developers to create great user interfaces using th support every component or every feature.</p>
    <p>If you are looking for more advanced features, like combobox, multiselect, autocomplete, async or creatable support, head topackages.</p>
    <br/>

    <h2>Package and Delivery</h2>
    
    <p>Material UI aims to provide building blocks for developers to create great user interfaces using the Matee support every component or every feature.</p>
    <p>If y.</p>

    <br/>

    <h2>Suggested Uses</h2>
    
    <p>Once upon a time, in a small village nestled between rolling hills and thick forests, there lived a curious young girl named Luna. Luna had an insatiable thirst for adventure and a heart full of dreams that reached beyond the boundaries of her quiet village.
    One day, as she explored the outskirts of the forest, Luna stumbled upon a mysterious, ancient-looking book hidden beneath the roots of an old oak tree</p>
    </div>
    }

    {

        activetab===1&&
    

    <div className="tablecontent">
    <div className="tableresponsive">
    <table className="table table-bordered">
    <tbody>
<tr className="standup">
<th>Stand Up</th>
<td>
<p>The Table has been given a fixed width to demonstrate horizontal scrolling.</p>
</td>
</tr>

<tr className="folded two wheels">
<th>Folded wheel</th>
<td>
<p>The Table has been given a fixed width to demonstrate horizontal scrolling.</p>
</td>

</tr>

<tr className="standup">
<th>Stand Up</th>
<td>
<p>The Table has been given a fixed width to demonstrate horizontal scrolling.</p>
</td>
</tr>

<tr className="folded two wheels">
<th>Folded wheel</th>
<td>
<p>The Table has been given a fixed width to demonstrate horizontal scrolling.</p>
</td>

</tr>

<tr className="folded two wheels">
<th>Folded wheel</th>
<td>
<p>The Table has been given a fixed width to demonstrate horizontal scrolling.</p>
</td>

</tr>

<tr className="standup">
<th>Stand Up</th>
<td>
<p>The Table has been given a fixed width to demonstrate horizontal scrolling.</p>
</td>
</tr>
    </tbody>
    
    
    </table>
    
    </div>
    
    </div>
    }

    {
        activetab===2 &&
    

    <div className="tablecontent">
    <div className="row">
    <div className="col-md-8">
    <h3>Customer Questions and answers</h3>
    <br/>
    <div className="card p-3 flex-row">
    <div className="image">
    <div className="rounded circle">
    <img src="data:image/jpeg;base64,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"></img>

    </div>

    <span className="text-g d-block text-center font-weight-bold">Doraemon</span>

    </div>

    <div className="info">
    <h5 className="text-org">24 February,2024</h5>
    
    <p>This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.
    The Table has been given a fixed width to demonstrate horizontal scrolling.</p>

    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{marginTop:'-50px'}} />

    </div>

    </div>

    <div className="card p-3 flex-row">
    <div className="image">
    <div className="rounded circle">
    <img src="data:image/jpeg;base64,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"></img>

    </div>

    <span className="text-g d-block text-center font-weight-bold">Doraemon</span>

    </div>

    <div className="info">
    <h5 className="text-org">24 February,2024</h5>
    
    <p>This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.
    The Table has been given a fixed width to demonstrate horizontal scrolling.</p>

    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{marginTop:'-50px'}} />

    </div>

    </div>

    <div className="card p-3 flex-row">
    <div className="image">
    <div className="rounded circle">
    <img src="data:image/jpeg;base64,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"></img>

    </div>

    <span className="text-g d-block text-center font-weight-bold">Doraemon</span>

    </div>

    <div className="info">
    <h5 className="text-org">24 February,2024</h5>
    
    <p>This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.
    The Table has been given a fixed width to demonstrate horizontal scrolling.</p>

    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{marginTop:'-50px'}} />

    </div>
   
    </div>

    <br/>
    <br/>

    <form className="reviewform">
    <h4>Add a Review</h4>
    <div className="formgroup">
    <textarea className="formcontrol" placeholder="write a review"></textarea>
    
    </div>

    <div className="row">
    <div className="col-md-6">
    <div className="formgroup">
    <input type="text" className="formcontrol" placeholder="name"></input>
    
    </div>
    </div>

    <div className="col-md-6">
    <div className="formgroup">
    <input type="text" className="formcontrol" placeholder="email"></input>
    
    </div>
    </div>
    </div>

    <div className="formgroup">
    <input type="text" className="formcontrol" placeholder="website"></input>
    </div>

    <div className="formgroup">
    <Button className="btn">Submit Review</Button>
    
    
    
    </div>
    </form>


    </div>

   

    <div className="col-md-4 pl-5">

    <h4>Customer Reviews</h4>
    <div className="d-flex align-items-center rate">
    <Rating name="half-rating" defaultValue={4.8} precision={0.5} style={{marginTop:'-50px'}} />
    <strong className="ml-3" style={{marginTop:'-20px'}}>4.8 out of 5</strong>
    </div>

    <br/>

    <div className="box d-flex align-items-center">
    <span className="mr-3">5 star</span>
    <div className="progress" style={{width:'85%'}}>
  <div className="progress-bar" role="progressbar" aria-valuenow="100"
  aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>
    70%
  </div>
</div>


    </div>

    </div>

    </div>
    
    </div>
    }
    </div>
    
    </div>
    
    </div>

 
    
    </div>
    <div className="relatedproducts pt-5 pb-4">
    <h1>Related Products</h1>

    <Slider {...related} className='prodslider'>
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
    
    
    </Section>
  )
}

export default Details

const Section=styled.div`

.breadcrumbwrapper{
    width: 100%;
    height: auto;
    padding: 15px 0px;
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
}

.breadcrumb li a{
    color: #3bb77e;
    text-decoration: none;
    display: inline;
    font-size: 18px;
}

h1{
    font-weight: bold;
    opacity: 0.8;
}

p{
    color: #7E7E7E;
}

.pricelarge{
    font-size: 54px;
    font-weight: bold;
}

.text-org{
    font-size: 15px;
}

.oldprice{
    font-size: 20px;
    margin-top: -5px;
    text-decoration: line-through;
}

.flex-column{
    margin-left: 5px;
}

.pricesec{
    margin-top: -40px;
}

.productzoom{
    width: 100%;
    height: auto;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 0px;
    overflow: hidden;
    border-radius: 15px;
}

.zoomslider{
    margin-top: -10px;
    
   // padding-top: -1000px;//
    //background-color: pink;//
}
.slick-slide{
    padding-left:10px;
    padding-right:10px;
}

.slick-current{
    border: 1px solid #3bb77e;
    border-radius: 10px;
}

.item{
    overflow: hidden;
    border-radius: 10px;
    //background-color: pink;//
}

.slick-arrow{
    background-color: gold;
    color: black;
    top: 60%;
    margin-left: 30px;
    margin-right: 30px;
    z-index: 1500;
}

.detailscontainer{
    max-width: 90%;
}

.productsize{
    width: 100%;
    height: auto;
    padding: 10px 0px;
}

.productsize ul{
    padding-left: 10px;
    margin-top: -10px;
}

.productsize ul li{
    margin-right: 5px;
}

.productsize ul li a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    cursor: pointer;
    color: #000;
    transition: all 0.1s ease-in-out;
    text-decoration: none;
}

.productsize ul li a:active{
    background-color: #3bb77e;
    color: #fff;
}

.addcartsection{
    width: 100%;
    height: auto;
    display: flex;
}

.countersec{
    width: 120px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #3bb77e;
    overflow: hidden;
    padding: 5px;
    position: relative;
  margin-right: 3px;
}

.countersec input{
    width: 80px;
    height: 40px;
    padding: 3px;
    outline: none;
    border: 0px;
    text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.arrow{
cursor: pointer;
position: absolute;
opacity: 0.5;
}

.arrow.plus{
top: -20px;
right: 10px;
}

.arrow.minus{
bottom: -2px;
right: 10px;

}

.btn{
    background-color: #3bb77e;
    color: #fff;
    border-radius: 10px;
    height: 50px;
    margin-top:10px;
}

.btn:hover{
    background-color: #FDC040;
}

.btns{
margin-left: 5px;
background-color: #fff;
height: 50px;
margin-top:10px;
border: 1px solid rgba(0,0,0,0.1);
color: #000;
opacity: 0.8;
};

.btns:hover{
 background-color: #3bb77e;
}

.detailpagestabs{
border-radius: 14px;
//background-color: gray;//

}

.customtabs ul{

    //background-color: pink;//
    display: flex;
    gap: 8px;
}

.customtabs ul li Button{
    padding: 5px 15px;
    border: 1px solid rgba(0,0,0,0.1);
    text-transform: capitalize;
    border-radius: 24px;
    color: #000;
}

.card{
    border-radius:5px;
}

.rounded-circle{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100px;
    height: 100px;
}

.rounded-circle img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image{
    width: 100px;
}

.text-g{
    font-weight: bold;
}

.info{
    padding-left: 150px;
}

.info p{
    padding-top: 30px;
}

.reviewform textarea{
    width: 100%;
    height: 80px;

}


.formgroup{
    margin-bottom: 20px;
}

.formcontrol{
    height: 40px;
    border-radius: 10px;
}

.rate{
    margin-top: 20px;
}

.relatedproducts{
    //background-color: pink;//
}

.item{
    //background-color: pink;//
}
`;