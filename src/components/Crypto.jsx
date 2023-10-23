import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Battleinterface from '../assets/images/battle-interface.png';
import shootinginterface from '../assets/images/shooting-interface.png'

const Crypto = () => {
    return (
        <div className='bg-dotted'>
            <Container className='pt-5 mw-1140'>
                <div className='d-flex align-items-center justify-content-center line-skyblue position-relative'>
                    <h2 className='ff-audiowide fs-xl fw-normal text-black'>CyberFPS<span className='text-skyblue'> Gameplay</span></h2>
                </div>
                <div className='d-flex align-items-center justify-content-center mt-lg-5 mt-4 position-relative'>
                    <img src={Battleinterface} alt="Battle-interface" className='mt-lg-4 mt-0 mw-1008 w-100' />
                </div>
            </Container>
            <Container className='pt-5 mt-lg-5 mt-3 pb-lg-5 pb-4 mw-1140'>
                <Row className='pb-5'>
                    <Col lg={6}>
                        <h2 className='ff-audiowide fs-xl fw-light mw-448'>What is <span className='text-skyblue teal-line position-relative'>CyberFPS</span></h2>
                        <p className='ff-montserrat mw-562 fs-sm fw-normal lh-160 op-7 pt-4'>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
                        <p className='ff-montserrat mw-562 fs-sm fw-normal lh-160 op-7'>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
                    </Col>
                    <Col lg={6} className='mt-lg-0 mt-4 d-flex align-items-center justify-content-lg-end justify-content-center'>
                        <img src={shootinginterface} alt="shootinginterface" className='w-100 mw-528' /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Crypto