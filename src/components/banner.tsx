"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <a
      href="https://midday.ai?utm_source=directory"
      target="_blank"
      rel="noreferrer"
    >
      <div className="fixed overflow-hidden animate-in slide-in-from-bottom-full z-50 bottom-2 md:bottom-4 right-2 md:right-4 w-[calc(100vw-16px)] max-w-[350px] border border-border p-4 transition-all bg-background h-[88px] group">
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

        <div className="flex justify-between">
          <div className="flex flex-col space-y-0.5 pl-[40px]">
            <div className="flex space-x-2 items-center">
              <span className="text-sm font-medium">Made by Midday</span>
            </div>
            <p className="text-xs text-[#878787]">
              An all-in-one tool for freelancers to monitor financial health,
              time-track, and send invoices. ↗
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
