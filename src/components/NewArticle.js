import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCard from './BlogCard';
import './NewArticle.css';

class NewArticle extends Component  {
    render() {
        return(
            <div className="NewArticle">
                <Container>
                    <h2 className="text-uppercase text-center font-weight-light">Newest Article</h2>
                    <Row>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardTitle="Small Plants" cardBody="Liora in sisus? Non frigilla non lacus tortor. neque purus, plecerat elit." />
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardTitle="Botanica Asia" cardBody="Sur sadipscing elitr, nonumy eirmod tempor invidunt ut labore et dolore! "/>
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardTitle="Botanica China" cardBody="Bilendum commondo sagititis nisi, aucotr habitant euismod? Viverra urna?"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NewArticle;