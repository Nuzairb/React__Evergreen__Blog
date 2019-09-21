import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Container>
                    <h2 className="text-uppercase text-center text-white font-weight-light mb-2">Contact Us!</h2>
                    <h3 className="text-uppercase text-center text-white font-weight-light mb-4">Become A Part of Evergreen!</h3>
                    <Form className="font-weight-bold">
                        <Form.Row>
                            <Col lg={3} md={6} sm={12} >
                                <Form.Control className="rounded-0 my-2" placeholder="Name" />
                            </Col>
                            <Col lg={3} md={6} sm={12} >
                                <Form.Control className="rounded-0 my-2" placeholder="Phone" />
                            </Col>
                            <Col lg={3} md={6} sm={12} >
                                <Form.Control className="rounded-0 my-2" placeholder="Email" />
                            </Col>
                            <Col lg={3} md={6} sm={12} >
                                <Button className="w-100 rounded-0 my-2" variant="dark" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Contact;