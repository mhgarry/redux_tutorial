import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectCurrentComponent,
  switchToAddNewPostComponent,
  switchToAllPostsComponent,
  switchToFavoriteComponent
} from "./NavigationSlice";


const NavigationBar = () => {
  const dispatch = useAppDispatch();
  const currentComponent = useAppSelector(selectCurrentComponent);
  return(
    <>
      <nav>
        <section className="right-nav-section">
          <div className="logo" onClick={() => dispatch(switchToAllPostsComponent())}>
            <h1>Redux</h1>
            <h2>Blog</h2>
          </div>
          <p className="divider">|</p>

          <p
          className={currentComponent === "AllPostsComponent"
            ? "nav-item active" :
              "nav-item"}
              onClick={() => dispatch(switchToAllPostsComponent())}
            >
              Blogs</p>

          <p

          className={
            currentComponent === "AddNewPostComponent"
              ? "nav-item active" :
               "nav-item"}
               onClick={() => dispatch(switchToAddNewPostComponent())}
          >
            <span className="add-icon">+</span>Add New
          </p>
        </section>

        <section className="left-nav-section">
          <p className="divider">|</p>

          <p className=
          {currentComponent === "FavoriteComponent"
            ? "nav-item active" :
              "nav-item"}
              onClick={() => dispatch(switchToFavoriteComponent())}
            >
            <span>❤</span>Favorites
          </p>
        </section>
      </nav>
    </>
  )
};

export default NavigationBar;