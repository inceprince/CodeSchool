import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { isDark } = useTheme();

  const contactUs = (e) => {
    e.preventDefault();
    console.log(fullname, email, message);

    Swal.fire({
      title: "Message Sent! 🎉",
      text: "Thank you for reaching out. We'll get back to you soon!",
      icon: "success",
      confirmButtonColor: "#6C63FF",
      background: isDark ? "#1f2937" : "#f9f9ff",
      color: isDark ? "#f9fafb" : "#333",
    });

    setFullname("");
    setEmail("");
    setMessage("");
  };

  const inputStyle = {
    border: `1px solid ${isDark ? "#4b5563" : "#ddd"}`,
    borderRadius: "6px",
    padding: "10px",
    fontSize: "15px",
    outlineColor: "#6C63FF",
    background: isDark ? "#374151" : "white",
    color: isDark ? "#f9fafb" : "#111",
    width: "100%",
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <div className="flex items-center justify-center gap-8 px-[5%] py-16 flex-wrap">
        <img
          src="./Photo/undraw_contact-us_kcoa.svg"
          alt="Contact Illustration"
          style={{ width: "45%", minWidth: "300px" }}
        />

        <div
          className="dark:bg-gray-800 transition-colors duration-300"
          style={{
            width: "45%",
            minWidth: "300px",
            background: isDark ? undefined : "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{ textAlign: "center", marginBottom: "24px", color: "#6C63FF" }}
          >
            Contact Us
          </h2>

          <form onSubmit={contactUs} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label className="text-gray-800 dark:text-gray-200" style={{ fontSize: "16px", fontWeight: "500" }}>
                Full Name
              </label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                required
                placeholder="Enter your full name"
                type="text"
                style={inputStyle}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label className="text-gray-800 dark:text-gray-200" style={{ fontSize: "16px", fontWeight: "500" }}>
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="example@gmail.com"
                type="email"
                style={inputStyle}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label className="text-gray-800 dark:text-gray-200" style={{ fontSize: "16px", fontWeight: "500" }}>
                Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                placeholder="Write your message or query here..."
                rows={4}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <button
              type="submit"
              style={{
                border: "none",
                width: "fit-content",
                alignSelf: "center",
                padding: "12px 36px",
                borderRadius: "8px",
                background: "#6C63FF",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#5A54E6")}
              onMouseOut={(e) => (e.target.style.background = "#6C63FF")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
