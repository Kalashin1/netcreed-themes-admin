export interface ITheme {
  title: string;
  price: number;
  description: string;
  createdAt: number;
  updatedAt: number;
  tags: string[];
  category: string;
  coverImage: {
    url: string;
    name: string;
  };
  id: string;
  downloads: number;
  saves: number;
  views: number;
  template: {
    url: string;
    name: string;
  };
  owner: {
    name: string;
    username: string;
    email: string;
    twitter: string
    github: string
    id: string
  } | 'ADMIN'
}