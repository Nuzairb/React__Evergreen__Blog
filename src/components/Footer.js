import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Logo from '../img/logo.png'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="Footer">
               <Container>
                    <Row>
                        <Col lg={3} md={6} xs={12}>
                            <img className="w-100" alt="logo" src={Logo} />
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <ul>
                                <li><a href="/">Evergreen</a></li>
                                <li><a href="/">Iasa Brown</a></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <ul className="d-flex icons">
                                <li className="mx-2"><a href="/"><FaFacebook /></a></li>
                                <li className="mx-2"><a href="/"><FaTwitter /></a></li>
                                <li className="mx-2"><a href="/"><FaInstagram /></a></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <ul>
                                <li><a href="/">Privicy</a></li>
                                <li><a href="/">Leagle Notes</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container> 
            </div>
        )
    }
}

export default Footer;
