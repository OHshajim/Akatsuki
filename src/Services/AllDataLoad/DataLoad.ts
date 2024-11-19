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
export const MovieData = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/Movies/Movie/${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
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
    return [];
  }
};

// export const ShopData = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/Shop");
//     return response.data.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
