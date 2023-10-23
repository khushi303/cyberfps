import React from 'react'
import { Container } from 'react-bootstrap';
import Solana from '../assets/images/solana-img.png';
import Unreal from '../assets/images/unreal-img.png';

const Faq = () => {
  return (
    <div>
      <div className='bg-dotted1 py-5'>
        <Container className='mw-1140 py-lg-5'>
          <div className='d-flex align-items-center justify-content-center flex-lg-row flex-column py-lg-4'>
            <img src={Solana} alt="solanaimg" className='mw-385  w-100' />
            <img src={Unreal} alt="unrealimg" className='mw-263 w-100 ms-lg-5 ms-0 mt-lg-0 mt-4' />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Faq