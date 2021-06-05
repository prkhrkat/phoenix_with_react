import React from 'react'
    
const Posts = ({ posts }) => {
  return (
    <div>
      <center><h1>Posts</h1></center>
      {posts.map((post) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><b>Title - </b>{post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted"><b>Author - </b>{post.author}</h6>
            <p class="card-text"><b>Content - </b>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Posts