import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TeacherCard from "./TeacherCard";
import { useTheme } from "../context/ThemeContext";

const teachers = [
  { img: "/Teachers/teacher1.jpg",   name: "Anir Singh",     degree: "MCA (UPS)",          experience: "5 yrs exp" },
  { img: "/Teachers/teachers2.jpg",  name: "Ravi Kumar",     degree: "M.Tech (CSE)",       experience: "7 yrs exp" },
  { img: "/Teachers/teachers3.jpg",  name: "Sandeep Mehta",  degree: "M.Sc (Physics)",     experience: "8 yrs exp" },
  { img: "/Teachers/teachers4.jpg",  name: "Amit Verma",     degree: "M.A (English)",      experience: "6 yrs exp" },
  { img: "/Teachers/teachers5.jpg",  name: "Vikas Patel",    degree: "B.Tech (IT)",        experience: "4 yrs exp" },
  { img: "/Teachers/teachers6.jpg",  name: "Rahul Sharma",   degree: "MBA (Management)",   experience: "9 yrs exp" },
  { img: "/Teachers/teachers7.jpg",  name: "Arjun Singh",    degree: "M.Sc (Maths)",       experience: "10 yrs exp" },
  { img: "/Teachers/teachers8.jpg",  name: "Rohit Joshi",    degree: "BCA",                experience: "3 yrs exp" },
  { img: "/Teachers/teachers9.jpg",  name: "Manish Pandey",  degree: "Ph.D (Chemistry)",   experience: "12 yrs exp" },
  { img: "/Teachers/teachers10.jpg", name: "Saurabh Nair",   degree: "M.Com",              experience: "6 yrs exp" },
  { img: "/Teachers/teachers11.jpg", name: "Deepak Tiwari",  degree: "MCA",                experience: "5 yrs exp" },
  { img: "/Teachers/teachers12.jpg", name: "Karan Yadav",    degree: "M.A (Economics)",    experience: "7 yrs exp" },
];

function Teachers() {
  const [search, setSearch] = useState("");
  const { isDark } = useTheme();

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Page Header */}
      <header
        style={{
          height: 200,
          backgroundImage:
            "linear-gradient(135deg, rgba(105,238,218,1) 20%, rgba(114,80,228,1) 80%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: 48, fontWeight: "bold", display: "flex", alignItems: "center", gap: 12 }}>
          <i className="ri-user-2-fill"></i> Teachers
        </h1>
        <p style={{ marginTop: 8, fontSize: 16, opacity: 0.9 }}>
          Meet our qualified and experienced faculty
        </p>
      </header>

      
      <div className="flex justify-center mt-10 px-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search teacher by name..."
          style={{
            background: isDark ? "#1f2937" : "white",
            color: isDark ? "#f9fafb" : "#111827",
            borderColor: isDark ? "#4b5563" : "#d1d5db",
          }}
          className="border rounded-full px-5 py-2 w-full max-w-md text-base focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      
      <section className="w-11/12 mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredTeachers.map((teacher) => (
          <TeacherCard
            key={teacher.img}
            img={teacher.img}
            name={teacher.name}
            degree={teacher.degree}
            experience={teacher.experience}
          />
        ))}

        {filteredTeachers.length === 0 && (
          <p className="col-span-full text-center text-gray-400 dark:text-gray-500 text-lg py-16">
            No teachers found matching "{search}".
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Teachers;
