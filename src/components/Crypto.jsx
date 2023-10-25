import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Battleinterface from '../assets/images/battle-interface.png';
import shootinginterface from '../assets/images/shooting-interface.png';
import { Gplaybtn } from './IconImg'

const Crypto = () => {
    return (
        <div className='bg-dotted pt-md-5 pt-3'>
            <Container className='pt-5 custom-container'>
                <div className='d-flex align-items-center justify-content-center line-skyblue position-relative'>
                    <h2 data-aos="zoom-in" data-aos-duration="900" className='ff-audiowide fs-xl fw-normal text-black'>CyberFPS<span className='text-skyblue'> Gameplay</span></h2>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center position-relative pt-modal">
                    <div
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="play_btn"
                    >
                        <Gplaybtn className='gplay_btn' />
                    </div>
                    <img data-aos="fade-up"
                        data-aos-duration="900" src={Battleinterface} alt="Battleinterface" className="w-100" />
                </div>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="btn-cross d-flex justify-content-center align-items-center position-absolute right-1 top-3">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="d-flex align-items-center justify-content-center h-500">
                                <iframe
                                    max-width="1160"
                                    height="100%"
                                    width="100%"
                                    src="https://www.youtube.com/embed/ZlenY4qaORo?si=OEaKuqwwcLJOwHc-"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='pt-5 mt-lg-5 mt-0 pb-lg-5 pb-4 custom-container'>
                <Row className='pb-5 pt-5'>
                    <Col data-aos="fade-right" data-aos-duration="900" lg={6}>
                        <h2 className='ff-audiowide fs-xl fw-light mw-448'>What is <span className='text-skyblue teal-line position-relative'>CyberFPS</span></h2>
                        <p className='ff-montserrat mw-562 fs-sm fw-normal lh-160 op-7 pt-4'>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
                        <p className='ff-montserrat mw-562 fs-sm fw-normal lh-160 op-7'>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
                    </Col>
                    <Col data-aos="fade-left" data-aos-duration="1000" lg={6} className='mt-lg-0 mt-4 d-flex align-items-center justify-content-lg-end justify-content-center'>
                        <img src={shootinginterface} alt="shootinginterface" className='w-100 mw-528' /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Crypto