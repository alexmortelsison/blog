// src/components/BlogList.js
import React from "react";
import BlogPost from "./BlogPost";

// Sample blog posts data with static image URLs from Pexels
const posts = [
  {
    id: 1,
    title: "Exploring Nature",
    content: "This is a blog post about exploring nature.",
    imageUrl: "https://images.pexels.com/photos/3408741/pexels-photo-3408741.jpeg"
  },
  {
    id: 2,
    title: "The Future of Technology",
    content: "This is a blog post about the future of technology.",
    imageUrl: "https://images.pexels.com/photos/1851174/pexels-photo-1851174.jpeg"
  },
  {
    id: 3,
    title: "Delicious Food Around the World",
    content: "This is a blog post about delicious food.",
    imageUrl: "https://images.pexels.com/photos/1376544/pexels-photo-1376544.jpeg"
  }
];

function BlogList() {
  return (
    <>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          imageUrl={post.imageUrl}
        />
      ))}
    </>
  );
}

export default BlogList;
