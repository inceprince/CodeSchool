import React from 'react';


function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // stack vertically
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // ✅ allows flexibility on mobile (avoids scroll issue)
        backgroundColor: '#f8f9ff', // ✅ soft background for contrast
        color: '#6C63FF',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <img src="/Photo/not-found.svg" width="150" alt="Not Found" 
        style={{
          width: '250px',
          maxWidth: '80%', // ✅ responsive on small screens
          marginBottom: '20px',
          animation: 'float 3s ease-in-out infinite', // ✅ subtle motion
        }}
      />
      <h1 style={{ fontSize: '48px', margin: 0 }}>Page Not Found</h1>
      <p style={{ fontSize: '18px', marginTop: '10px', color: '#555' }}>
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        style={{
          marginTop: '30px',
          textDecoration: 'none',
          background: '#6C63FF',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: '8px',
          fontWeight: '600',
          transition: '0.3s',
        }}
        onMouseOver={(e) => (e.target.style.background = '#584fe3')}
        onMouseOut={(e) => (e.target.style.background = '#6C63FF')}
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;
