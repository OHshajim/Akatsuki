"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi2";
import {
  MovieData,
  MovieSubscription,
  WishlistToggle,
} from "@/Services/AllDataLoad/DataLoad";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useParams, useRouter } from "next/navigation";
import { Rating } from "@smastrom/react-rating";
import Loading from "@/Components/Loader/Loading";
import SwiperCore from "swiper";
import { MovieDataTypes } from "@/Services/PropsValidations/DataType";

const Page = () => {
  const { data: session } = useSession();
  const email = session?.user?.email || null;
  const route = useRouter();
  const params = useParams();
  const [movie, setMovie] = useState<MovieDataTypes | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [isLiked, setLiked] = useState(false);
  useEffect(() => {
    const dataLoad = async () => {
      const data = await MovieData(email, params.id);
      setLiked(data?.isLiked);
      setMovie(data?.data);
    };
    if (params?.id) {
      dataLoad();
    }
  }, [email, params.id, session?.user]);

  const handleCheckSubscription = async () => {
    try {
      if (!session?.user) {
        Swal.fire({
          title: "Please Login !!!",
          text: "Are want to login Now?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#6fc9cd",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            route.push("/login");
          }
        });
        return null;
      }
      const res = await MovieSubscription(email);
      if (res.isSubscribed === true) {
        Swal.fire({
          title: "This content will added soon",
          text: "Thank you for Subscription 🥳🥳🥳",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff ",
          backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.ibb.co.com/JzXgd9F/nyan-cat.gif")
          left top
          no-repeat
        `,
        });
      } else if (res.message === "Subscription has expired.") {
        Swal.fire({
          title: "Sorry!!",
          text: res.message,
          icon: "info",
        });
      } else if (res.message === "unsubscribed") {
        route.push("/movies/subscriptions");
        Swal.fire({
          title: res.message,
          text: "Please Subscribe now",
          icon: "info",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Something gone wrong!!! Please try again!",
        icon: "error",
      });
    }
  };

  const handleWishlist = async () => {
    if (!session?.user) {
      Swal.fire({
        title: "Please Login !!!",
        text: "Are want to login Now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6fc9cd",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          route.push("/login");
        }
      });
      return null;
    }
    const res = await WishlistToggle(email, params.id);
    if (res.status === 201) {
      setLiked(true);
      Swal.fire({
        title: "Successfully Added",
        text: `${movie?.title || "Successfully this movie"} added 🥳🥳🥳!!!`,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff ",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.ibb.co.com/JzXgd9F/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    } else if (res.status === 200) {
      setLiked(false);
      Swal.fire({
        title: `Successfully Removed !!!`,
        text: `${movie?.title || "Successfully this movie"} was removed !!!`,
        icon: "success",
        confirmButtonColor: "#6fc9cd",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Something gone wrong!!! Please try again!",
        icon: "error",
      });
    }
  };
  if (!movie) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto my-20 p-10 ">
      <div className="card lg:card-side bg-white text-black rounded-none gap-10 ">
        <figure className="flex flex-col lg:w-1/3 h-full">
          <Swiper
            loop={true}
            spaceBetween={10}
            modules={[FreeMode, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            {movie?.imageUrl.map((img) => (
              <SwiperSlide key={img}>
                <Image
                  width={1000}
                  height={1000}
                  src={img}
                  alt="Album"
                  className="w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={30}
            slidesPerView={movie?.imageUrl?.length || 1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
          >
            {movie?.imageUrl?.map((img: string) => (
              <SwiperSlide key={img}>
                <Image
                  width={400}
                  height={500}
                  src={img}
                  alt={movie.title}
                  className="mt-5"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </figure>

        <div className="card-body p-0 lg:w-1/2">
          <div>
            <p className="font-medium my-2 tracking-wider font-primary sm:text-base text-sm">
              HOME / Movies /{movie.title}
            </p>
            <h2 className=" card-title md:text-3xl sm:text-2x text-xl font-bold font-primary md:tracking-[3.5px] tracking-wider">
              {movie.title}
            </h2>
            <div className="flex justify-between sm:text-base text-sm">
              <p className="mb-4 font-medium">{movie.category}</p>
              <Rating style={{ maxWidth: 110 }} value={movie.rating} readOnly />
            </div>

            <p className="mt-2 font-medium sm:text-base text-sm">
              Type: <span className="text-zinc-500">Anime - Movie</span>
            </p>
            <p className="mt-2 font-medium sm:text-base text-sm">
              Tags :{" "}
              {movie?.genres?.map((tag) => (
                <span className="text-zinc-500" key={tag}>
                  {tag},{" "}
                </span>
              ))}
            </p>
            <p className="mt-2 font-medium sm:text-base text-sm">
              Director: <span className="text-zinc-500">{movie.director}</span>
            </p>
            <p className="mt-2 font-medium sm:text-base text-sm">
              Publisher :{" "}
              <span className="text-zinc-500">{movie.publisher}</span>
            </p>
            <p className="mt-2 font-medium sm:text-base text-sm">
              Published Year :{" "}
              <span className="text-zinc-500">{movie.yearPublished}</span>
            </p>
            <p className="mt-2 font-medium sm:text-base text-sm">
              Language : <span className="text-zinc-500">{movie.language}</span>
            </p>
            <p className="mt-2 font-medium sm:text-base text-sm">
              Duration: <span className="text-zinc-500">{movie.duration} </span>
            </p>
            <p className="mt-2 font-medium sm:text-base text-sm">
              Views :{" "}
              <span className="text-zinc-500">{movie.totalViews / 1000}k </span>
            </p>

            <div className="card-actions justify-end">
              <button
                onClick={handleCheckSubscription}
                className="btn bg-[#6fc9cd] text-white hover:bg-slate-400 font-primary tracking-widest font-normal sm:text-lg px-5"
              >
                Watch Now
              </button>
              <button
                onClick={handleWishlist}
                className="btn bg-[#6fc9cd] sm:text-xl text-white hover:bg-slate-400"
              >
                {isLiked ? <HiHeart /> : <BiHeart />}
              </button>
            </div>
            <p className="text-gray-700 tracking-widest my-5 max-h-fit sm:text-base text-sm">
              <span className="text-black font-semibold text-xl font-primary tracking-[2.4px]">
                Description
              </span>
              <br />
              <br />
              {movie?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
