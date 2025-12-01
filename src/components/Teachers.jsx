import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const teachers = [
  {
    img: "/Teachers/teacher1.jpg",
    name: "Anir Singh",
    degree: "MCA (UPS)",
    experience: "5 yrs exp"
  },
  {
    img: "/Teachers/teachers2.jpg",
    name: "Ravi Kumar",
    degree: "M.Tech (CSE)",
    experience: "7 yrs exp"
  },
  {
    img: "/Teachers/teachers3.jpg",
    name: "Sandeep Mehta",
    degree: "M.Sc (Physics)",
    experience: "8 yrs exp"
  },
  {
    img: "/Teachers/teachers4.jpg",
    name: "Amit Verma",
    degree: "M.A (English)",
    experience: "6 yrs exp"
  },
  {
    img: "/Teachers/teachers5.jpg",
    name: "Vikas Patel",
    degree: "B.Tech (IT)",
    experience: "4 yrs exp"
  },
  {
    img: "/Teachers/teachers6.jpg",
    name: "Rahul Sharma",
    degree: "MBA (Management)",
    experience: "9 yrs exp"
  },
  {
    img: "/Teachers/teachers7.jpg",
    name: "Arjun Singh",
    degree: "M.Sc (Maths)",
    experience: "10 yrs exp"
  },
  {
    img: "/Teachers/teachers8.jpg",
    name: "Rohit Joshi",
    degree: "BCA",
    experience: "3 yrs exp"
  },
  {
    img: "/Teachers/teachers9.jpg",
    name: "Manish Pandey",
    degree: "Ph.D (Chemistry)",
    experience: "12 yrs exp"
  },
  {
    img: "/Teachers/teachers10.jpg",
    name: "Saurabh Nair",
    degree: "M.Com",
    experience: "6 yrs exp"
  },
  {
    img: "/Teachers/teachers11.jpg",
    name: "Deepak Tiwari",
    degree: "MCA",
    experience: "5 yrs exp"
  },
  {
    img: "/Teachers/teachers12.jpg",
    name: "Karan Yadav",
    degree: "M.A (Economics)",
    experience: "7 yrs exp"
  }
];


function Teachers() {




  return (
    <div>
      <Navbar/>
      <div>
       <header style={{
  height: 200,
  backgroundImage: "linear-gradient(135deg, rgba(105,238,218,1) 20%, rgba(114,80,228,1) 80%)",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
}}>
  <h1 style={{
    fontSize: 56,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
    <i className="ri-user-2-fill" style={{fontSize: 60}}></i>
    Teachers
  </h1>
  <p style={{marginTop: 10, fontSize: 18, opacity: 0.9}}>
    Meet our qualified and experienced faculty
  </p>
</header>


        <section style={{
          width:'80%',
          margin:'0 auto',
          padding:'80px 0',
          display:'flex',
          justifyContent:'space-around',
          gap:'30px',
          flexWrap:'wrap',
          alignItems:'center'
        }}>
          {
            teachers.map((item)=>{
              return(
                <div style={{width:'20%'}}  key={item.img}>
                  <img src={item.img} width='100%' style={{borderRadius:'5px'}}/>
                   <h2 style={{padding:0, marginBottom:4}}>{item.name}</h2>
                 <p style={{padding:0, margin:0, color:'gray'}}>{item.degree}</p>
                

                </div>
              )

            })
          }
      


        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Teachers
