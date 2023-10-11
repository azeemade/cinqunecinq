import { StateCreator } from "zustand";

interface Article {
  id: number;
  title: string;
  snapshot_id?: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
  author_id: 1;
}

export interface ArticleState {
  loading: boolean;
  article: Article | null;
  articles: Article[];
  fetchArticles: (articles: Article[]) => void;
  setArticle: (article: Article) => void;
  setLoading: (loading: boolean) => void;
}

export const createArticleSlice: StateCreator<ArticleState> = (set) => ({
  loading: false,
  article: null,
  articles: [],
  setArticle: (article: Article) => set({ article: article }),
  setLoading: (loading: boolean) => set({ loading: loading }),
  fetchArticles: (articles: Article[]) =>
    set({
      articles: articles,
    }),
});
