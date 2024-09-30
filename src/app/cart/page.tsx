import SectionBanner from "@/Shared/SectionBanner";
import Image from "next/image";

const page = () => {


  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Cart"} title={"Cart"} />
        {/* <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
          {popular.map((movie) => (
            <div
              key={movie.product_id}
              className="card rounded-none text-black"
            >
              <figure className=" relative group">
                <Image
                  width={600}
                  height={800}
                  src={movie.image}
                  alt="Shoes"
                  className="w-full group"
                />
                <div className="absolute bottom-0 w-full group-hover:flex hidden bg-black group-hover:duration-200 group-hover:delay-100">
                  <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
                    Add to Cart
                  </button>
                  <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
                    Add to Wishlist
                  </button>
                </div>
              </figure>
              <div className="card-body py-2 px-1">
                <h2 className="card-title text-black bebas-neue tracking-[2px] font-medium">
                  {movie.name}
                </h2>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-zinc-400">
                    {movie.tags[1]}
                  </h3>
                  <Rating
                    style={{ maxWidth: 110, color: "#fff" }}
                    value={movie.rating}
                    readOnly
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <section className="container px-4 mx-auto py-20">
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden ">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-left  text-black font-bold"
                        >
                          Product
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 px-4 text-left  text-black font-bold"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left rtl:text-right text-black font-bold"
                        >
                          Quantity
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left rtl:text-right text-black font-bold"
                        >
                          Subtotal
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 px-4 text-rose-500 font-bold text-left"
                        >
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="space-y-4">
                        <td className="text-sm font-medium ">
                          <div className="flex items-center gap-4">
                            <Image
                              width={230}
                              height={200}
                              className="object-cover rounded-none p-2"
                              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                              alt="item"
                            />
                            <div>
                              <h2 className="font-bold text-black ">Name</h2>
                              <p className="text-sm  text-gray-800 font-medium">
                                @mia
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                          2000$
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                          2000$
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                          2000$
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                          cancel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
