import React from "react";
import profilePic from "../assets/cindypp.png"; // Ensure the correct path

export const Profile = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-start vh-100 bg-gradient mt-5" 
         style={{ background: "linear-gradient(135deg, #4a90e2, #7030a0)", padding: "20px" }}>
      
      {/* Profile Image */}
      <img 
        src={profilePic} 
        alt="Profile of Cindy Reginia Wang" 
        className="rounded-circle border border-light shadow-lg"
        style={{ width: "150px", height: "150px", objectFit: "cover", marginTop: "20px" }} 
      />

      {/* Name */}
      <h2 className="fw-bold text-light mt-3 text-shadow">
        Cindy Reginia Wang
      </h2>

      {/* Description */}
      <p className="text-white-50 fs-5 text-center px-3">
        I am a passionate and driven computer science student with a strong foundation in programming, algorithms, and software development. I enjoy problem-solving and have worked on projects involving web development, data analysis, and system design. Always eager to learn, I stay updated with the latest technologies and actively participate in tech communities. With a keen interest in building efficient and scalable solutions, I am looking for opportunities to apply my skills in real-world applications and contribute to innovative projects.
      </p>

      {/* Social Links */}
      <div className="mt-3 d-flex gap-3">
        <a href="https://www.linkedin.com/in/cindy-reginia-wang-797a0b231/" className="btn btn-outline-light btn-sm px-4 shadow-sm">
          LinkedIn
        </a>
        <a href="https://github.com/waengs" className="btn btn-outline-light btn-sm px-4 shadow-sm">
          GitHub
        </a>
      </div>
    </div>
  );
};
