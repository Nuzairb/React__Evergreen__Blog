import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import BlogCard from './BlogCard';
import './NewArticle.css';

class NewArticle extends Component  {
    render() {
        return(
            <div className="NewArticle">
                <Container>
                    <h2 className="text-uppercase text-center font-weight-light">Newest Article</h2>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </Container>
            </div>
        );
    }
}

export default NewArticle;

