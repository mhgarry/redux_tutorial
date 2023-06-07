import BlogCard from "./BlogCard";
import NoPosts from "./NoPosts";

import { useAppSelector } from "../../app/hooks";
import { selectAllPosts } from "./postSlice";

const AllPosts = () => {
  const {allPosts} = useAppSelector(selectAllPosts)
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
///new commit