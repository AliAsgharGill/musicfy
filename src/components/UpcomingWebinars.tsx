"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  {
    title: "Advanced Guitar Techniques",
    description:
      "Learn advanced guitar techniques to take your playing to the next level.",
    slug: "advanced-guitar-techniques",
    isFeatured: false,
  },
  {
    title: "Mastering Piano Chords",
    description:
      "A comprehensive guide to mastering chords on the piano for all skill levels.",
    slug: "mastering-piano-chords",
    isFeatured: true,
  },
  {
    title: "Vocal Training for Beginners",
    description:
      "Start your vocal training journey with this beginner-friendly webinar.",
    slug: "vocal-training-for-beginners",
    isFeatured: false,
  },
  {
    title: "Jazz Improvisation Techniques",
    description:
      "Explore the art of jazz improvisation with expert guidance and practical exercises.",
    slug: "jazz-improvisation-techniques",
    isFeatured: true,
  },
  {
    title: "Electronic Music Production",
    description:
      "Discover the tools and techniques used in electronic music production.",
    slug: "electronic-music-production",
    isFeatured: false,
  },
  {
    title: "Songwriting Essentials",
    description:
      "Learn the essential skills and techniques for writing compelling songs.",
    slug: "songwriting-essentials",
    isFeatured: true,
  },
  {
    title: "Music Business 101",
    description:
      "Get an overview of the music industry and learn how to navigate the business side of music.",
    slug: "music-business-101",
    isFeatured: false,
  },
  {
    title: "Orchestration and Arranging",
    description:
      "Study the techniques of orchestration and arranging for various ensembles.",
    slug: "orchestration-and-arranging",
    isFeatured: true,
  },
  {
    title: "Home Studio Setup",
    description:
      "Learn how to set up and optimize your home studio for professional recording.",
    slug: "home-studio-setup",
    isFeatured: false,
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];
export const UpcomingWebinars = () => {

  const [text, setText] = React.useState("View All Webinars");
  const [number, setNumber] = React.useState(6);
  const handleClick = () => {
    text === "View All Webinars" ? setText("View Less Webinars") : setText("View All Webinars");
    number === 6 ? setNumber(12) : setNumber(6);
  }
  return (
    <>
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>

          <div className="mt-10">
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect
                items={featuredWebinars.slice(0, number).map((webinar) => ({
                  title: webinar.title,
                  description: webinar.description,
                  link: `/webinars/${webinar.slug}`,
                }))}
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            onClick={handleClick}>
              {text}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingWebinars;
