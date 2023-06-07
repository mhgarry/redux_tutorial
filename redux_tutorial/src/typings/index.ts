export interface IPost {
    id: number,
    title: string,
    content: string,
    voteCount:number,
    isFavorite: boolean,
} // Define the state type for the data we will store in the store (the posts)