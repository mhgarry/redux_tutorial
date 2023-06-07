import React from "react";
import BlogCard from "./BlogCard";
import NoPosts from "./NoPosts";

const AllPosts = () => {
  const allPosts: any = [];
  if (!allPosts.length) {
    return <NoPosts />;
  }
  return (
    <>
      <BlogCard posts={allPosts} />
    </>
  );
};
export default AllPosts;
