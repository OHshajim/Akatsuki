import Link from "next/link";

const page = ({ params }: { params: { status: string } }) => {
  const isSuccess = params.status === "success";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      {isSuccess ? (
        <div className="flex justify-center items-center flex-col w-full space-y-6 animate-fadeIn">
          <div className="bg-white text-black rounded-full w-28 h-28 flex justify-center items-center shadow-lg animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-14 h-14 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-4xl font-bold tracking-wide">
            Payment Successful!
          </h3>
          <p className="text-lg font-medium">
            Thank you for your purchase. Your payment was successful.
          </p>
          <Link href="/shop">
            <button className="btn btn-ghost px-8 py-3 bg-white text-black rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col w-full space-y-6 animate-fadeIn ">
          <div className="bg-white text-black rounded-full w-28 h-28 flex justify-center items-center shadow-lg animate-shake">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-10 h-10 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="text-4xl font-bold tracking-wide">Payment Failed</h3>
          <p className="text-lg font-medium">
            Unfortunately, something went wrong. Please try again.
          </p>
          <Link href="/cart">
            <button className="btn btn-ghost px-8 py-3 bg-white text-black rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              Back to Cart
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
