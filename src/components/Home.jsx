import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BenefitCard from "./BenefitCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const benefits = [
  {
    icon: "ri-artboard-fill",
    title: "Great Faculty",
    description:
      "Our teachers are industry experts who bring real-world experience to every lesson.",
  },
  {
    icon: "ri-pencil-fill",
    title: "Latest Curriculum",
    description:
      "We update our courses regularly to match the latest industry standards and trends.",
  },
  {
    icon: "ri-leaf-fill",
    title: "Green Environment",
    description:
      "Learn in a peaceful, eco-friendly campus designed to boost focus and creativity.",
  },
];

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <style>
        {`
        .mySwiper {
          width: 90%;
          height: 280px;
          margin: 30px auto;
        }

        @media (min-width: 768px) {
          .mySwiper {
            width: 70%;
            height: 320px;
          }
        }

        .mySwiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mySwiper img {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          object-fit: cover;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .mySwiper img:hover {
          transform: scale(1.03);
        }
      `}
      </style>

      <Navbar />

      {/* Hero Section */}
      <header className="w-full grid grid-cols-1 md:grid-cols-2 px-8 py-12 md:p-16 bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#38BDF8]">
        <div className="flex justify-center items-center">
          <img
            src="./Photo/home1.jpg"
            alt="HomePage"
            className="w-48 md:w-[380px] rounded-full animate__animated animate__pulse border-2 shadow-xl"
          />
        </div>

        <div className="flex flex-col gap-6 justify-center text-white mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Say Hello!
            <br />
            Coding Mania...
          </h1>

          <p className="text-lg md:text-2xl font-semibold opacity-90 max-w-xl text-pink-950">
            Learn coding the right way — interactive, practical, and designed
            to make you job-ready.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <button className="bg-orange-600 text-white px-10 py-3 rounded-md text-lg hover:bg-orange-700 transition">
              Learn More
            </button>
            <button className="border-2 border-orange-500 text-white px-10 py-3 rounded-md text-lg hover:bg-orange-600 hover:border-orange-600 transition">
              Watch Videos
            </button>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <div className="px-6 md:px-24 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          Benefits & Advantages
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mt-4 text-lg max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          perspiciatis porro nulla sunt ab neque, nam pariatur quo tempora fuga,
          temporibus placeat aut sed quas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        {/* BenefitCard receives icon, title, description as props */}
        <div className="w-11/12 mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>

      {/* Campus Portfolio */}
      <div className="px-6 md:px-24 py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <h1 className="text-center text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide">
          Campus Portfolio
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-center mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          perspiciatis porro nulla sunt ab neque, nam pariatur quo tempora fuga,
          temporibus placeat aut sed quas.
        </p>

        <div className="flex justify-center mt-12">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <img src="./Home/a.jpg" alt="Campus A" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Home/b.jpg" alt="Campus B" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Home/d.jpg" alt="Campus D" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
