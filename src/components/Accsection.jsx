import React from 'react';
import Container from "react-bootstrap/Container";
import { Accordion } from "react-bootstrap";
import { Accrdnradius } from "./IconImg";
import { Accrdnradius_bttm } from "./IconImg";

const Accsection = () => {
    return (
        <div>
            <div className="bg-black pb-5 pt-3">
                <Container className="pb-5 pt-xl-4 custom-container d-flex align-items-center justify-content-center flex-column">
                    <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200" className="fw-normal ff-audiowide text-white text-center pt-4 fs-xl mb-0 position-relative teal-line2">
                        Faq
                    </h3>
                    <Accordion data-aos="fade-up-left" data-aos-easing="linear" data-aos-duration="1300" className="mx-auto pb-xl-5 mt-lg-5 pt-lg-5 pt-5">
                        <Accordion.Item eventKey="0">
                            <Accrdnradius_bttm />
                            <Accordion.Header className="ff-Montserrat fw-semibold fs-md4 text-white Accordion_Header">
                                Dui lectus auctor fermentum potenti enim. ?
                            </Accordion.Header>
                            <Accrdnradius />
                            <Accordion.Body>
                                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                                magna adipiscing facilisis a, nulla.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="mt-4">
                            <Accrdnradius_bttm />
                            <Accordion.Header>
                                Placerat eros faucibus aliquam nunc, mattis
                            </Accordion.Header>
                            <Accrdnradius />
                            <Accordion.Body>
                                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                                magna adipiscing facilisis a, nulla.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="mt-4">
                            <Accrdnradius_bttm />
                            <Accordion.Header>
                                Lorem nunc nunc risus viverra a
                            </Accordion.Header>
                            <Accrdnradius />
                            <Accordion.Body>
                                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                                magna adipiscing facilisis a, nulla.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="mt-4">
                            <Accrdnradius_bttm />
                            <Accordion.Header>
                                In aliquet fusce id dictumst id
                            </Accordion.Header>
                            <Accrdnradius />
                            <Accordion.Body>
                                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                                magna adipiscing facilisis a, nulla.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="mt-4">
                            <Accrdnradius_bttm />
                            <Accordion.Header>
                                Elementum pellentesque nisi, sagittis,{" "}
                            </Accordion.Header>
                            <Accrdnradius />
                            <Accordion.Body>
                                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                                magna adipiscing facilisis a, nulla.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </div>
    )
}

export default Accsection