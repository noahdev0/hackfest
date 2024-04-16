import React from "react";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div>
      <h1>Blogs</h1>
      <Blog />
    </div>
  );
};

export default Blogs;

const Blog = (props: Props) => {
  return <div>Blogs</div>;
};
