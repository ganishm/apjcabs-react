import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
    // Example blog data
    const blogPost = {
      coverImage: 'https://via.placeholder.com/1000x400',
      title: 'How to Provide More Effective Feedback for Growth',
      content: `
        Feedback is essential for personal and professional development. Effective feedback helps individuals understand their strengths 
        and identify areas for improvement. However, the way feedback is delivered plays a crucial role in how well it is received and acted upon.
        
        ## 1. Be Specific and Clear
        General feedback such as "good job" or "you need to improve" is often not helpful. Instead, focus on specific actions or behaviors 
        that can be addressed directly. For example, saying "Your presentation was clear, but the slides could have been more visually engaging" 
        is much more actionable.
  
        ## 2. Focus on the Behavior, Not the Person
        It's important to separate the person from the behavior when providing feedback. Instead of saying, "You're always late," say, 
        "I've noticed you've been arriving after our scheduled start time this week." This avoids making the individual feel personally attacked.
  
        ## 3. Provide Feedback Timely
        Feedback should be given as soon as possible while the observed behavior is still fresh. Waiting too long can reduce the effectiveness 
        and relevance of the feedback. If the issue is significant, addressing it promptly is critical.
  
        ## 4. Create a Two-Way Dialogue
        Feedback shouldn't be one-sided. Encourage the person to share their perspective. Ask open-ended questions such as, "How do you feel about this?" 
        or "Is there something I can do to help?" to make the conversation more collaborative.
  
        In conclusion, feedback is a powerful tool when used effectively. By focusing on clarity, behavior, and collaboration, you can provide feedback that inspires 
        improvement and encourages growth.
      `,
      author: 'Credon Catla',
      date: '27/05/2023',
      authorImage: 'https://via.placeholder.com/50',
    };
  
    const blogSuggestions = [
      {
        title: 'UI Designers to Acquire Coding Skills',
        date: '14/01/2024',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'Step-by-Step Guide for Conducting Usability Tests',
        date: '10/04/2022',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'Why Visual Consistency is Key in UI Design',
        date: '21/11/2023',
        image: 'https://via.placeholder.com/150',
      },
    ];
  
    return (
      <div className="blog-reading-container">
        {/* Main Blog Content */}
        <div className="blog-reading-page">
          <div className="cover-image">
            <img src={blogPost.coverImage} alt="Blog Cover" />
          </div>
  
          <div className="blog-content">
            <h1 className="title">{blogPost.title}</h1>
            
            <div className="author-section">
              <img src={blogPost.authorImage} alt={blogPost.author} className="author-image" />
              <div className="author-info">
                <h4>{blogPost.author}</h4>
                <p>{blogPost.date}</p>
              </div>
            </div>
            
            <div className="content-section">
              <p>{blogPost.content}</p>
            </div>
  
            <div className="feedback-box">
              <h2>Your Feedback</h2>
              <p>How do you feel about this post? Let us know your thoughts!</p>
              <textarea placeholder="Leave your comments..." />
              <button>Submit</button>
            </div>
          </div>
        </div>
  
        {/* Right Sidebar for Blog Suggestions */}
        <div className="blog-suggestions">
          <h3>Next Blog Suggestions</h3>
          {blogSuggestions.map((suggestion, index) => (
            <div key={index} className="suggestion-card">
              <img src={suggestion.image} alt={suggestion.title} className="suggestion-image" />
              <div className="suggestion-info">
                <h4>{suggestion.title}</h4>
                <p>{suggestion.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default BlogPage;
