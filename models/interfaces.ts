export interface PostI {
  title: string;
  image: string;
  excerpt: string;
  date: Date;
  slug: string;
}

export interface PostDataI {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
  content: any;
}

export interface ContactDataI {
  email: string;
  name: string;
  message: string;
}
