import styled from "styled-components";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { useEffect, useState } from "react";
import Newsletter from "../newsletter/Newsletter";

const Navbar = ({ data }) => {

  return (
    <Nav className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-sm-3 part1 d-flex align-items-center">
            <Button className="btn"><GridViewIcon className="icon"></GridViewIcon>Browse all Categories <KeyboardArrowDownIcon className="icon"></KeyboardArrowDownIcon></Button>
          </div>
          <div className="col-sm-7 part2 position-static">
            <nav>
              <ul className="list-list-inline mb-0">
                <li className="list-inline-item">
                  <Button><Link>Home</Link></Button>
                </li>

                <li className="list-inline-item">
                  <Button><Link>About</Link></Button>
                </li>

                <li className="list-inline-item">
                  <Button><Link>Shop</Link></Button>
                </li>

                <li className="list-inline-item">
                  <Button><Link>Vendors</Link></Button>
                </li>

                <li className="list-inline-item position-static">
                  <Button><Link>Mega menu<KeyboardArrowDownIcon></KeyboardArrowDownIcon></Link></Button>
                  <div className="dropdown_menu megamenu w-100">
                    <div className="row">

                      <div className="col">
                        <h6 className="text-g">Fruits & Vegetables</h6>
                        <ul className="mt-3 mb-0">
                          <li><Link to=''>Meat & Poultry</Link></li>
                          <li><Link to=''>Fresh Vegetable</Link></li>
                          <li><Link to=''>Herbs & Seasonings</Link></li>
                          <li><Link to=''>Cuts & Spourts</Link></li>
                          <li><Link to=''>Exotic Fruits & Veggies</Link></li>
                          <li><Link to=''>Packaged Products</Link></li>
                        </ul>
                      </div>

                      <div className="col">
                        <h6 className="text-g">Breakfast & Diary</h6>
                        <ul className="mt-3 mb-0">
                          <li><Link to=''>Meat & Poultry</Link></li>
                          <li><Link to=''>Fresh Vegetable</Link></li>
                          <li><Link to=''>Herbs & Seasonings</Link></li>
                          <li><Link to=''>Cuts & Spourts</Link></li>
                          <li><Link to=''>Exotic Fruits & Veggies</Link></li>
                          <li><Link to=''>Packaged Products</Link></li>
                        </ul>
                      </div>

                      <div className="col">
                        <h6 className="text-g">Meat & Seafood</h6>
                        <ul className="mt-3 mb-0">
                          <li><Link to=''>Meat & Poultry</Link></li>
                          <li><Link to=''>Fresh Vegetable</Link></li>
                          <li><Link to=''>Herbs & Seasonings</Link></li>
                          <li><Link to=''>Cuts & Spourts</Link></li>
                          <li><Link to=''>Exotic Fruits & Veggies</Link></li>
                          <li><Link to=''>Packaged Products</Link></li>
                        </ul>
                      </div>

                      <div className="col">
                        <img src="/public/vf.jpg" className="w-100"></img>

                      </div>


                    </div>
                  </div>
                </li>

                <li className="list-inline-item">
                  <Button><Link>Blog</Link></Button>
                </li>

                <li className="list-inline-item">
                  <Button><Link>Pages<KeyboardArrowDownIcon></KeyboardArrowDownIcon></Link></Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li><Button><Link to='/about'>About Us</Link></Button></li>
                      <li><Button><Link to='/about'>Contact</Link></Button></li>
                      <li><Button><Link to='/about'>My Account</Link></Button></li>
                      <li><Button><Link to='/about'>Login</Link></Button></li>
                      <li><Button><Link to='/about'>Register</Link></Button></li>
                      <li><Button><Link to='/about'>Forgot Password</Link></Button></li>
                      <li><Button><Link to='/about'>Reset Password</Link></Button></li>
                      <li><Button><Link to='/about'>Purchase Guide</Link></Button></li>
                      <li><Button><Link to='/about'>Terms of service</Link></Button></li>
                      <li><Button><Link to='/about'>Error 404</Link></Button></li>
                    </ul>
                  </div>
                </li>

                <li className="list-inline-item">
                  <Button><Link>Contact</Link></Button>
                </li>

              </ul>
            </nav>
          </div>
          <div className="col-sm-2 part3 d-flex align-itms-center">
            <div className="phno d-flex align-items-center">
              <span><HeadphonesIcon className="icons"></HeadphonesIcon></span>
              <div className="info ml-3">
                <h6 className="text-g">1900-888</h6>
                <p className="text-g">24/7 Support Center</p>
              </div>





            </div>

          </div>

        </div>
      </div>

    </Nav>
  )
}

export default Navbar

const Nav = styled.div`

width: 100%;
height: 70px;
margin: auto;
border-top: 1px solid rgba(0,0,0,0.1);
border-bottom:1px solid rgba(0,0,0,0.1) ;
margin-top: 10px;
//position: sticky;//
top: 100px;
  left: 0;
  z-index: 1000;

.btn{
  background: #3bb77e;
  color: white;
  margin-bottom: 100px;
  text-transform: capitalize;
  font-size: 16px;
  
}

.btn:hover{
  background-color: #3bb77e;
  color: white;
}

.icon{
  padding-bottom: 8px;
}

.list-list-inline{
  //background-color: yellow;//
  margin-left: -60px;
}

.list-inline-item{
  margin-top: -100px;
  position: relative;
}

.dropdown_menu{
  position: absolute;
  top: 95%;
  left: auto;
  width: 250px;
  height: auto;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
  padding: 5px 15px;
  z-index: 100;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.1s ease-in-out;
  //background-color: gray;//
}

li:hover .dropdown_menu{
  opacity: 1;
  visibility: inherit;
  top: 95%;
}

.dropdown_menu ul{
  //background-color: green;//
  width: 100%;
  
}

.dropdown_menu li{
  list-style: none;
  width: 100%;
  text-align: left;
  
  //background-color: yellow;//
}

.dropdown_menu ul li Button{
  color: #3bb77e;
  cursor: pointer;
  width: 100%;
  //background-color: pink;//
  right: 10%;
}

.dropdown_menu li Button:hover{
  background-color:whitesmoke;
  color: #3bb77e;
}

ul li button a{
  text-decoration: none;
  color: black;
  font-size: 12px;
  
}

button:hover{
    color: #3bb77e;
  }

.phno{
  height: 90px;
  //background-color: pink;//
}

.info{
  //background-color: gray;//
  margin-bottom: 50px;
  font-size: 15px;

  p{
    font-size: 15px;
    color: black;
  }
}

.icons{
  margin-bottom: 100px;
}

.megamenu{
  height: auto;
  padding: 30px 45px;
  margin-top: -80px;
  right: -10px;
  z-index: 100;
  background-color: #fff;
}


.col img{
  width: 300px;
  height: 200px;
}

.megamenu .col ul li{
  margin-bottom: 10px;
  display: block;
  margin-left: -30px;
}

.megamenu .col ul li a{
  color: rgba(0,0,0,0.8);
  text-decoration: none;
}

`;



