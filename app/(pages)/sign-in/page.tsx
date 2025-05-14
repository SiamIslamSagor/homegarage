import React from "react";
import logo from "@/app/assets/images/originalLogo.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md font-sans">
        {/* Logo Placeholder */}
        <div className="mb-4 flex justify-center">
          {/* Replace this div with your actual logo component or img tag */}
          <div>
            <Image src={logo} alt="HomeGarage Logo" className="max-w-32" />
          </div>
        </div>

        <h4 className="mb-6 text-center text-base  text-gray-600">
          Welcome back, please Sign In to continue
        </h4>
        <form className="space-y-6">
          <div className="flex-column">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <div className="mt-1 flex h-[50px] items-center rounded-xl border border-gray-200 bg-white px-3 focus-within:border-blue-500 transition-all duration-200 ease-in-out">
              {/* Email SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 32 32"
                height="20"
              >
                <g data-name="Layer 3" id="Layer_3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your Email"
                className="ml-2.5 h-full w-full rounded-xl border-none bg-transparent placeholder-gray-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div className="flex-column">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="mt-1 flex h-[50px] items-center rounded-xl border border-gray-200 bg-white px-3 focus-within:border-blue-500 transition-all duration-200 ease-in-out">
              {/* Password SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="-64 0 512 512"
                height="20"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
              </svg>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your Password"
                className="ml-2.5 h-full w-full rounded-xl border-none bg-transparent placeholder-gray-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-2.5">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm font-normal text-black"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="my-5 h-[50px] w-full cursor-pointer rounded-xl border-none bg-gray-800 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>

          <p className="my-1.5 text-center text-sm text-black">
            Don't have an account?{` `}
            <a
              href="/sign-up"
              className="ml-1 cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
