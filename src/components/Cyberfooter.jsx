import React from 'react';
import { Container } from 'react-bootstrap';
import Footerimg from '../assets/images/footer-logo.png';
import { Discordicon } from './IconImg';
import { Tweeticon } from './IconImg';
import { Instaicon } from './IconImg';

const Cyberfooter = () => {
    return (
        <div className='pt-5 bg-black bg-footer'>
            <Container className='d-flex align-items-center justify-content-center flex-column mw-1140'>
                <img src={Footerimg} alt="Footer-logo" className='cur_pointer' />
                <div className='d-flex align-items-center justify-content-center gap-3 py-4'>
                    <Tweeticon />
                    <Instaicon />
                    <Discordicon />
                </div>
            </Container>
            <div className='border-line'></div>
            <Container className='mw-1140'>
                <p className='mb-0 ff-montserrat fs-sm fw-normal lh-150 text-center text-white py-3 my-1'>© Cyber FPS 2022</p>
            </Container>
        </div>
    )
}

export default Cyberfooter