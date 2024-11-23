import axios from "axios";

export const AllBlogs = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/Blog");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const BlogData = async (email: string | null, id: string) => {
  try {
    if (!email) {
      const response = await axios.get(
        `http://localhost:3000/api/Blog/getSingleBlog/${id}`
      );
      return response.data;
    }
    const response = await axios.get(
      `http://localhost:3000/api/Blog/getSingleBlog/${id}?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const LikeToggle = async (email: string | null, id: string) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/Blog/LikeToggle/${email}`,
      { BlogId: id }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
// Movies
export const AllMovies = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/Movies");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const MovieData = async (
  email: string | null,
  id: string | string[]
) => {
  try {
    if (!email) {
      const response = await axios.get(
        `http://localhost:3000/api/Movies/Movie/${id}`
      );
      return response.data;
    }
    const response = await axios.get(
      `http://localhost:3000/api/Movies/Movie/${id}?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const MovieSubscription = async (email: string | null) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/Movies/CheckSubscription/${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const WishlistToggle = async (email: string | null, id: string| string[]) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/Movies/WishlistToggle/${email}`,
      { movieId: id }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// get Cart
export const GetCarts = async (email: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/Cart/GetCarts/${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const RemoveCart = async (email: string | null, id: string) => {
  try {
    console.log({ email, id });
    const response = await axios.delete(
      `http://localhost:3000/api/Cart/RemoveCart/${id}?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Shop
export const ProductData = async (
  email: string | null,
  id: string | string[]
) => {
  try {
    if (!email) {
      const response = await axios.get(
        `http://localhost:3000/api/Shop/Book/${id}`
      );
      return response.data;
    }
    const response = await axios.get(
      `http://localhost:3000/api/Shop/Book/${id}?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const CartToggle = async (email: string | null, id: string) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/Cart/AddToCart/${email}`,
      { ProductId: id }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// <!--Home Page--!>
// Books

export const AllBooksData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/Shop");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const AllBTopRatedBooks = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/Shop/TopRatedBooks"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const BestSellingBooks = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/Shop/BestSellingBooks"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Movies
export const PopularMovies = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/Movies/PopularMovies"
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Blogs
export const BestBlogs = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/Blog/BestBlogs"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const RecentBlogs = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/Blog/RecentBlogs"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
