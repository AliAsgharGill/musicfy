// "use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
// import { useRouter } from "next/navigation";

const HeroSection = () => {
//   const router = useRouter();
//   const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.preventDefault();
//     router.push("/courses");
//   };

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4  relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our music course and start learning how to play your
          favorite songs, all in one place, with just a few clicks, no prior
          knowledge required, and no credit card required, for free.
          <div className="mt-4">
            <Link href="/courses" passHref>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                // onclick={handleClick}
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
