import React from 'react';
import './Blog.css';

const Blog = () => {

  const blogPosts = [
    {
      tag: 'Article',
      title: 'How to provide more effective feedback',
      content: 'It is a long established fact that a reader will be distracted by the readable content...',
      author: 'Credon Catla',
      date: '27/05/2023',
      authorImage: 'https://via.placeholder.com/50',
      postImage: 'https://via.placeholder.com/400',
    },
    {
      tag: 'News',
      title: 'UI designers to acquire coding skills',
      content: 'It is a long established fact that a reader will be distracted by the readable content...',
      author: 'Jessica Smith',
      date: '14/01/2024',
      authorImage: 'https://via.placeholder.com/50',
      postImage: 'https://via.placeholder.com/400',
    },
    {
      tag: 'Blog',
      title: 'Step by step guide for conducting usability',
      content: 'It is a long established fact that a reader will be distracted by the readable content...',
      author: 'Petric Camp',
      date: '10/04/2022',
      authorImage: 'https://via.placeholder.com/50',
      postImage: 'https://via.placeholder.com/400',
    },{
        tag: 'Article',
        title: 'How to provide more effective feedback',
        content: 'It is a long established fact that a reader will be distracted by the readable content...',
        author: 'Credon Catla',
        date: '27/05/2023',
        authorImage: 'https://via.placeholder.com/50',
        postImage: 'https://via.placeholder.com/400',
      },
      {
        tag: 'News',
        title: 'UI designers to acquire coding skills',
        content: 'It is a long established fact that a reader will be distracted by the readable content...',
        author: 'Jessica Smith',
        date: '14/01/2024',
        authorImage: 'https://via.placeholder.com/50',
        postImage: 'https://via.placeholder.com/400',
      },
      {
        tag: 'Blog',
        title: 'Step by step guide for conducting usability',
        content: 'It is a long established fact that a reader will be distracted by the readable content...',
        author: 'Petric Camp',
        date: '10/04/2022',
        authorImage: 'https://via.placeholder.com/50',
        postImage: 'https://via.placeholder.com/400',
      },
  ];

  return (
    <div className="blog-container">
      {blogPosts.map((post, index) => (
       <a href='/blogs'><div key={index} className="blog-card">
          <img src={post.postImage} alt={post.title} className="post-image" />
          <div className="blog-content">
            <span className={`tag ${post.tag.toLowerCase()}`}>{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="author-section">
               <img src={post.authorImage} alt={post.author} className="author-image" />
              <div className="author-info">
                 <h4>{post.author}</h4>
                 <p>{post.date}</p>
              </div>
            </div>
           </div>
          </div>
       </a> 
      ))}
    </div>
  );
};

export default Blog;
