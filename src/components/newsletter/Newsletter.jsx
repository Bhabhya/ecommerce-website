import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Newsletter = () => {
  return (
    <Main>
<div>
<input type='text' placeholder='enter your mail'><SendIcon></SendIcon></input>
<Button>Subscribe</Button>
</div>
  
    
    </Main>
  )
}

export default Newsletter

const Main=styled.div`

.newsletterbanner{
    width: 500px;
    height: 60px;
    position: absolute;
    bottom: 100px;
    left: 10%;
    top: 500px;
    z-index: 100;
  }
.newsletterbanner input{
width: 80%;
height: 100%;
background-color: #fff;
border-radius: 30px;
border: 0px;
outline: none;
padding-left: 50px;
font-size: 20px;
padding-right: 100px;
}
  
.newsletterbanner Button{
  padding: 10px 30px;
  border-radius: 50px;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  background: #3bb77e;
  height: 60px;
  font-size: 20px;
  text-transform: capitalize;
}

.tops{
  top: 8px;
  left: 10px;
  z-index: 10;
  transform: rotate(-21deg);
  opacity: 0.5;
  position: absolute;

}
`;