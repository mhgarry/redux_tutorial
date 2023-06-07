import { useAppDispatch } from "../../app/hooks";
import { switchToAllPostsComponent } from "../navigations/navigationSlice";

const NoFavoritePosts = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="no-posts-card">
        <h1>You have not favorited any posts.</h1>
        <button onClick={() => dispatch(switchToAllPostsComponent)}>
          Add a Favorite!
        </button>
      </section>
    </>
  );
};

export default NoFavoritePosts;