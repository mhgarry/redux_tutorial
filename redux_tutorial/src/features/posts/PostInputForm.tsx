import { FormEventHandler } from "react";

const PostInputForm = (props: {
  submitPost: FormEventHandler<HTMLFormElement>;
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
}) => {
  return (
    <>
      <form className="form-card" onSubmit={props.submitPost}>
        <h1>Create a new Post</h1>
        <input
          type="text"
          className="title-input"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
          />
        <textarea
          className="content-input"
          value={props.content}
          onChange={(e) => props.setContent(e.target.value)}
          ></textarea>
        <input type="submit" value="Publish" className="post-button" />
      </form>
    </>
  );
};

export default PostInputForm;