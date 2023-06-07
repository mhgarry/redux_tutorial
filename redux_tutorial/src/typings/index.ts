export interface IPost {
    id: number,
    title: string,
    content: string,
    voteCount:number,
    isFavorite: boolean,
} // Define the state type for the data we will store in the store (the posts)

export interface INavigationState {
  currentComponent:
  | "AllPostsComponent"
  | "AddNewPostComponent"
  | "FavoriteComponent"
  | "PostComponent"
  | "EditPostComponent"
  | "DeletePostComponent";
} // Defines the currentcomponent property that can be one of five strings (the names of the components)

