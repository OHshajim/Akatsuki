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
export const BlogData = async (email, id: string) => {
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
export const LikeToggle = async (email, id) => {
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
export const MovieData = async (email, id: string) => {
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
// subscription check for movies
export const MovieSubscription = async (email) => {
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
export const WishlistToggle = async (email, id) => {
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
