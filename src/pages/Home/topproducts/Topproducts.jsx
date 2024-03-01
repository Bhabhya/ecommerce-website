import styled from "styled-components"
import img1 from '../../../assets/images/thumbnail-1.jpg'
import img2 from '../../../assets/images/thumbnail-1.jpg'
import img3 from '../../../assets/images/thumbnail-1.jpg'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const Topproducts = (props) => {
  return (
    <Section>
    <div className='topselling_box'>
    <h3>{props.title}</h3>

    <div className="items d-flex align-items-center">
    <div className="img">
    <Link to=''>
    <img src={img1} className="w-100"></img>
    </Link>
    </div>
    

    <div className="info px-3">
    <Link to=''><h6>Nestle Original Coffee-Mate Coffee Creamer</h6></Link>
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{ marginTop: '-100px' }} />
    <div className="d-flex align-items-center">
    <span className="price text-g">$28.85</span> <span className="oldprice">$32.8</span>
  </div>
    
    </div>
    
    </div>

    <div className="items d-flex align-items-center">
    <div className="img">
    <Link to=''>
    <img src={img1} className="w-100"></img>
    </Link>
    </div>
    

    <div className="info px-3">
    <Link to=''><h6>Nestle Original Coffee-Mate Coffee Creamer</h6></Link>
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{ marginTop: '-100px' }} />
    <div className="d-flex align-items-center">
    <span className="price text-g">$28.85</span> <span className="oldprice">$32.8</span>
  </div>
    
    </div>
    
    </div>
    
    <div className="items d-flex align-items-center">
    <div className="img">
    <Link to=''>
    <img src={img1} className="w-100"></img>
    </Link>
    </div>
    

    <div className="info px-3">
    <Link to=''><h6>Nestle Original Coffee-Mate Coffee Creamer</h6></Link>
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{ marginTop: '-100px' }} />
    <div className="d-flex align-items-center">
    <span className="price text-g">$28.85</span> <span className="oldprice">$32.8</span>
  </div>
    
    </div>
    
    </div>
    

    
    
    
    </div>
    </Section>
  )
}

export default Topproducts

const Section=styled.div`

.topselling_box{
    //margin-top: 50px;//
    margin: 10px 0px;
}

.topselling_box .items{
    padding: 20px 0px;
}
.topselling_box h3{
    position: relative;
    padding-bottom: 20px;
}

.topselling_box h3:after{
    content: ' ';
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: #ccc;
    bottom: 0px;
}

.topselling_box h3:before{
    content: ' ';
    width: 60%;
    height: 3px;
    position: absolute;
    background-color: #3bb77e;
    bottom: 0px;
    left: 0px; 
    z-index: 10;
}

 .img{
    width: 50%;
    background-color: #fafafa;
    margin-top: -10px;
}

.info{

    width: 70%;
    
}

.info a{
    text-decoration: none;
    color: #000;
    padding-top: 20px;
}

.price{
    margin-right: 20px;
    font-weight: bold;
    margin-top: -10px;
  }

  .oldprice{
    text-decoration: line-through;
    color: #000;
    opacity: 0.8;
    margin-top: -10px;
  }

  h6{
    font-weight: bold;
  }
`;