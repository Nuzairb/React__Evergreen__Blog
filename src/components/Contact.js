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
                            <Col>
                                <Form.Control className="rounded-0" placeholder="Name" />
                            </Col>
                            <Col>
                                <Form.Control className="rounded-0" placeholder="Phone" />
                            </Col>
                            <Col>
                                <Form.Control className="rounded-0" placeholder="Email" />
                            </Col>
                            <Col>
                                <Button className="w-100 rounded-0" variant="dark" type="submit">
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