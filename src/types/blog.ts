export type Author = {
  name: string;
  image?: string;
  bio?: string;
  slug?: any;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number | string;
  title: string;
  slug: any;
  metadata?: string;
  body?: unknown[];
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};
