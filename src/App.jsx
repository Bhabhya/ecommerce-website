import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header'
import Index from './pages/Home/Index';
import Listing from './pages/listing/Listing';
import Footer from './components/header/footer/Footer';
import Notfound from './pages/notfound/Notfound';
import Details from './pages/details/Details';
import { useEffect, useState } from 'react';
import data from '../src/data.json'

function App() {

  const[productdata,setproductdata]=useState([]);

  useEffect(()=>{
    getdata();
  },[])

  const getdata=async()=>{
    try{
      console.log(data);
      setproductdata(data)

      }
    catch(error){
      console.log(error.message)
    }
  };
  


  return (
    productdata.length!==0 &&
    <BrowserRouter>
    <Header data={productdata}></Header>
    <Routes>
    <Route exact={true} path='/' element={<Index></Index>}></Route>
    <Route exact={true} path='/listing' element={<Listing></Listing>}></Route>
    <Route exact={true} path='*' element={<Notfound></Notfound>}></Route>
    <Route exact={true} path='/details' element={<Details></Details>}></Route>
    </Routes>
    <Footer></Footer>

    </BrowserRouter>
  )
}

export default App
