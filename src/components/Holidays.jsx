import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Holidays() {
  const holidays = [
    { id: 1, title: "New Year’s Day", duration: "1 Day", date: "2026-01-01" },
    { id: 2, title: "Republic Day", duration: "1 Day", date: "2026-01-26" },
    { id: 3, title: "Maha Shivaratri", duration: "1 Day", date: "2026-02-17" },
    { id: 4, title: "Holi", duration: "2 Days", date: "2026-03-03 to 2026-03-04" },
    { id: 5, title: "Good Friday", duration: "1 Day", date: "2026-04-03" },
    { id: 6, title: "Eid al-Fitr (Ramzan Eid)", duration: "1 Day", date: "2026-03-20 (approx)" },
    { id: 7, title: "Independence Day", duration: "1 Day", date: "2026-08-15" },
    { id: 8, title: "Raksha Bandhan", duration: "1 Day", date: "2026-08-28" },
    { id: 9, title: "Janmashtami", duration: "1 Day", date: "2026-09-04" },
    { id: 10, title: "Ganesh Chaturthi", duration: "1 Day", date: "2026-09-16" },
    { id: 11, title: "Gandhi Jayanti", duration: "1 Day", date: "2026-10-02" },
    { id: 12, title: "Dussehra (Vijayadashami)", duration: "1 Day", date: "2026-10-20" },
    { id: 13, title: "Diwali", duration: "3 Days", date: "2026-11-06 to 2026-11-08" },
    { id: 14, title: "Guru Nanak Jayanti", duration: "1 Day", date: "2026-11-24" },
    { id: 15, title: "Christmas Day", duration: "1 Day", date: "2026-12-25" },
  ];

  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "70%",
          margin: "0 auto",
          padding: "64px 0",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "32px",
            fontSize: "32px",
            color: "#333",
          }}
        >
          🏖️ Holidays — 2026
        </h1>

        <div
          style={{
            overflowX: "auto",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "linear-gradient(90deg, #6C63FF, #7A72FF)",
                  color: "white",
                }}
              >
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
                 
                >
                  <td style={cell}>{holiday.id}</td>
                  <td style={cell}>{holiday.title}</td>
                  <td style={cell}>{holiday.duration}</td>
                  <td style={cell}>{holiday.date}</td>
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

// 🎨 Shared styles
const headerCell = {
  padding: "14px",
  fontWeight: "600",
  textAlign: "left",
};

const cell = {
  padding: "14px",
  borderBottom: "1px solid #eee",
  fontSize: "15px",
  color: "#333",
};

export default Holidays;
