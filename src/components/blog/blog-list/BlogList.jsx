import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {

  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    getBlogs()
  }, [])


  const getBlogs = async () => {
    const response = await fetch(`http://localhost:3000/blogs`);
    const json = await response.json();
    setBlogs(json)
    console.log(json);
  }

  return (
    <Row>
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
