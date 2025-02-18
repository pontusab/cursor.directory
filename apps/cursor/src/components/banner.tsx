"use client";

import { XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentBannerIndex(Math.floor(Math.random() * 2));
  }, []);

  const [isAnimating, setIsAnimating] = useState(true); // Start as true
  const [animateDirection, setAnimateDirection] = useState<"up" | "down">("up");

  const banners = [
    {
      href: "https://go.midday.ai/8cX3F4o",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="none"
          className="absolute left-1 top-4 scale-[.65]"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M23.912 0a24.885 24.885 0 0 0-10.47 2.8l10.47 18.134V0Zm0 29.069L13.444 47.201A24.886 24.886 0 0 0 23.912 50V29.069ZM26.088 50V29.055l10.474 18.142A24.884 24.884 0 0 1 26.088 50Zm0-29.052V0a24.885 24.885 0 0 1 10.476 2.803L26.088 20.948ZM3.893 38.446 22.03 27.974 11.56 46.111a25.156 25.156 0 0 1-7.667-7.665ZM46.11 11.56 27.976 22.03l10.47-18.136a25.156 25.156 0 0 1 7.665 7.666Zm-42.22-.002a25.157 25.157 0 0 1 7.668-7.667l10.473 18.14L3.891 11.558ZM2.8 13.44A24.885 24.885 0 0 0 0 23.916h20.946L2.801 13.44Zm.002 23.123A24.886 24.886 0 0 1 0 26.093H20.94L2.803 36.562Zm26.256-12.647H50a24.887 24.887 0 0 0-2.8-10.473L29.06 23.916ZM47.2 36.561 29.066 26.092H50a24.887 24.887 0 0 1-2.802 10.469Zm-19.222-8.585 10.469 18.132a25.158 25.158 0 0 0 7.663-7.664L27.977 27.976Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Made by Midday",
      description:
        "An all-in-one tool for freelancers to monitor financial health, time-track, and send invoices. ↗",
    },
    {
      href: "https://go.midday.ai/NnI1CUO",
      logo: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-7"
        >
          {/* SVG paths for Languine logo */}
          <path
            d="M16.7534 19.4328V15.601H19.0896V19.4328H16.7534Z"
            fill="currentColor"
          />
          <path
            d="M14.1123 19.4328V15.601H16.4485V19.4328H14.1123Z"
            fill="currentColor"
          />
          <path
            d="M11.4722 19.4328V15.601H13.8084V19.4328H11.4722Z"
            fill="currentColor"
          />
          <path
            d="M8.83154 19.4328V15.601H11.1677V19.4328H8.83154Z"
            fill="currentColor"
          />
          <path
            d="M6.19238 19.4328V15.601H8.52857V19.4328H6.19238Z"
            fill="currentColor"
          />
          <path
            d="M3.55127 19.4328V15.601H5.88746V19.4328H3.55127Z"
            fill="currentColor"
          />
          <path
            d="M0.910645 19.4328V15.601H3.24683V19.4328H0.910645Z"
            fill="currentColor"
          />
          <path
            d="M6.91895 15.8689V11.0791H7.21257V15.8689H6.91895ZM7.5062 15.8689V11.0791H7.79983V15.8689H7.5062Z"
            fill="currentColor"
          />
          <path
            d="M3.55127 15.6744V11.8425H5.88746V15.6744H3.55127Z"
            fill="currentColor"
          />
          <path
            d="M0.910645 15.6744V11.8425H3.24683V15.6744H0.910645Z"
            fill="currentColor"
          />
          <path
            d="M6.91895 12.1104V7.32056H7.21257V12.1104H6.91895ZM7.5062 12.1104V7.32056H7.79983V12.1104H7.5062Z"
            fill="currentColor"
          />
          <path
            d="M3.55127 11.9159V8.08405H5.88746V11.9159H3.55127Z"
            fill="currentColor"
          />
          <path
            d="M0.910645 11.9159V8.08405H3.24683V11.9159H0.910645Z"
            fill="currentColor"
          />
          <path
            d="M6.91895 8.35202V3.56219H7.21257V8.35202H6.91895ZM7.5062 8.35202V3.56219H7.79983V8.35202H7.5062Z"
            fill="currentColor"
          />
          <path
            d="M3.55127 8.15749V4.32562H5.88746V8.15749H3.55127Z"
            fill="currentColor"
          />
          <path
            d="M0.910645 8.15749V4.32562H3.24683V8.15749H0.910645Z"
            fill="currentColor"
          />
          <path
            d="M7.50637 4.59354V2.2335H6.19238V1.91785H7.8V4.59354H7.50637ZM6.91912 4.59354V2.8648H6.19238V2.54915H7.21274V4.59354H6.91912Z"
            fill="currentColor"
          />
          <path
            d="M3.55127 4.399V0.567139H5.88746V4.399H3.55127Z"
            fill="currentColor"
          />
          <path
            d="M0.910645 4.399V0.567139H3.24683V4.399H0.910645Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Languine",
      description:
        "Translate your application with AI. Fast, accurate, and easy to integrate. ↗",
    },
  ];

  useEffect(() => {
    // Show banner after 2s delay on pathname change
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) return;

    // Initial animation up
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    const switchBanner = () => {
      setIsAnimating(true);
      setAnimateDirection("down");
      // Animate current banner down
      setTimeout(() => {
        setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
        setAnimateDirection("up");
        // Animate next banner up
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }, 300);
    };

    // Initial switch after 8 seconds
    const timer = setTimeout(switchBanner, 8000);

    // Set up recurring switches every 16 seconds
    const interval = setInterval(switchBanner, 16000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isVisible]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAnimating(true);
    setAnimateDirection("down");
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  if (!isVisible) return null;

  const slideClass = isAnimating
    ? animateDirection === "down"
      ? "animate-out slide-out-to-bottom duration-300"
      : "animate-in slide-in-from-bottom-full duration-300"
    : "";

  const currentBanner = banners[currentBannerIndex];

  // Hide banner on /generate page
  if (pathname === "/generate") return null;

  return (
    <a href={currentBanner.href} target="_blank" rel="noreferrer">
      <div
        className={`fixed overflow-hidden ${slideClass} z-50 bottom-4 md:bottom-4 left-4 md:left-auto right-4 md:right-4 w-[calc(100vw-32px)] md:w-[calc(100vw-16px)] md:max-w-[350px] border border-border p-4 transition-all bg-background h-[88px] group`}
      >
        {currentBanner.logo}

        <div className="flex justify-between">
          <div className="flex flex-col space-y-0.5 pl-[40px]">
            <div className="flex space-x-2 items-center">
              <span className="text-sm font-medium">{currentBanner.title}</span>
            </div>
            <p className="text-xs text-[#878787]">
              {currentBanner.description}
            </p>
          </div>

          <button
            type="button"
            className="absolute right-1.5 top-1.5 text-[#878787] hidden group-hover:block"
            onClick={handleClose}
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </a>
  );
}
