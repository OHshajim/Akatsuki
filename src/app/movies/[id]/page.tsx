"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi2";
import { MovieData, MovieSubscription } from "@/Services/AllDataLoad/DataLoad";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const { data: session } = useSession();
  const route = useRouter();
  const [movie, setMovie] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isSubscribed, setSubscribed] = useState(false);

  const dataLoad = async () => {
    const data = await MovieData(params.id);
    setMovie(data);
  };
  useEffect(() => {
    dataLoad();
  }, [params]);

  const handleCheckSubscription = async () => {
    try {
      if (!session?.user?.email) {
        Swal.fire({
          title: "Please Login !!!",
          text: "Are want to login Now?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            route.push("/login");
          }
        });
      }
      const res = await MovieSubscription(session.user.email);
      setSubscribed(res.isSubscribed);
      if (res.isSubscribed === true) {
        Swal.fire({
          title: "This content will added soon",
          text: "Thank you for Subscription 🥳🥳🥳",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
      } else if (res.message === "Subscription has expired.") {
        Swal.fire({
          title: "Sorry!!",
          text: res.message,
          icon: "error",
        });
      } else if (res.message === "unsubscribed") {
        Swal.fire({
          title: res.message,
          text: "Please Subscribe now",
          icon: "error",
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
  const handleWishlist = (id) => {

  };
  return (
    <div className="card lg:card-side p-10 bg-white text-black rounded-none gap-10 container mx-auto">
      {movie && (
        <>
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
              slidesPerView={movie?.imageUrl?.length}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="mySwiper"
            >
              {movie?.imageUrl.map((img) => (
                <SwiperSlide key={img}>
                  <Image
                    width={400}
                    height={500}
                    src={img}
                    alt="Album"
                    className="mt-5"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </figure>

          <div className="card-body p-0 justify-center  lg:w-1/2">
            <div>
              <h2 className="card-title mb-4">{movie.title}</h2>
              <p className="tracking-widest my-8">{movie.description}</p>
              <p className="mt-2 font-medium">
                Type: <span className="text-zinc-500">Anime - Movie</span>
              </p>
              <p className="mt-2 font-medium">
                Tags:{" "}
                {movie?.genres?.map((tag) => (
                  <span className="text-zinc-500" key={tag}>
                    {tag},{" "}
                  </span>
                ))}
              </p>
              <p className="mt-2 font-medium">
                Director:{" "}
                <span className="text-zinc-500">{movie.director}</span>
              </p>
              <p className="mt-2 font-medium">
                Duration:{" "}
                <span className="text-zinc-500">{movie.duration} </span>
              </p>
              <p className="mt-2 font-medium">
                Publisher:{" "}
                <span className="text-zinc-500">{movie.publisher} </span>
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={handleCheckSubscription}
                  className="btn bg-[#6fc9cd] text-white hover:bg-slate-400"
                >
                  Watch Now
                </button>
                {/* {liked === true ? (
                  <button
                    onClick={handleLikeRemove}
                    className="btn bg-[#6fc9cd] text-white hover:bg-slate-400"
                  >
                    <HiHeart />
                  </button>
                ) : ( */}
                <button
                  onClick={() => handleWishlist(movie._id)}
                  className="btn bg-[#6fc9cd] text-white hover:bg-slate-400"
                >
                  <BiHeart />
                </button>
                {/* )} */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
