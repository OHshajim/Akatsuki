export type ShopData = {
  _id: string;
  title: string;
  category: string;
  author: string;
  yearPublished: number;
  pages: number;
  rating: number;
  genres: string[];
  price: number;
  totalSold: number;
  imageUrl: string;
  description: string;
  ISBN: string;
  language: string;
  publisher: string;
  quantity: number;
};
export type MovieDataTypes = {
  _id: string;
  title: string;
  category: string;
  director: string;
  duration: string;
  yearPublished: number;
  rating: number;
  genres: string[];
  imageUrl: string[];
  description: string;
  language: string;
  publisher: string;
  totalViews: number;
};
export type BlogDataTypes = {
  _id: string;
  title: string;
  category: [];
  intro: string;
  author: string;
  likes: number;
  date: string;
  genres: string[];
  explanation: string;
  images: {
    cover: string;
    additionalImages: string[];
    mainImage: string;
  };
  description: string;
  endingParagraph: string;
};
export type OrderDataType= {
  address: object;
  products: string[];
  totalCost: number;
  email: string | null | undefined;
  name: string | null | undefined;
};