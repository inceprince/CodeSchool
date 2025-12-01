import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  return (
    <div>
      <style>
        {`
        .mySwiper {
          width: 70%;
          height: 300px;
          margin: 30px auto;
          padding-bottom: 20px;
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
      <div>
        <header
          className="w-[100%] grid grid-cols-2 p-16 
bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#38BDF8]"
        >
          <div>
            <img
              src="./Photo/home1.jpg"
              alt="HomePage"
              className="w-[400px] rounded-full animate__animated animate__pulse border border-2 shadow-xl "
            />
          </div>
          <div className="flex flex-col gap-8 justify-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Say Hello!
              <br />
              Coding Mania...
            </h1>

            <p className="text-2xl font-semibold opacity-90 max-w-xl text-pink-950">
              Learn coding the right way — interactive, practical, and designed
              to make you job-ready.
            </p>

            <div className="flex gap-6">
              <button className="bg-orange-600 text-white px-12 py-3 rounded-md text-lg hover:bg-orange-700 transition">
                Learn More
              </button>

              <button className="border-2 border-orange-500 text-white px-12 py-3 rounded-md text-lg hover:bg-orange-600 hover:border-orange-600 transition">
                Watch Videos
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="p-24">
        <h1 className="text-center text-4xl text-bold">Benfits & Advantages</h1>
        <p className="text-gray-600 text-center mt-4 text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          perspiciatis porro nulla sunt ab neque, nam pariatur quo tempora fuga,
          temporibus placeat aut sed quas. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur deleniti ex esse, similique
          illum quod.
        </p>
        <div>
          <div className="w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8">
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-artboard-fill text-3xl "></i>
              <h1 className="text-2xl font-bold mb-2 ">Great Faculty</h1>
              <p className="text-gray-600 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit beatae!
              </p>
            </div>
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i class="ri-pencil-fill text-3xl "></i>
              <h1 className="text-2xl font-bold mb-2 ">Latest Curriculum</h1>
              <p className="text-gray-600 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit beatae!
              </p>
            </div>

            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-leaf-fill text-3xl "></i>
              <h1 className="text-2xl font-bold mb-2 ">Green Environment</h1>
              <p className="text-gray-600 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit beatae!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-24 py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <h1 className="text-center text-4xl font-extrabold text-gray-800 tracking-wide">
          Campus Portfolio
        </h1>

        <p className="text-gray-600 text-center mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          perspiciatis porro nulla sunt ab neque, nam pariatur quo tempora fuga,
          temporibus placeat aut sed quas. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur deleniti ex esse, similique
          illum quod.
        </p>

        <div className="flex justify-center mt-12">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <img src="./Home/a.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Home/b.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Home/d.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
