export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface GridState {
  posts: Post[];
  selectedPostId: number | null;
  loading: boolean;
  error: string | null;
}
