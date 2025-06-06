import React from "react";
import IPhoneMockup from "./iPhoneMockup";

const Hero = () => {
  return (
    <div
      id="hero_section"
      className="mt-16 max-md:mt-20 relative min-h-screen flex items-center justify-between overflow-hidden container max-w-7xl mx-auto max-md:flex-col max-md:gap-10 max-md:pb-40 max-xl:px-10"
    >
      {/* Background SVG Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Tool Wrench Pattern */}
        <svg
          className="absolute top-20 left-20 w-24 h-24 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>

        {/* Inventory Box Pattern */}
        <svg
          className="absolute bottom-40 right-40 w-32 h-32 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>

        {/* Smart Home Pattern */}
        <svg
          className="absolute top-1/2 left-1/3 w-28 h-28 text-blue-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>

        {/* Mobile App Pattern */}
        <svg
          className="absolute bottom-20 left-1/4 w-24 h-24 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>

        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-8 z-10 max-md:px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Bangladesh’s First Digital Garage – From Repairs to Resale.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl">
          HomeGarage brings mechanics, spare parts, and vehicle buying & selling
          into one seamless app experience. Book services, shop genuine parts,
          and connect with verified sellers – all from your phone.
        </p>

        <div className="flex gap-4">
          <a
            href="http://localhost:3000"
            target="_blank"
            className="me-1 text-light"
            aria-label="Get HomeGarage app on Google Play"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="140"
              height="42"
              viewBox="0 0 157.2 46.4"
            >
              <title>Get HomeGarage app on Google Play</title>
              <path
                fill="#1E1E1E"
                fillRule="evenodd"
                d="M151.3 46.4H5.8c-3.2 0-5.8-2.6-5.8-5.8V5.8C0 2.6 2.6 0 5.8 0h145.5c3.2 0 5.8 2.6 5.8 5.8v34.8c0 3.2-2.6 5.8-5.8 5.8z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#A6A6A6"
                fillRule="evenodd"
                d="M151.3.9c2.7 0 4.9 2.2 4.9 4.9v34.8c0 2.7-2.2 4.9-4.9 4.9H5.8c-2.7 0-4.9-2.2-4.9-4.9V5.8C.9 3.1 3.1.9 5.8.9h145.5zm0-.9H5.8C2.6 0 0 2.6 0 5.8v34.8c0 3.2 2.6 5.8 5.8 5.8h145.5c3.2 0 5.8-2.6 5.8-5.8V5.8c0-3.2-2.6-5.8-5.8-5.8z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#FFF"
                d="M82.8 15.3c-1 0-1.9-.4-2.6-1.1-.7-.7-1.1-1.7-1.1-2.7 0-1 .4-2 1.1-2.7.7-.7 1.6-1.1 2.6-1.1s1.9.4 2.6 1.1c1.4 1.5 1.4 3.8 0 5.3-.7.9-1.6 1.3-2.6 1.2zm-31.2 0c-1 0-1.9-.4-2.6-1.1-1.5-1.5-1.5-3.8 0-5.3.7-.7 1.7-1.1 2.7-1.1.5 0 1 .1 1.5.3.4.2.8.4 1.1.8l-.1.1-.8.8-.1-.1c-.5-.5-1.1-.8-1.8-.8s-1.3.3-1.8.7c-1 1.1-1 2.8 0 3.9 1 1 2.6 1 3.7 0 .3-.3.5-.8.5-1.2h-2.5v-1.1H55v.1c0 .2 0 .4.1.5 0 .9-.3 1.8-.9 2.4-.7.8-1.7 1.2-2.6 1.1zm41.5-.1H92l-3.4-5.4v5.4h-1.1V8h1.3v.1l3.2 5.1V8h1.1v7.2zm-18.6 0h-1.1V9.1h-1.9V8h5v1.1h-1.9l-.1 6.1zm-4 0h-1.1V8h1.1v7.2zm-6.3 0h-1.1V9.1h-1.9V8h5v1.1h-1.9l-.1 6.1zm-3.8 0h-4.3V8h4.3v1.1h-3.2v2h2.9v1.1h-2.9v2h3.2v1zM81 13.5c.5.5 1.1.8 1.8.8s1.3-.3 1.8-.8c1-1.1 1-2.7 0-3.8-.5-.5-1.1-.8-1.8-.8s-1.3.3-1.8.8c-1 1.1-1 2.7 0 3.8z"
              ></path>
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M79 25.2c-2.7 0-4.9 2.2-4.9 4.9S76.3 35 79 35s4.9-2.2 4.9-4.9-2.1-4.9-4.8-4.9H79zm0 7.9c-1.7.1-3.1-1.1-3.2-2.8-.1-1.7 1.1-3.1 2.8-3.2 1.7-.1 3.1 1.1 3.2 2.8v.2c0 1.6-1.2 3-2.8 3zm-10.8-7.9c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9-2.1-4.9-4.8-4.9h-.1zm0 7.9c-1.7.1-3.1-1.1-3.2-2.8-.1-1.7 1.1-3.1 2.8-3.2 1.7-.1 3.1 1.1 3.2 2.8v.2c0 1.6-1.2 3-2.8 3zm-12.8-6.4v2.1h5c-.1 1-.5 1.9-1.1 2.6-1 1-2.4 1.6-3.9 1.5-3.1-.1-5.5-2.6-5.5-5.7.1-3 2.5-5.4 5.5-5.5 1.4 0 2.8.5 3.8 1.5l1.5-1.5c-1.4-1.4-3.3-2.1-5.2-2.1-4.2 0-7.7 3.3-7.7 7.6 0 4.2 3.3 7.7 7.6 7.7h.2c2 .1 4-.7 5.3-2.2 1.2-1.3 1.9-3.1 1.8-4.9 0-.4 0-.9-.1-1.3l-7.2.2zm52.5 1.7c-.6-1.8-2.3-3.1-4.2-3.1-2.6 0-4.7 2.1-4.7 4.7v.2c-.1 2.7 2 4.9 4.7 4.9h.2c1.7 0 3.2-.8 4.1-2.2l-1.7-1.1c-.5.9-1.4 1.4-2.4 1.4s-2-.6-2.4-1.5l6.6-2.7-.2-.6zm-6.7 1.6c-.1-1.5 1-2.8 2.5-2.9.8-.1 1.5.4 1.8 1l-4.3 1.9zm-5.4 4.8H98V20.3h-2.2v14.5zm-3.6-8.5c-.7-.7-1.7-1.1-2.7-1.1-2.7.1-4.8 2.4-4.7 5.1.1 2.6 2.2 4.6 4.7 4.7 1 0 1.9-.4 2.6-1.1h.1v.7c0 1.9-1 2.9-2.6 2.9-1.1 0-2.1-.7-2.5-1.8l-1.9.8c.7 1.8 2.5 2.9 4.4 2.9 2.5 0 4.7-1.5 4.7-5.1v-8.8h-2l-.1.8zm-2.4 6.8c-1.7-.1-2.9-1.6-2.7-3.3.1-1.4 1.3-2.6 2.7-2.7 1.5.1 2.7 1.4 2.6 2.9v.1c.1 1.5-1 2.8-2.5 3h-.1zM118 20.3h-5.2v14.5h2.2v-5.5h3c2.5.1 4.6-1.7 4.8-4.2.1-2.5-1.7-4.6-4.2-4.8h-.6zm.1 7H115v-5h3.1c1.4 0 2.5 1.1 2.5 2.4 0 1.4-1.1 2.5-2.4 2.5 0 .1-.1.1-.1.1zm13.4-2.1c-1.6-.1-3.1.8-3.9 2.2l1.9.8c.4-.7 1.2-1.1 2-1.1 1.1-.1 2.2.7 2.3 1.9v.2c-.7-.4-1.5-.6-2.3-.6-2.1 0-4.2 1.1-4.2 3.3.1 1.8 1.6 3.3 3.5 3.2h.1c1.1.1 2.2-.5 2.8-1.4h.1v1.1h2.1v-5.6c-.1-2.6-2-4-4.4-4zm-.3 7.9c-.7 0-1.7-.3-1.7-1.2 0-1.1 1.2-1.5 2.3-1.5.7 0 1.4.1 2 .5-.2 1.2-1.3 2.2-2.6 2.2zm12.3-7.6-2.5 6.3h-.1l-2.6-6.3H136l3.9 8.8-2.2 4.9h2.3l5.9-13.7h-2.4zM124 34.8h2.2V20.3H124v14.5z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="googlePlayFooter1"
                x1="-818.89"
                x2="-819.001"
                y1="545.088"
                y2="545.119"
                gradientTransform="matrix(14.9996 0 0 -29.049 12331.185 15876.299)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#00a0ff" }}></stop>
                <stop offset=".007" style={{ stopColor: "#00a1ff" }}></stop>
                <stop offset=".26" style={{ stopColor: "#00beff" }}></stop>
                <stop offset=".512" style={{ stopColor: "#00d2ff" }}></stop>
                <stop offset=".76" style={{ stopColor: "#00dfff" }}></stop>
                <stop offset="1" style={{ stopColor: "#00e3ff" }}></stop>
              </linearGradient>
              <path
                fill="url(#googlePlayFooter1)"
                fillRule="evenodd"
                d="M12.1 8.7c-.4.5-.6 1-.5 1.6V36c0 .6.2 1.2.5 1.6l.1.1 14.4-14.4V23L12.1 8.7z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="googlePlayFooter2"
                x1="-803.306"
                x2="-803.566"
                y1="511.463"
                y2="511.463"
                gradientTransform="matrix(11.7734 0 0 -9.916 9507.173 5094.86)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffe000" }}></stop>
                <stop offset=".409" style={{ stopColor: "#ffbd00" }}></stop>
                <stop offset=".775" style={{ stopColor: "orange" }}></stop>
                <stop offset="1" style={{ stopColor: "#ff9c00" }}></stop>
              </linearGradient>
              <path
                fill="url(#googlePlayFooter2)"
                fillRule="evenodd"
                d="m31.3 28.1-4.8-4.8V23l4.8-4.8.1.1 5.7 3.2c1.6.9 1.6 2.4 0 3.3l-5.8 3.3z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="googlePlayFooter3"
                x1="-833.511"
                x2="-833.602"
                y1="527.927"
                y2="528.08"
                gradientTransform="matrix(19.347 0 0 -14.9225 16157.47 7923.468)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ff3a44" }}></stop>
                <stop offset="1" style={{ stopColor: "#c31162" }}></stop>
              </linearGradient>
              <path
                fill="url(#googlePlayFooter3)"
                fillRule="evenodd"
                d="m31.4 28.1-4.9-4.9-14.4 14.4c.7.6 1.7.6 2.4.1l16.9-9.6"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="googlePlayFooter4"
                x1="-834.423"
                x2="-834.382"
                y1="528.375"
                y2="528.443"
                gradientTransform="matrix(19.347 0 0 -14.915 16157.442 7904.337)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#32a071" }}></stop>
                <stop offset=".068" style={{ stopColor: "#2da771" }}></stop>
                <stop offset=".476" style={{ stopColor: "#15cf74" }}></stop>
                <stop offset=".801" style={{ stopColor: "#06e775" }}></stop>
                <stop offset="1" style={{ stopColor: "#00f076" }}></stop>
              </linearGradient>
              <path
                fill="url(#googlePlayFooter4)"
                fillRule="evenodd"
                d="M31.4 18.3 14.5 8.7c-.7-.6-1.7-.5-2.4.1l14.5 14.4 4.8-4.9z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="m31.3 28-16.8 9.6c-.7.5-1.6.5-2.3 0l-.1.1.1.1c.7.5 1.6.5 2.3 0l16.9-9.6-.1-.2z"
                clipRule="evenodd"
                opacity=".2"
              ></path>
              <path
                fillRule="evenodd"
                d="M37.1 24.7 31.3 28l.1.1 5.7-3.2c.7-.3 1.1-.9 1.2-1.7-.1.6-.6 1.2-1.2 1.5z"
                clipRule="evenodd"
                opacity=".12"
              ></path>
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="m14.5 8.8 22.6 12.8c.6.3 1.1.8 1.2 1.5-.1-.7-.5-1.4-1.2-1.7L14.5 8.7c-1.6-.9-2.9-.2-2.9 1.7v.2c0-1.9 1.3-2.7 2.9-1.8z"
                clipRule="evenodd"
                opacity=".25"
              ></path>
            </svg>
          </a>
          <a
            href="http://localhost:3000/"
            target="_blank"
            className="text-light"
            aria-label="Get HomeGarage app on App Store"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="140"
              height="42"
              viewBox="0 0 156.6 46.4"
            >
              <title>Get HomeGarage app on App Store</title>
              <path
                fill="#A6A6A6"
                d="M151 46.4H5.5c-3 0-5.5-2.5-5.5-5.5V5.5C0 2.5 2.5 0 5.5 0H151c3 0 5.5 2.4 5.6 5.5v35.4c0 3.1-2.5 5.5-5.6 5.5z"
              ></path>
              <path
                fill="#1E1E1E"
                d="M155.5 40.9c0 2.5-2 4.4-4.4 4.4H5.5c-2.5 0-4.4-2-4.5-4.4V5.5C1 3 3 1 5.5 1H151c2.5 0 4.4 2 4.4 4.4v35.5z"
              ></path>
              <g fill="#FFF">
                <path d="M34.939 22.912c0-2.3 1.2-4.4 3.2-5.6-1.2-1.8-3.3-2.9-5.4-2.9-2.3-.2-4.5 1.4-5.7 1.4-1.2 0-3-1.3-4.9-1.3-2.5.1-4.8 1.5-6.1 3.7-2.6 4.6-.7 11.2 1.9 14.9 1.3 1.8 2.7 3.8 4.7 3.7 1.9-.1 2.6-1.2 4.9-1.2 2.3 0 2.9 1.2 4.9 1.2 2 0 3.3-1.8 4.5-3.6.9-1.3 1.6-2.7 2.1-4.2-2.5-1.1-4.1-3.4-4.1-6.1zM31.239 11.912c1.1-1.3 1.6-3 1.5-4.7-1.7.2-3.2 1-4.4 2.3-1.1 1.3-1.7 2.9-1.6 4.6 1.8-.1 3.4-.8 4.5-2.2z"></path>
              </g>
              <g fill="#FFF">
                <path d="M62.198 36.582h-2.6l-1.4-4.6h-5l-1.4 4.5h-2.6l5-15.4h3l5 15.5zm-4.5-6.5-1.3-4c-.1-.4-.4-1.4-.8-2.9-.2.6-.4 1.6-.7 2.9l-1.3 4h4.1zM74.998 30.882c.1 1.6-.5 3.2-1.5 4.5-.9 1-2.1 1.5-3.4 1.5-1.3.1-2.5-.5-3.2-1.6v5.9h-2.5v-12c0-1.2 0-2.4-.1-3.7h2.2l.1 1.8c1.3-2 4.1-2.6 6.1-1.3.4.2.7.5 1 .8.9 1.1 1.4 2.6 1.3 4.1zm-2.5.1c0-.9-.2-1.9-.7-2.7-.5-.7-1.3-1.1-2.2-1.1-.6 0-1.2.2-1.7.6-.5.4-.8 1-1 1.6-.1.2-.1.5-.1.8v1.9c0 .8.2 1.5.7 2.1.5.6 1.2.9 1.9.8.9 0 1.7-.4 2.2-1.1.7-.9.9-1.9.9-2.9zM87.798 30.882c.1 1.6-.5 3.2-1.5 4.5-.9 1-2.1 1.5-3.4 1.5-1.3.1-2.5-.5-3.2-1.6v5.9h-2.5v-12c0-1.2 0-2.4-.1-3.7h2.2l.1 1.8c1.3-2 4.1-2.6 6.1-1.3.4.2.7.5 1 .8.9 1.1 1.4 2.6 1.3 4.1zm-2.5.1c0-.9-.2-1.9-.7-2.7-.5-.7-1.3-1.1-2.2-1.1-.6 0-1.2.2-1.7.6-.5.4-.8 1-1 1.6-.1.2-.1.5-.1.8v1.9c0 .8.2 1.5.7 2.1.5.6 1.2.9 1.9.8.9 0 1.7-.4 2.2-1.1.7-.9.9-1.9.9-2.9zM102.098 32.182c0 1.2-.5 2.4-1.4 3.2-1.2 1-2.7 1.4-4.2 1.4-1.4.1-2.8-.3-4-1l.6-2.1c1.1.7 2.3 1 3.6 1 .8 0 1.5-.2 2.2-.6.5-.4.8-1 .8-1.7 0-.6-.2-1.2-.6-1.6-.6-.5-1.3-.9-2.1-1.2-2.7-1-4.1-2.5-4.1-4.4 0-1.2.5-2.4 1.4-3.1 1.1-.9 2.4-1.3 3.8-1.2 1.2 0 2.4.2 3.5.7l-.6 2c-.9-.5-1.9-.7-3-.7-.7 0-1.5.2-2 .6-.4.4-.6.9-.6 1.4 0 .6.3 1.1.7 1.5.7.5 1.4.9 2.2 1.2 1.1.4 2.1 1 2.9 1.9.6.8 1 1.8.9 2.7zM110.298 27.282h-2.7v5.4c0 1.4.5 2.1 1.4 2.1.4 0 .7 0 1.1-.1l.1 1.9c-.6.2-1.3.3-1.9.3-.9 0-1.7-.3-2.3-.9-.6-.9-.9-1.9-.8-3v-5.7h-1.6v-1.9h1.6v-2l2.4-.7v2.8h2.7v1.8zM122.598 30.882c.1 1.5-.5 3-1.5 4.2-1 1.1-2.5 1.8-4.1 1.7-1.4.1-2.8-.5-3.8-1.6s-1.5-2.6-1.5-4.1c0-1.6.5-3.1 1.5-4.2s2.5-1.7 4-1.6c1.5-.2 3 .4 4 1.5 1 1.2 1.5 2.6 1.4 4.1zm-2.6.1c0-.9-.2-1.8-.7-2.6-.4-.8-1.3-1.3-2.2-1.3-.9 0-1.8.5-2.3 1.3-.4.8-.6 1.7-.6 2.6 0 .9.2 1.8.7 2.6.7 1.2 2.2 1.7 3.4 1 .4-.2.8-.6 1-1.1.5-.7.8-1.6.7-2.5zM130.598 27.582c-.3 0-.5-.1-.8-.1-.8 0-1.6.3-2 1-.4.7-.6 1.4-.6 2.2v5.8h-2.5v-7.6c0-1.3 0-2.5-.1-3.5h2.2l.1 2.1h.1c.2-.6.7-1.2 1.2-1.7.5-.4 1.1-.6 1.8-.6h.6v2.4zM141.698 30.482c0 .4 0 .8-.1 1.1h-7.4c0 1 .4 1.9 1.1 2.5.7.5 1.6.8 2.4.8 1 0 2-.2 3-.5l.4 1.7c-1.2.5-2.5.7-3.7.7-1.5.1-3-.5-4.1-1.5-1-1.1-1.6-2.6-1.5-4.1-.1-1.5.4-3 1.4-4.2.9-1.2 2.4-1.8 3.9-1.8 1.4-.1 2.8.6 3.6 1.8.7 1 1.1 2.2 1 3.5zm-2.3-.7c0-.7-.1-1.3-.5-1.9-.4-.7-1.2-1.1-2-1-.8 0-1.5.4-2 1-.4.6-.7 1.2-.7 1.9h5.2z"></path>
              </g>
              <g fill="#FFF">
                <path d="M56.867 11.605c.1 1.2-.3 2.3-1.2 3.1-.9.7-2.1 1-3.2 1-.6 0-1.2-.1-1.8-.1v-7.5c.7-.1 1.4-.2 2.1-.2 1.1-.1 2.1.2 3 .9.8.7 1.2 1.7 1.1 2.8zm-1.2 0c0-.7-.2-1.4-.7-2-.6-.5-1.4-.8-2.1-.7-.3 0-.7 0-1 .1v5.6h.8c.8.1 1.6-.2 2.2-.8.5-.5.8-1.3.8-2.2zM63.667 12.805c0 .8-.2 1.5-.7 2.1-.5.6-1.2.9-2 .8-.7 0-1.4-.3-1.9-.8-.5-.6-.7-1.3-.7-2 0-.8.2-1.5.7-2.1.5-.5 1.2-.8 2-.8.7 0 1.4.3 1.9.8.5.6.8 1.3.7 2zm-1.2 0c0-.5-.1-.9-.3-1.3-.2-.4-.6-.7-1.1-.7-.5 0-.9.2-1.1.7-.3.4-.4.9-.4 1.4 0 .5.1.9.3 1.3.3.4.7.6 1.1.6.5 0 .9-.3 1.1-.7.3-.4.4-.8.4-1.3zM72.767 10.105l-1.7 5.5h-1.1l-.7-2.4c-.2-.6-.3-1.2-.4-1.8-.2.6-.3 1.2-.5 1.8l-.7 2.4h-1.1l-1.6-5.5h1.2l.6 2.6c.1.6.3 1.2.4 1.8.1-.5.2-1 .5-1.7l.8-2.6h1l.7 2.6c.2.6.3 1.2.4 1.8.1-.6.2-1.2.4-1.8l.7-2.7h1.1zM79.067 15.605h-1.2v-3.2c0-1-.4-1.4-1.1-1.4-.3 0-.7.1-.9.4-.2.3-.3.6-.3.9v3.3h-1.2v-5.5h1.1l.1.9c.1-.3.4-.5.6-.7.3-.2.7-.3 1.1-.3.5 0 .9.2 1.3.5.5.5.7 1.1.6 1.8l-.1 3.3zM82.467 15.605h-1.2v-8h1.2v8zM89.667 12.805c0 .8-.2 1.5-.7 2.1-.5.6-1.2.9-2 .8-.7 0-1.4-.3-1.9-.8-.5-.6-.7-1.3-.7-2 0-.8.2-1.5.7-2.1.5-.5 1.2-.8 2-.8.7 0 1.4.3 1.9.8.4.6.7 1.3.7 2zm-1.3 0c0-.5-.1-.9-.3-1.3-.2-.4-.6-.7-1.1-.7-.5 0-.9.2-1.1.7-.2.4-.3.9-.3 1.3 0 .5.1.9.3 1.3.3.4.7.6 1.1.6.5 0 .9-.3 1.1-.7.2-.3.3-.8.3-1.3zM95.467 15.605h-1.1l-.1-.6c-.4.5-1 .8-1.6.8-.5 0-.9-.2-1.2-.5-.3-.3-.4-.7-.4-1.1 0-.6.3-1.2.8-1.5.7-.4 1.5-.6 2.4-.5v-.3c0-.7-.4-1.1-1.1-1.1-.5 0-1 .1-1.4.4l-.2-.8c.6-.3 1.2-.5 1.9-.5 1.4 0 2.1.8 2.1 2.3v2c-.1.5-.1.9-.1 1.4zm-1.2-1.9v-.8c-1.3 0-2 .3-2 1.1 0 .2.1.5.2.6.2.1.4.2.6.2.3 0 .5-.1.7-.3.3-.1.5-.5.5-.8zM102.367 15.605h-1.1l-.1-.9c-.3.7-1 1.1-1.8 1-.6 0-1.2-.3-1.6-.8-.5-.6-.7-1.3-.7-2 0-.8.2-1.5.7-2.2.4-.5 1-.8 1.7-.8.6-.1 1.2.2 1.5.7v-3h1.2v6.5c.2.5.2 1 .2 1.5zm-1.2-2.3v-1.3c-.1-.3-.2-.5-.4-.7-.2-.2-.5-.3-.8-.3-.4 0-.8.2-1.1.5-.3.4-.4.9-.4 1.4 0 .5.1.9.4 1.3.2.3.6.6 1.1.5.4 0 .7-.2 1-.4.1-.3.2-.7.2-1zM112.767 12.805c0 .8-.2 1.5-.7 2.1-.5.6-1.2.9-2 .8-.7 0-1.4-.3-1.9-.8-.5-.6-.7-1.3-.7-2 0-.8.2-1.5.7-2.1.5-.5 1.2-.8 2-.8.7 0 1.4.3 1.9.8.5.6.8 1.3.7 2zm-1.2 0c0-.5-.1-.9-.3-1.3-.2-.4-.6-.7-1.1-.7-.5 0-.9.2-1.1.7-.3.4-.4.9-.4 1.4 0 .5.1.9.3 1.3.3.6 1.1.8 1.7.5.2-.1.4-.3.5-.5.3-.4.4-.9.4-1.4zM119.367 15.605h-1.2v-3.2c0-1-.4-1.4-1.1-1.4-.3 0-.7.1-.9.4-.2.3-.3.6-.3.9v3.3h-1.2v-5.5h1v.9c.1-.3.4-.5.6-.7.3-.2.7-.3 1.1-.3.5 0 .9.2 1.3.5.5.5.7 1.1.6 1.8l.1 3.3zM127.567 11.005h-1.3v2.7c0 .7.2 1 .7 1 .2 0 .4 0 .5-.1v.9c-.3.1-.6.1-.9.1-.4 0-.8-.1-1.1-.4-.3-.4-.5-.9-.4-1.5v-2.7h-.8v-.9h.8v-1l1.2-.4v1.4h1.3v.9zM133.967 15.605h-1.2v-3.1c0-1-.4-1.5-1.1-1.5-.5 0-1 .3-1.2.9 0 .1-.1.3-.1.4v3.3h-1.2v-8h1.2v3.3c.3-.6 1-.9 1.6-.9.5 0 .9.2 1.3.5.4.5.7 1.2.6 1.8l.1 3.3zM140.567 12.605v.6h-3.6c0 .5.2.9.5 1.2.3.2.7.4 1.2.4s1-.1 1.5-.3l.2.8c-.6.2-1.2.4-1.8.3-.7 0-1.5-.2-2-.7-.5-.5-.8-1.3-.7-2 0-.7.2-1.5.7-2.1.5-.6 1.2-.9 1.9-.9s1.4.3 1.8.9c.2.6.4 1.2.3 1.8zm-1.1-.3c0-.3-.1-.7-.2-.9-.2-.3-.6-.5-1-.5s-.7.2-1 .5c-.2.3-.3.6-.4.9h2.6z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>

      {/* Right Content - iPhone Mockup */}
      <div className=" relative max-md:">
        <IPhoneMockup />
      </div>
    </div>
  );
};

export default Hero;
