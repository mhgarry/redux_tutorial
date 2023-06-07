import { useState } from "react";
import { IPost } from "../../typings";
import PostInputForm from "./PostInputForm";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const updatePost = (e: React.FormEvent<HTMLFormElement>) => {
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
        submitPost={updatePost}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
      />
    </>
  );
};
export default EditPost;