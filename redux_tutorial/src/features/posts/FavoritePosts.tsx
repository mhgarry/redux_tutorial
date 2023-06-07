import BlogCard from './BlogCard';
import NoFavoritePosts from './NoFavoritePosts';

const FavoritePosts = () => {
  const favoritePosts: any[] = [];
  if(!favoritePosts.length) {
    return <NoFavoritePosts />;
  }
  return (
    <>
      <BlogCard posts={favoritePosts} />
    </>
  );
};

export default FavoritePosts;