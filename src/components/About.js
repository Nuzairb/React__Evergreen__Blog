import React, { Component } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import About1 from '../img/about1.jpg';
import About2 from '../img/about2.jpg';
import About3 from '../img/about3.jpg';


const divStyle = {
    padding: '5rem 0',
    background: '#A0ABA0'
};

class AboutCard extends Component {
    render() {
        return(
            <Card className="shadow-lg mb-5 border-0 rounded-0">
                <Card.Img className="rounded-0" variant="top" src={this.props.Img} />
                <Card.Body className="p-3">
                    <Card.Title className="text-uppercase text-center font-weight-light mb-0">{this.props.cardTitle}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

class About extends Component {
    render() {
        return(
            <div style={divStyle}>
                <Container>
                    <h2 className="text-uppercase text-center font-weight-light mb-4 text-white">About Us</h2>
                    <Row>
                        <Col xs={12} sm={6}  md={4}>
                            <AboutCard Img={About1} cardTitle="Isa Brown" />
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <AboutCard Img={About2} cardTitle="Maria Rossi" />
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <AboutCard Img={About3} cardTitle="Linda Brown" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;
