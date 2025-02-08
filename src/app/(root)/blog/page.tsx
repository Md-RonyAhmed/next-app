import React from "react";

const BlogPage = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  
  return (
    <div>
      <h1>Blog Page</h1>
      <p>This is the Blog Page.</p>
    </div>
  );
};

export default BlogPage;
