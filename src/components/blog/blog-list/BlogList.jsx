import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getBlogs()
  }, [])


  const getBlogs = async () => {
    const response = await fetch(`http://localhost:3001/blogs`);
    const { blogs } = await response.json();
    setBlogs(blogs)
    console.log(blogs);
  }

  return (
    <Row>
      {console.log(blogs.blogs)}
      {blogs && blogs.map((blog) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
          key={blog._id}
        >
          <BlogItem  {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
