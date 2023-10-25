import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import Modal1 from '../assets/images/modal-1.png';
import Modal2 from '../assets/images/modal-2.png';
import Modal3 from '../assets/images/modal-3.png';
import Modal4 from '../assets/images/modal-4.png';

const Team = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <div className='pt-md-5 pb-5'>
            <Container className='py-5 custom-container mb-md-5'>
                <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear" className='ff-audiowide fs-xl fw-normal text-black text-center mt-md-5 mb-5 teal-line1 position-relative'>Team</h2>
                <div data-aos="fade-up-right" data-aos-duration="1500" data-aos-easing="linear">
                    <Slider {...settings}>
                        <div className='px-2'>
                            <img src={Modal1} alt="modal-1" className='w-100 img_hover' />
                            <div className='pt-3'>
                                <h2 className='ff-montserrat fs-md text-black mb-0 fw-semibold mb-2'>Collin</h2>
                                <p className='ff-montserrat fs-sm fw-normal text-black'>Founder</p>
                            </div>
                        </div>
                        <div className='px-2'>
                            <img src={Modal2} alt="modal-2" className='w-100 img_hover' />
                            <div className='pt-3'>
                                <h2 className='ff-montserrat fs-md text-black fw-semibold mb-0 mb-2'>Pharaox</h2>
                                <p className='ff-montserrat fs-sm fw-normal text-black'>Founder</p>
                            </div>
                        </div>
                        <div className='px-2'>
                            <img src={Modal3} alt="modal-3" className='w-100 img_hover' />
                            <div className='pt-3'>
                                <h2 className='ff-montserrat fs-md text-black fw-medium mb-0 mb-2'>Zach</h2>
                                <p className='ff-montserrat fs-sm fw-normal text-black'>CM</p>
                            </div>
                        </div>
                        <div className='px-2'>
                            <img src={Modal4} alt="modal-4" className='w-100 img_hover' />
                            <div className='pt-3'>
                                <h2 className='ff-montserrat fs-md text-black fw-semibold mb-2 mb-0'>Arlen</h2>
                                <p className='ff-montserrat fs-sm fw-normal text-black'>CM</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Team