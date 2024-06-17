export interface Product {
  _id?: string;
  user?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  countInStock: number;
  reviews?: ReviewEntity[] | null;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ReviewEntity {
  id?: string;
  user: string;
  name: string;
  rating: number;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
}
