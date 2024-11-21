"use client";
import { GetCards } from "@/Services/AllDataLoad/DataLoad";
import SectionBanner from "@/Shared/SectionBanner";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Card = () => {
  const { data: session } = useSession();
  const [carts, setCart] = useState([]);
  const DataLoad = async () => {
    if (session?.user?.email) {
      const res = await GetCards(session.user.email);
      setCart(res.data);
    }
  };
  useEffect(() => {
    DataLoad();
  }, [session?.user?.email]);
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Cart"} title={"Cart"} />
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

export default Card;
