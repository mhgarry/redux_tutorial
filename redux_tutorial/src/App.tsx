import { useAppSelector } from "./app/hooks";
import NavigationBar from "./features/navigations/NavigationBar";
import { selectCurrentComponent } from "./features/navigations/navigationSlice";
import AddNewPost from "./features/posts/AddNewPost";
import AllPosts from "./features/posts/AllPosts";
import EditPost from "./features/posts/EditPost";
import FavoritePosts from "./features/posts/FavoritePosts";
import Footer from "./features/posts/Footer";
import ViewPosts from "./features/posts/ViewPostDetails";

const App = () => {
  const currentComponent = useAppSelector(selectCurrentComponent);

  return (
    <>
      <section className="main-container">
        <NavigationBar />
        <section className="card-container">
          {currentComponent === "AllPostsComponent" ? (
            <AllPosts />
          ) : currentComponent === "EditPostComponent" ? (
            <EditPost />
          ) : currentComponent === "ViewPostComponent" ? (
            <ViewPosts />
          ) : currentComponent === "AddNewPostComponent" ? (
            <AddNewPost />
          ) : currentComponent === "FavoriteComponent" ? (
            <FavoritePosts />
          ) : null}
        </section>
        <Footer />
      </section>
    </>
  );
};
export default App;