import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import csimg from '../assets/images/cs-img.png'

const Cryptostraps = () => {
    return (
        <div className='bg-black'>
            <Container className='mw-1140 py-lg-4 py-3'>
                <Row className='py-5 justify-content-center'>
                    <Col lg={6} className='d-flex align-items-center justify-content-center justify-content-lg-start'>
                        <img src={csimg} alt="csimg" className='w-100 mw-394' />
                    </Col>
                    <Col lg={6} className='mt-lg-0 mt-4'>
                        <h2 className='ff-audiowide fs-xl fw-normal text-white teal-line position-relative'>CryptoStraps </h2>
                        <p className='ff-montserrat fs-sm fw-normal text-white op-7 mw-568 pt-3 mb-0'>CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cryptostraps