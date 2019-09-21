import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BlogCard from './BlogCard';
import CardImg1 from '../img/blog1.jpg';
import CardImg2 from '../img/blog2.jpg';
import CardImg3 from '../img/blog3.jpg';
import CardImg4 from '../img/blog4.jpg';
import CardImg5 from '../img/blog5.jpg';
import CardImg6 from '../img/blog6.jpg';

const divStyle = {
    padding: '5rem 0',
    background: '#FAF2EA'
};

class Blogs extends Component {
    render() {
        return(
            <div style={divStyle}>
                <Container>
                    <h2 className="text-uppercase text-center font-weight-light mb-4">Blog</h2>
                    <Row>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardImg={CardImg3} cardTitle="Small Plants" cardBody="Liora in sisus? Non frigilla non lacus tortor. neque purus, plecerat elit." />
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardImg={CardImg6} cardTitle="Botanica Asia" cardBody="Sur sadipscing elitr, nonumy eirmod tempor invidunt ut labore et dolore! "/>
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardImg={CardImg1} cardTitle="Botanica China" cardBody="Bilendum commondo sagititis nisi, aucotr habitant euismod? Viverra urna?"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardImg={CardImg4} cardTitle="Grow Better" cardBody="Liora in sisus? Non frigilla non lacus tortor. neque purus, plecerat elit." />
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardImg={CardImg5} cardTitle="British Greens" cardBody="Liora in sisus? Non frigilla non lacus tortor. neque purus, plecerat elit." />
                        </Col>
                        <Col xs={12} sm={6}  md={4}>
                            <BlogCard cardImg={CardImg2} cardTitle="Desert Plants" cardBody="Liora in sisus? Non frigilla non lacus tortor. neque purus, plecerat elit." />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Blogs;
