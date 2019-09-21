import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './BlogCard.css';


class BlogCard extends Component {
    render() {
        return(
            <Card className="shadow mb-5 border-0 rounded-0">
                <Card.Img className="rounded-0" variant="top" src={this.props.cardImg} />
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