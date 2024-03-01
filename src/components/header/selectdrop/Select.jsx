import { useState } from "react"
import styled from "styled-components"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Newsletter from "../../newsletter/Newsletter";



const Select = ({data,placeholder,icon}) => {

    const[isopenselect,setisopenselect]=useState(false);
    const[selectedindex,setselectedindex]=useState(0);
    const[selecteditem,setselecteditem]=useState(placeholder);


    const openselect=()=>{
setisopenselect(!isopenselect);
    }

const closeselect=(index,name)=>{
    setselectedindex(index);
    setisopenselect(false);          //jab hm li choose kre ek toh automatically close ho jaye
    setselecteditem(name);
    }
  return (
    <Section>
    <ClickAwayListener onClickAway={()=>setisopenselect(false)}>
    <div className='selecrdrop cursor position-relative'>
    {icon}
   <span className="openselect" onClick={openselect}>{selecteditem}<KeyboardArrowDownIcon className='arrow'></KeyboardArrowDownIcon></span>
   
   {
    isopenselect===true &&
   
    <div className="selectdrop">
    <div className="searchfield">
    <input type="text" placeholder="Search here"></input>
    </div>

    <ul className="searchresults">
    <li key={0} onClick={()=>closeselect(0,item)} className={`${selectedindex===0 ?'active':' '}`}>{placeholder}</li>
    {
    data.map((item,index)=>{
            return(
                <li key={index+1} onClick={()=>closeselect(index+1,item)} className={`${selectedindex===index+1 ?'active':' '}`}>{item}</li>
            )
        })
    }
    
    
    </ul>

    </div>
   }
   
    </div>
    </ClickAwayListener>

    
    
    </Section>
  )
}

export default Select

const Section=styled.div`
.selectdrop{
    width: 300px;
    height: auto;
    background: #fff;
    z-index: 1200;
    top: 0px;
    box-shadow: 0 3px 6px rgba(0 0 0/20%);
    padding: 2px;
    position: absolute;
    top: 50%;
    left: -15px;
    
    
}

.searchfield{
input{
    width: 100%;
    height: 50px;
    border: 1px solid #bce3c9;
    outline: none;
    padding: 0px 5px;
    
}
}

.searchresults{
    width: 100%;
    padding: 10px 0px;
    margin: 0px;
    margin-top: 10px;
    max-height: 300px;
    overflow-y: scroll;
    
}

.searchresults li{
    list-style: none;
    font-size: 18px;
    width: 100%;
    padding: 10px;
   
}

.searchresults li:hover{
    background: #3bb77e;
    color: #fff;
}

.searchresults li:active{
    background: #f1f1f1;
    color: #000;
}

.selecrdrop{
  width: 180px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
}
.selecrdrop::after{
  content: ' ';
  width: 1px;
  height: 30px;
  background: rgba(0,0,0,0.2);
}

.openselect{
    display: block;
    padding: 10px 0px;
    //background-color: pink;//
    margin-left: -20px;
    padding-right: -50px;
    //background-color: pink;//
    
}



.arrow{
    position: absolute;
    top: 2px;
    font-size: 25px;
    right: 15px;
    
    //background-color: pink;//
}



`;