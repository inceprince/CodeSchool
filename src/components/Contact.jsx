import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();
    console.log(fullname, email, message);

    Swal.fire({
      title: "Message Sent! 🎉",
      text: "Thank you for reaching out. We'll get back to you soon!",
      icon: "success",
      confirmButtonColor: "#6C63FF",
      background: "#f9f9ff",
      color: "#333",
    });

    // reset form
    setFullname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          padding: "64px 5%",
          flexWrap: "wrap",
          background: "#f9f9ff",
          minHeight: "80vh",
        }}
      >
        <img
          src="./Photo/undraw_contact-us_kcoa.svg"
          alt="Contact Illustration"
          style={{ width: "45%", minWidth: "300px" }}
        />
        <div
          style={{
            width: "45%",
            minWidth: "300px",
            background: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "24px",
              color: "#6C63FF",
            }}
          >
            Contact Us
          </h2>
          <form
            onSubmit={contactUs}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Fullname */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "16px", fontWeight: "500" }}>
                Full Name
              </label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                required
                placeholder="Enter your full name"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "10px",
                  fontSize: "15px",
                  outlineColor: "#6C63FF",
                }}
                type="text"
              />
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "16px", fontWeight: "500" }}>
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="example@gmail.com"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "10px",
                  fontSize: "15px",
                  outlineColor: "#6C63FF",
                }}
                type="email"
              />
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "16px", fontWeight: "500" }}>
                Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                placeholder="Write your message or query here..."
                rows={4}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "10px",
                  fontSize: "15px",
                  outlineColor: "#6C63FF",
                  resize: "none",
                }}
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
