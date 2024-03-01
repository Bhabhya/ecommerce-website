import styled from 'styled-components'
import Logo from '../../assets/images/logo.svg';
import { CiSearch } from "react-icons/ci";
import Select from './selectdrop/Select';
import { useEffect, useState } from 'react';
import axios from 'axios'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconCart from '../../assets/images/icon-cart.svg';
import IconUser from '../../assets/images/icon-user.svg';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Navbar from '../navbar/Navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Newsletter from '../newsletter/Newsletter';

const Header = ({data}) => {

  const[isopendropdown,setisopendropdown]=useState(false)

  const [categories,setcategories]=useState([
    'Milks and Dairies',
    'Wines and Drinks',
    'Clothing and Beauty',
    'Fresh Seafood',
    'Pet Food and Toys',
    'Fast Food',
    'Baking Material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice',
    'Milks and Dairies',
    'Wines and Drinks',
    'Clothing and Beauty',
    'Fresh Seafood'
  ]);

  const [countrylist, setCountrylist] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries/');
      setCountrylist(response.data.data.map((item) => item.country));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
   <Main>
   <div className='container-fluid'>
   <div className='row'>
   <div className='col-sm-2'>
   <img src={Logo}></img>
   </div>
<div className='col-sm-5'>
   <div className='headersearch d-flex align-items-center'>
   <div className='categories'>
   
   <Select data={categories} placeholder={'All Categories'} icon={false}></Select>
 </div>

   <div></div>
   <div className='search'>
   <input type='text' placeholder='search here'></input>
   <CiSearch className='searchicon'></CiSearch>
   </div>
   </div>
   </div>

<div className='col-sm-5 '>
<div className='countrywrapper'>

<Select data={countrylist} placeholder={'Your Location'} icon={<AddLocationIcon className='go'></AddLocationIcon>}></Select>

</div>
<ClickAwayListener onClickAway={()=>setisopendropdown(false)}>
<ul className='list list-inline mb-0 headertabs'>
<li className='list-inline-item'><span><img src={IconCompare}></img><span className='badge bg-success rounded-circle'>3</span>Compare</span></li>
<li className='list-inline-item'><span><img src={IconHeart}></img><span className='badge bg-success rounded-circle'>3</span>Wishlist</span></li>
<li className='list-inline-item'><span><img src={IconCart}></img><span className='badge bg-success rounded-circle'>3</span>Cart</span></li>
<li className='list-inline-item'><span onClick={()=>setisopendropdown(!isopendropdown)}><img src={IconUser} className='top' ></img>Account</span>

{isopendropdown!=false &&
<ul className='dropdownmenu'>

<li><Button className='align-item-center'><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>My Account</Button></li>
<li><Button><LocationOnOutlinedIcon></LocationOnOutlinedIcon>Order Tracking</Button></li>
<li><Button><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>My Wishlist</Button></li>
<li><Button><SettingsOutlinedIcon></SettingsOutlinedIcon>Setting</Button></li>
<li><Button><ExitToAppOutlinedIcon></ExitToAppOutlinedIcon>Sign out</Button></li>
</ul>
  }

</li>
</ul>
</ClickAwayListener>

</div>

   </div>
   </div>
   <Navbar data={data}></Navbar>
   
   </Main>
   
  )
}

export default Header


const Main=styled.div`

main{
width: 100px;
//height: 80px;//
margin: auto;
padding: 15px 0px;

}



body{
  font-family: "PT Serif", serif;
}

.headersearch{
    width: 90%;
    height: 40px;
    border: 1px solid #3bb77e;
    padding: 10px 95px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 20px;
    padding-left: 100px;
    //background-color: pink;//
    
}

.categories {
    width: 59%; /* Adjust the width as needed */
    margin-right: 10px;
    //background-color: pink;//
  }


.go{
  //background-color: pink;//
  margin-left: -10px;
 
}


.search{
  width: 70%;
  position: relative;
  padding-left: 0px;
  bottom: -5px;
}
 input{
  width: 100%;
  height: 20px;
  border: 0px;
  outline: none;
  font-size: 18px;
}

.searchicon{
  position: absolute;
  right: -85px;
  top: -5px;

}

.countrywrapper{
  //background-color: pink;//
  margin-top: 20px;
  gap: 50px;
  margin-left: -15px;
  width: 100%;
}

.countrywrapper .openselect{
    margin-top:-35px;
    text-align: center;
    cursor: pointer;
}

.countrywrapper .selecrdrop{
  border: 1px solid black;
  width: 30%;
  margin-left: -15px;
  padding-left: 10px;
  font-size: 15px;
  height: 40px;
  cursor: pointer;

 
}

.headertabs{
  margin-top: -50px;
  text-align: right;
  //background-color: pink;//
  
}

.headertabs li{
  position: relative;
  top: -20px;
  left: 10px;
  margin-top: 20px;
  
}

.headertabs li span img{
  margin-right: 10px;
  margin-bottom: 5px;
  
}
span .badge{
  width: 25px;
  height: 25px;
  color: #fff;
  position: absolute;
  top: -20px;
  right: 60px;
  
}

.dropdownmenu{
  position: absolute;
  top: 40%;
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

.dropdownmenu li Button{
  width: 100%;
  text-align: center;
  justify-content: flex-start;
  color: black;
  text-transform: capitalize;
  padding: 8px 15px ;
}

.top{
  cursor: pointer;
}

.list-inline-item{
  cursor: pointer;
  //background-color: pink;//
}

img{
  margin-left: -20px;
  padding-left: 20px;
}







`;