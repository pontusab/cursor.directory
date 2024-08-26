"use client";

import { XIcon } from "lucide-react";
import Image from "next/image";
import ph from "./ph.png";

export function ProductHuntBanner() {
  return (
    <a href="https://ggl.link/ph" target="_blank" rel="noreferrer">
      <div className="fixed animate-in slide-in-from-bottom-full z-50 bottom-2 md:bottom-4 right-2 md:right-4 w-[calc(100vw-16px)] max-w-[350px] border border-border p-4 transition-all bg-background h-[88px] group">
        <Image
          width={54}
          height={62}
          src={ph}
          alt="ProductHunt"
          className="absolute left-0 top-4"
        />

        <div className="flex justify-between">
          <div className="flex flex-col space-y-0.5 pl-[40px]">
            <div className="flex space-x-2 items-center">
              <span className="text-sm font-medium">
                We're live on Product Hunt!
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
            </div>
            <p className="text-xs text-[#878787]">
              Join the conversation and help us get to #1 <br /> Product of the
              Day ↗
            </p>
          </div>

          <button
            type="button"
            className="absolute right-1.5 top-1.5 text-[#878787] hidden group-hover:block"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </a>
  );
}
