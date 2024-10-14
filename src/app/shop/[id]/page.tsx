"use client";
// import axios from "axios";
import Image from "next/image";

const Page = () => {
//   const id = useParams();
  return (
    <div className="card lg:card-side p-10 bg-white text-black rounded-none">
      <figure>
        <Image
          width={1500}
          height={1000}
          src="https://i.ibb.co.com/VC7Pn6w/product12-copyright-600x700.jpg"
          alt="Album"
          className="w-full "
        />
      </figure>
      <div className="card-body justify-center w-1/2">
        <div>
          <h2 className="card-title mb-4">Fullmetal Alchemist: Brotherhood</h2>
          <p>
            Two brothers use alchemy to find the Philosophers Stone to restore
            their bodies.A high school student discovers a supernatural notebook
            that allows him to kill anyone.Thousands of players are trapped in a
            new virtual MMORPG, and their only way out is to clear the game.
          </p>
          <p className="mt-2 font-medium">Type: Anime</p>
          <p className="mt-2 font-medium">tags: Action, Adventure, Romance</p>
          <p className="mt-2 font-medium">director: Yasuhiro Irie</p>
          <p className="mt-2 font-medium">product_id: 005 </p>
          <p className="mt-2 font-bold text-xl">price: 34.99 $ </p>
          <div className="card-actions justify-end">
            <button className="btn bg-yellow-600 text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
