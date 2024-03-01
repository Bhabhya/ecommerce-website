import styled from "styled-components"
import Slider from '@mui/material/Slider';
import React from "react";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Bannerimg from '/public/banner1.jpg'


function valuetext(value) {
    return `${value}°C`;
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Sidebar = () => {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event , newValue) => {
      setValue(newValue);
    };
  return (

    <Main>
    <div className="sidebar" >
    <div className="card border-0 shadow">
    <h3>Category</h3>

    <div className="catlist">
    <div className="catitem d-flex-align-items-center">
    <span className="img"><img src="/public/icon-1.svg" width={30}></img></span>
    <h5 className="mb-0 ">Milk and Diaries <span className="rounded-circle ml-auto">30</span></h5>
    </div>

    <div className="catitem d-flex-align-items-center">
    <span className="img"><img src="/public/icon-1.svg" width={30}></img></span>
    <h5 className="mb-0 ">Milk and Diaries <span className="rounded-circle ml-auto">30</span></h5>
    </div>

    <div className="catitem d-flex-align-items-center">
    <span className="img"><img src="/public/icon-1.svg" width={30}></img></span>
    <h5 className="mb-0 ">Milk and Diaries <span className="rounded-circle ml-auto">30</span></h5>
    </div>

    <div className="catitem d-flex-align-items-center">
    <span className="img"><img src="/public/icon-1.svg" width={30}></img></span>
    <h5 className="mb-0 ">Milk and Diaries <span className="rounded-circle ml-auto">30</span></h5>
    </div>

    <div className="catitem d-flex-align-items-center">
    <span className="img"><img src="/public/icon-1.svg" width={30}></img></span>
    <h5 className="mb-0 ">Milk and Diaries <span className="rounded-circle ml-auto">30</span></h5>
    </div>

    <div className="catitem d-flex-align-items-center">
    <span className="img"><img src="/public/icon-1.svg" width={30}></img></span>
    <h5 className="mb-0 ">Milk and Diaries <span className="rounded-circle ml-auto">30</span></h5>
    </div>
    
    </div>

    </div>

    <div className="card border-0 shadow ">
    <h3 >Fill by price</h3>
    <Slider className="fill"
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="success"
      />

      <div className="d-flex pt-2 pb-2 pricerange">
      <span>From<strong className="text-success">${value[0]}</strong></span>
      <span className="key">From<strong className="text-success">${value[1]}</strong></span>
      </div>

      <div className="filters">
      <h6>Colors</h6>
      <ul>
      <li> <Checkbox {...label} color="success" className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success" className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success"className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success"className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success" className="check"/>Red(56)</li>
      
      </ul>
      
      </div>

      <div className="filters">
      <h6>Item Condition</h6>
      <ul>
      <li> <Checkbox {...label} color="success" className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success" className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success"className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success"className="check"/>Red(56)</li>
      <li> <Checkbox {...label} color="success" className="check"/>Red(56)</li>
      
      </ul>
      
      </div>

      <Button className="btn"><FilterAltOutlinedIcon className="icon"></FilterAltOutlinedIcon>Filter</Button>

    <img src={Bannerimg} className="w-100"></img>
    </div>
    </div>
    </Main>
  )
}

export default Sidebar

const Main=styled.div`
.catlist{
    //background-color: pink;//
    margin-top: -20px;
}


.catlist img{
    margin-left: 10px;
    padding-bottom: 10px;
}

.catitem h5{
    //background-color: gray;//
    margin-top: -30px;
    margin-left: 50px;
}

.rounded-circle{
    background-color: #3bb77e;
    
    color: whitesmoke;
}

.catitem{
    margin: 10px 0px;
    border: 1px solid black;
    border-radius: 4px;
}

.fill{
    //background-color: pink;//
    margin-top: -15px;
}

.key{
    margin-left: auto;
}

.filters{
  padding: 5px 0px;
}

.filters ul{
  margin-left: -10px;
}

.filters ul li{
  width: 100%;
  margin-bottom: 0px;
 margin-left: -30px;
  list-style: none;
}

.check{
  margin-top: -10px;
}

.btn{
  background-color: #3bb77e;
  color: white;
  margin-bottom: 0px;
  height: 45px;
  border-radius: 5px;
  width: 40%;
}

.btn:hover{
  background-color: #000;
}

.icon{
  margin-bottom: 10px;
}
`;