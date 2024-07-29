import React, { useState } from 'react';
import './BlogPost.css';
import axios from 'axios';

function BlogPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    axios.post('/api/blog-posts', { title, content })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="blog-post">
      <h1>Create Blog Post</h1>
      <form>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleCreatePost}>Create Post</button>
      </form>
    </div>
  );
}

export default BlogPost;