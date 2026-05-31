import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const holidays = [
  { id: 1,  title: "New Year's Day",             duration: "1 Day",  date: "2026-01-01" },
  { id: 2,  title: "Republic Day",               duration: "1 Day",  date: "2026-01-26" },
  { id: 3,  title: "Maha Shivaratri",            duration: "1 Day",  date: "2026-02-17" },
  { id: 4,  title: "Holi",                       duration: "2 Days", date: "2026-03-03 to 2026-03-04" },
  { id: 5,  title: "Good Friday",                duration: "1 Day",  date: "2026-04-03" },
  { id: 6,  title: "Eid al-Fitr (Ramzan Eid)",  duration: "1 Day",  date: "2026-03-20 (approx)" },
  { id: 7,  title: "Independence Day",           duration: "1 Day",  date: "2026-08-15" },
  { id: 8,  title: "Raksha Bandhan",             duration: "1 Day",  date: "2026-08-28" },
  { id: 9,  title: "Janmashtami",                duration: "1 Day",  date: "2026-09-04" },
  { id: 10, title: "Ganesh Chaturthi",           duration: "1 Day",  date: "2026-09-16" },
  { id: 11, title: "Gandhi Jayanti",             duration: "1 Day",  date: "2026-10-02" },
  { id: 12, title: "Dussehra (Vijayadashami)",  duration: "1 Day",  date: "2026-10-20" },
  { id: 13, title: "Diwali",                     duration: "3 Days", date: "2026-11-06 to 2026-11-08" },
  { id: 14, title: "Guru Nanak Jayanti",         duration: "1 Day",  date: "2026-11-24" },
  { id: 15, title: "Christmas Day",              duration: "1 Day",  date: "2026-12-25" },
];

function Holidays() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <div className="w-11/12 md:w-4/5 lg:w-3/4 mx-auto py-16 px-2">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          🏖️ Holidays — 2026
        </h1>

        <div
          style={{
            overflowX: "auto",
            background: isDark ? "#1f2937" : "white",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px" }}>
            <thead>
              <tr style={{ background: "linear-gradient(90deg, #6C63FF, #7A72FF)", color: "white" }}>
                <th style={headerCell}>S.No</th>
                <th style={headerCell}>Title</th>
                <th style={headerCell}>Duration</th>
                <th style={headerCell}>Date</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday, index) => (
                <tr
                  key={holiday.id}
                  style={{
                    background: index % 2 === 0
                      ? isDark ? "#1f2937" : "#fafafa"
                      : isDark ? "#111827" : "white",
                  }}
                >
                  <td style={{ ...cell, color: isDark ? "#e5e7eb" : "#333" }}>{holiday.id}</td>
                  <td style={{ ...cell, color: isDark ? "#e5e7eb" : "#333" }}>{holiday.title}</td>
                  <td style={{ ...cell, color: isDark ? "#e5e7eb" : "#333" }}>{holiday.duration}</td>
                  <td style={{ ...cell, color: isDark ? "#e5e7eb" : "#333" }}>{holiday.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const headerCell = { padding: "14px 16px", fontWeight: "600", textAlign: "left" };
const cell = { padding: "12px 16px", borderBottom: "1px solid #374151", fontSize: "15px" };

export default Holidays;
