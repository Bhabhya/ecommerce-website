import styled from "styled-components";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Products = (props) => {
  return (
    <Main>
      <div className="productthumb">
      {
        props.tag!==null &&props.tag!==undefined &&
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      }
     
        <Link>
          <div className="imgwrapper">
            <img src="/public/vf.jpg" className="w-100" alt="Product Thumbnail" />
            <div className="overlay transition">
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <a className="cursor"><FavoriteBorderOutlinedIcon className="icon" /></a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor"><CompareArrowsOutlinedIcon className="icon" /></a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor"><VisibilityOutlinedIcon className="icon" /></a>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <div className="info">
          <span className="d-block catname">Snack</span>
          <h6 className="title"><Link to="/">Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h6>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{ marginTop: '-100px' }} />
          <span className="brand d-block">By <Link to="/" className='text-g'>NestFood</Link></span>

          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <span className="price text-g">$28.85</span> <span className="oldprice">$32.8</span>
            </div>

            <Button className='btn'><ShoppingCartOutlinedIcon />Add</Button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Products;

const Main = styled.div`
  .productthumb {
    position: relative;
    width: 100%;
    height: auto;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 2px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
  }

  .productthumb:hover {
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23);
  }

  .imgwrapper {
    position: relative;
    overflow: hidden;
    margin-top: 30px;
  }

  img {
    margin-top: -10px;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
  }

  .btn{
    background-color: #3bb77e;
    opacity: 0.8;
    margin-left: auto;
    color: whitesmoke;
    padding: 5px 5px;
  }

  .btn:hover{
    background-color: #3bb77e;
    opacity: 1.5;
  }

  .catname{
    color: #000;
  }

  .title{
    margin: 10px 0px;
    text-decoration: none;
  }

  .title a{
    color: #000;
    font-size: 15px;
    text-decoration: none;
    line-height: 22px;
  }

  .text-g{
    text-decoration: none;
    cursor: pointer;
  }

  .price{
    margin-right: 20px;
    font-weight: bold;
  }

  .oldprice{
    text-decoration: line-through;
    color: #000;
    opacity: 0.8;
  }

  
  .overlay {
    position: absolute;
    top: 40px;
    left: 0px;
    width: 100%;
    height: 30%;
    //background-color: rgba(255,255,255,0.5);//
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.8);
    padding: 25px;
  }

  .overlay:hover{
    opacity: 1;
    transform: scale(1);
  }

  .icon{
    //background-color: pink;//
    margin-top: -60px;
    width: 150%;
    //border: 1px solid black;//
  }

  .icon:hover{
    color: #000;
  }


  .overlay ul {
    background-color: #fff;
    width: 180px;
    height: 40px;
    border-radius: 5px;
    list-style: none;
   padding: 10px;

   
  }

  .overlay ul li a{
    display: block;
   padding: 10px;
   height: 40px;
   //margin-bottom: 20px;//

  
  }

  .badge{
    top: 0px;
    position: absolute;
    left: 0px;
    display: inline-block;
    background-color: red;
    color: #fff;
    margin-top: 0px;
    border-bottom-right-radius:50px ;
    border-top-left-radius:50px ;
  }

  & .hot{
    background-color: #f74b81;
  }

  & .sale{
    background-color: #3bb77e;
  }

  & .new{
background-color: #67bcee;
  }

  & .best{
    background-color: #f59758;
  }
 
`;
