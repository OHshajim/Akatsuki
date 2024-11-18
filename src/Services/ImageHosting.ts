import axios from "axios";
const ImageHosting = async (imageFile: unknown) => {
  const ImageHostingAPI = process.env.NEXT_PUBLIC_IMAGE_HOSTING_API;

  try {
    const res = await axios.post(ImageHostingAPI, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default ImageHosting;
