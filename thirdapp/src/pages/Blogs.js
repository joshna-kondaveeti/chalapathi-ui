import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
	return (
    <div>
      <h1>Blog</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/50x50" />
        <Card.Body>
          <Card.Title>Blog Post Title</Card.Title>
          <Card.Text>
            This is a brief description of the blog post content. It provides a summary of the main points.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;