import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './BlogCard.css';
import CardImg from '../img/plant1.jpg';

class BlogCard extends Component {
    render() {
        return(
            <Card className="shadow-lg mb-5">
                <Card.Img variant="top" src={ CardImg } />
                <Card.Body>
                    <Card.Title className="text-center font-weight-light text-uppercase">{this.props.cardTitle}</Card.Title>
                    <hr />
                    <Card.Text className="text-center">
                        {this.props.cardBody}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default BlogCard;