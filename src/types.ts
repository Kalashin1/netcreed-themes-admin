export interface ITheme {
  title: string;
  price: number;
  description: string;
  createdAt: number;
  updatedAt: number;
  tags: string[];
  category: string;
  image: string;
  id: string;
  downloads: number;
  saves: number;
  url: string
  owner: {
    name: string;
    username: string;
    email: string;
    twitter: string
    github: string
    id: string
  } | 'ADMIN'
}