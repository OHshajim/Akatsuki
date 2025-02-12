import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:3000"
    // baseURL: "https://akatsuki-ivory.vercel.app",
});
const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
