import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Cyberlogo from '../assets/images/header-logo.png';
import { Link } from "react-router-dom";
import { Discordicon } from './IconImg';
import { Tweeticon } from './IconImg';
import { Instaicon } from './IconImg';
import Cyberhead from '../assets/images/header-cyber-img.png';
import Freeimg from '../assets/images/free-fire-img.png';


const Header = () => {
    function openNav() {
        document.getElementById("nicon").classList.toggle('start-0');
        document.body.classList.toggle("overflow_hidden");
        document.getElementById("menu-icon").classList.toggle("cross");
    }
    return (
        <div className='bg-header'>
            <Container className='mw-1140'>
                <div className='d-flex align-items-center justify-content-between py-3'>
                    <div className='cur_pointer'>
                        <img src={Cyberlogo} alt="header-logo" className='mw-120 w-100' />
                    </div>
                    <ul
                        id='nicon'
                        className="d-flex gap-3 mb-0 flex-column list-unstyled flex-lg-row justify-content-center align-items-center mobile_view z_index_3"
                    >
                        <li className="link hover_border position-relative">
                            <Link
                                className="nav-link text-white fs-sm fw-normal ff-audiowide"
                                to="/About"
                            >
                                About
                            </Link>
                        </li>
                        <li className="link hover_border position-relative">
                            <Link
                                to="/CryptoStraps"
                                className="text-white fs-sm fw-normal ff-audiowide"
                            >
                                CryptoStraps
                            </Link>
                        </li>
                        <li className="link hover_border position-relative">
                            <Link
                                to="/Team"
                                className="text-white fs-sm fw-normal ff-audiowide"
                            >
                                Team
                            </Link>
                        </li>
                        <li className="link hover_border position-relative">
                            <Link
                                to="Faq"
                                className="text-white fs-sm fw-normal ff-audiowide"
                            >
                                Faq
                            </Link>
                        </li>
                        <li className="link hover_border position-relative">
                            <Link
                                to="Cyberfooter"
                                className="text-white fs-sm fw-normal ff-audiowide"
                            >
                                Light Paper
                            </Link>
                        </li>
                    </ul>
                    <div className='d-flex align-items-center justify-content-center pt-3 pb-2 gap-sm-3 gap-2 position-relative z-2'>
                        <Tweeticon />
                        <Instaicon />
                        <Discordicon />
                    </div>
                    <div id='menu-icon' onClick={openNav} className='menu-box d-flex d-lg-block justify-content-between align-items-center flex-column z-3'>
                        <span className='line'></span>
                        <span className='line1'></span>
                        <span className='line2'></span>
                    </div>
                </div>
            </Container>
            <Container className='mw-1140'>
                <Row className='pt-3'>
                    <Col lg={6} className='d-flex align-items-lg-start align-items-center justify-content-center flex-column'>
                        <img src={Cyberhead} alt="cyberheadimg" />
                        <p className='ff-audiowide fs-lg fw-normal text-white pt-3 pb-5 mb-0'>Web3 Gaming Reimagined</p>
                        <div className='d-flex align-items-center gap-3 '>
                            <button className='btn-get ff-audiowide fs-sm fw-normal text-black text-nowrap'>Get Started</button>
                            <button className='btn-learn ff-audiowide fs-sm fw-normal text-white text-nowrap'>Learn More</button>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-lg-0 mt-5'>
                        <img src={Freeimg} alt="Freefireimg" className='w-100' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header