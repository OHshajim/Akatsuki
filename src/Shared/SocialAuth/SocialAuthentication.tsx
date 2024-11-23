"use client";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./style.css";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const SocialAuthentication = () => {
  const searchParams = useSearchParams();

  const path = searchParams.get("redirect");
  const handleSocialAuth = (provider: string) => {
    const res = signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    console.log(res);
  };
  return (
    <div className="flex justify-center mt-3">
      <div className="social_card">
        <ul>
          <li className="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <button onClick={() => handleSocialAuth("facebook")}>
              <svg className="svg text-2xl">
                <FaFacebookF />
              </svg>
            </button>
            <div className="text">Facebook</div>
          </li>
          <li className="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <button onClick={() => handleSocialAuth("google")}>
              <svg className="svg text-2xl">
                <FaGoogle />
              </svg>
            </button>
            <div className="text">Google</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialAuthentication;
