import { useState } from "react";
import { IPost } from "../../typings";
import PostInputForm from "./PostInputForm";

import { useAppDispatch } from "../../app/hooks";
import { switchToAllPostsComponent } from "../navigations/navigationSlice";
import { saveBlogPost } from "./postSlice";


const AddNewPost = () => {
  const [title, setTitle] = useState("Blog Title");
  const [content, setContent] = useState("Blog Details");
  const dispatch = useAppDispatch();

  const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: IPost = {
      id: Date.now(),
      title,
      content,
      voteCount: 0,
      isFavorite: false,
    };
    dispatch(saveBlogPost(post));
    dispatch(switchToAllPostsComponent());
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