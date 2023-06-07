import { useAppSelector } from "../../app/hooks";
import { selectAllPosts } from "./postSlice";



const ViewPostDetails = () => {
  const allPost = useAppSelector(selectAllPosts);
  return (
    <>
      <section className="view-post-container">
        <h1 className="view-post-title">{allPost.currentPost.title}</h1>
        <p className="view-post-content">{allPost.currentPost.content}</p>
      </section>
    </>
  );
};
export default ViewPostDetails;