import Banner1 from '../../assets/images/banner1.jpg'
import Banner2 from '../../assets/images/banner2.jpg'
import Banner3 from '../../assets/images/banner3.jpg'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Main>
      <div className='bannersection'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <div className='box'>
                <img src={Banner1} className='w-100 transition' alt='Banner 1'></img>
              </div>
            </div>

            <div className='col'>
              <div className='box'>
                <img src={Banner2} className='w-100 transition' alt='Banner 2'></img>
              </div>
            </div>

            <div className='col'>
              <div className='box'>
                <img src={Banner3} className='w-100 transition' alt='Banner 3'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Banner

const Main = styled.div`

.bannersection{
  padding: 25px 0px;

}

.box img{
  overflow: hidden;
  border-radius: 15px;
}

.box:hover img{
  transform: scale(1.1);
}
`;
