import styled from "styled-components"
import Notfoundimg from '../../assets/images/page-404.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <Section className="notfound">
    <div className="container-fluid">
    <div className="box">
    <img src={Notfoundimg}></img>
    <br/> <br/>
    <h1>Page Not Found</h1>
    <p>The link you clicked may be broken or the pages may have been removed. Visit the Homepage or Contact us about the problem.</p>

    <br/>

    <div className="d-flex">
    
    <Button className="btn-g btn-lg m-auto toy" ><Link to={'/'}>Back to Home Page  </Link></Button>
   
    </div>
    </div>
    </div>
    
    </Section>
  )
}

export default Notfound

const Section=styled.div`
.notfound{
    width: 100%;
    height: auto;
    padding: 45px 0px;
}

.box{
    width: 50%;
    height: auto;
    padding: 100px 30px;
    text-align: auto;
    margin: auto;
}

.box h1{
    font-size: 50px;
    font-weight: bold;
    color: #000;
    opacity: 0.7;
}

.box p{
    color: #000;
    font-size: 15px;
    margin-top: 25px;
}

.toy{
    background-color: #3bb77e;
    
}

.toy a{
    color: #fff;
    text-decoration: none;
}

.toy:hover{
    background-color: goldenrod;
}
`;