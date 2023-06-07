import { useState } from "react";
import { IPost } from "../../typings";
import PostInputForm from "./PostInputForm";



const AddNewPost = () => {
  const [title, setTitle] = useState("Blog Title");
  const [content, setContent] = useState("Blog Details");

  const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: IPost = {
      id: Date.now(),
      title,
      content,
      voteCount: 0,
      isFavorite: false,
    };
    console.log(post);
  };
  return (
    <>
      <PostInputForm
        submitPost={submitPost}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
      />
    </>
  );
};
export default AddNewPost;