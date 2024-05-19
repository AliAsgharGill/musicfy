"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { createContext } from "react";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const FeaturedCourses = () => {
  const [more, setMore] = React.useState(4);
  const [hide, setHide] = React.useState("View All Courses");

  const courses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  const handleViewAllCourses = () => {
    hide === "View All Courses"  ? setHide("View Less") : setHide("View All Courses");
    more === 8 ? setMore(4) : setMore(8);
  };

  //   const filteredCourses = more
  //     ? courses.slice(0).sort((a, b) => a.id - b.id)
  //     : courses.slice(0, 6).sort((a, b) => a.id - b.id);

  // now we need to make filter which sort courses on the basis of price low to high

  //   const handleMore = () => {
  //     setMore(!more);
  //   };

  return (
    <div className=" py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
        <div className="mt-12 p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {/* Product grid */}
          {courses &&
            courses.slice(0, more).map((course) => (
              <div key={course.id} className="">
                <BackgroundGradient className="rounded-[22px] w-full min-h-[420px]  max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <Image
                    src={`${course.image}`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-fill w-full rounded  "
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      ${course.price}
                    </span>
                  </button>
                </BackgroundGradient>
              </div>
            ))}
        </div>
        <div className="mt-20 text-center" onClick={handleViewAllCourses} >
          <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600" >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20" >{hide}</span>
          </button>          
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
