import React from 'react';
import{Link} from 'react-router-dom'

function Footer() {
  return (
<footer style={{
  background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
  padding: "30px 5%",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: "40px",
  alignItems: "flex-start"
}}>


      
      {/* Column 1 - About */}
      <div style={{maxWidth: "250px"}}>
        <h2 style={{
          color: 'white',
          fontWeight: '600',
          marginBottom: '10px'
        }}>CodeSchool</h2>
        <p style={{color: "#f5e7e7ff"}}>
          CodeSchool is an online learning platform that helps young minds learn coding interactively and creatively through hands-on projects.
        </p>
      </div>

      {/* Column 2 - Quick Links */}
      <div style={{
         display:'flex',
          flexDirection:'column'
      }}>
        <h2 style={{
          color: 'white',
          fontWeight: '600',
          marginBottom: '10px',
         
        }}>Quick Links</h2>
        <Link to="/" style={{color: "#f5e7e7ff", margin: 0,textDecoration:'none'}}>🏠 Home</Link>
        <Link to="/teachers" style={{color: "#f5e7e7ff", margin: 0,textDecoration:'none'}}>👩‍🏫 Teachers</Link>
        <Link to='/holidays' style={{color: "#f5e7e7ff", margin: 0,textDecoration:'none'}}>📅 Holidays</Link>
        <Link to="/contacts" style={{color: "#f5e7e7ff", margin: 0,textDecoration:'none'}}>📞 Contact Us</Link>
      </div>

      {/* Column 3 - Resources */}
      <div>
        <h2 style={{
          color: 'white',
          fontWeight: '600',
          marginBottom: '10px'
        }}>Resources</h2>
        <p style={{color: "#f5e7e7ff", margin: 0}}>💻 Free Coding Lessons</p>
        <p style={{color: "#f5e7e7ff", margin: 0}}>🎓 Certification Courses</p>
        <p style={{color: "#f5e7e7ff", margin: 0}}>📚 Blog & Tutorials</p>
        <p style={{color: "#f5e7e7ff", margin: 0}}>💬 Community Forum</p>
      </div>

      {/* Column 4 - Contact Info */}
    <div style={{ maxWidth: "250px" }}>
  <h2 style={{color: 'white',
          fontWeight: '600',
          marginBottom: '10px'}}>Contact Us</h2>
  <form>
    <input 
      type="text" 
      id="fname" 
      name="fname" 
      placeholder="Enter your name" 
      style={{ padding: "8px", width: "100%", marginBottom: "10px" }} 
    />
    <input 
      type="email" 
      id="fname" 
      name="fname" 
      placeholder="Email" 
      style={{ padding: "8px", width: "100%", marginBottom: "10px" }} ></input>
    <input 
      type="Message" 
      id="fname" 
      name="fname" 
      placeholder="Message" 
      style={{ padding: "8px", width: "100%", marginBottom: "10px" }} 
    />
    <button style={{
      border:"none",
      color:"white",
      background:"#D94F35",
      borderRadius:"3px"

    }} type="submit">Submit</button>
  </form>
</div>


      
      <div style={{width: '100%', textAlign: 'center', marginTop: '20px', color: '#dcdcdc', fontSize: '14px'}}>
  © {new Date().getFullYear()} CodeSchool. All rights reserved.
</div>


    </footer>
  )
}

export default Footer;
