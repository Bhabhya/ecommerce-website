import styled from "styled-components"
import { Link } from 'react-router-dom'
import Sidebar from "../../components/sidebar/Sidebar"
import Button from '@mui/material/Button';
import Products from "../../components/products/Products"
import { useState } from "react"


const Listing = () => {
  const [isopendropdown, setisopendropdown] = useState(false)
  const [isopendropdown2, setisopendropdown2] = useState(false)
  return (
    <Section className="listingpage">
      <div className="container-fluid">
        <div className="breadcrumb flex-column">
          <h1>Snack</h1>

          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to={''}>Home</Link>
            </li>

            <li className="list-inline-item">
              <Link to={''}>Shop</Link>
            </li>

            <li className="list-inline-item">
              <Link to={''}>Snack</Link>
            </li>

          </ul>
        </div>

        <div className="listingdata">
          <div className="row">
            <div className="col-md-3 sidebarwrapper">
              <Sidebar></Sidebar>
            </div>

            <div className="col-md-9 rightcontent">
              <div className="topstrip d-flex align-items-center">
                <p className="mb-0">We found <span className="text-success">29</span> items for you!</p>
                <div className="ml-auto d-flex align-items-center six">
                  <div className="tab ml-5">
                    <Button className="btn" onClick={() => setisopendropdown(!isopendropdown)}>Show:50</Button>
                    {isopendropdown != false &&
                      <ul className='dropdownmenu' style={{ marginRight: '-10px' }}>

                        <li><Button className='align-item-center' onClick={() => setisopendropdown(false)}>50</Button></li>
                        <li><Button className='align-item-center' onClick={() => setisopendropdown(false)}>100</Button></li>
                        <li><Button className='align-item-center' onClick={() => setisopendropdown(false)}>150</Button></li>
                        <li><Button className='align-item-center' onClick={() => setisopendropdown(false)}>All</Button></li>

                      </ul>
                    }
                  </div>

                  <div className="tab ml-5 position-relative">
                    <Button className="btn" onClick={() => setisopendropdown2(!isopendropdown2)}>Sort by:Features</Button>
                    {isopendropdown2 != false &&
                      <ul className='dropdownmenu' style={{ marginRight: '-50px' }}>

                        <li><Button className='align-item-center' onClick={() => setisopendropdown2(false)}>Price:low to high</Button></li>
                        <li><Button className='align-item-center' onClick={() => setisopendropdown2(false)}>Price:high to low</Button></li>
                        <li><Button className='align-item-center' onClick={() => setisopendropdown2(false)}>Release date</Button></li>
                        <li><Button className='align-item-center' onClick={() => setisopendropdown2(false)}>Avg. rating</Button></li>

                      </ul>
                    }
                  </div>

                </div>

              </div>
              <div className="productrow">
                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

                <div className="item">
                  <Products></Products>
                </div>

              </div>


            </div>
          </div>

        </div>

      </div>
      


    </Section>

  )
}

export default Listing

const Section = styled.div`
.listingpage{
  width: 100%;
  height: auto;
  padding: 45px 0px;
}

.breadcrumb{
  width: 100%;
  height: auto;
  padding: 45px 35px;
  background: #d8f1e5;
  border-radius: 20px;
  margin-bottom: 30px;
}

.breadcrumb h1{
  color: #000;
  opacity: 0.8;
  font-weight: bold;
}

.breadcrumb ul li{
  margin-right: 20px;
}

.breadcrumb ul li a{
  color: #000;
  text-decoration: none;
}



.sidebarwrapper h3{
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 30px;
  margin-top: -20px;
 
  
}

.sidebarwrapper:after{
  content: ' ';
  width: 24%;
  height: 3px;
  position: absolute;
  background-color: #f0f0f0;
  bottom: 60px;
  left: 10px;
  top: 450px;
  
  
}

.sidebarwrapper:before{
  content: ' ';
  width: 20%;
  height: 3px;
  background: #b0e52c;
  position: absolute;
  bottom: 60px;
  left: 10px;
  z-index: 10;
  top: 450px;
 
}

.sidebar .card{
  padding: 25px;
  border-radius: 10px;
}

.rightcontent {
  //background-color: pink;//
  width: 70%; /* Adjust the width as needed */
}

.productrow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* You can use other justify-content values based on your design */
}

.item {
  width: calc(30% - 10px); /* Adjust the width and consider margin */
  margin: 10px; /* Add margin between items */
  //background-color: yellow;//
}

.topstrip p{
font-weight: bold;
}

.six{
  margin-left: auto;
  margin-top: -10px;
}

.btn{
  border: 1px solid rgba(0,0,0,0.2);
  color: #000;
}

.tab{
  margin-left: 8px;
  position: relative;
}

.dropdownmenu{
  position: absolute;
  top: 100%;
  right: 0px;
  width: 200px;
  height: auto;
  background: #fff;
  z-index: 1200;
  cursor: pointer;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05 );
  
}

.dropdownmenu li{
  width: 100%;
  list-style: none;
}


`;