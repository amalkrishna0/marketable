import React from "react";
import "./courses.css";
import sreekanth_image from "./sreekanth_class_image.jpg"
import binoy_image from "./binoy_class_image.jpg"
import { Link } from "react-router-dom";
export default function Courses() {
  const courses = [
    {
      title: "Zero to Hero : Mastering SMC",
      image: sreekanth_image,
      teacher: "Sreekanth K",
      amount: "Rs 3000",
      link_to:"/a/zero-to-hero-smc"
    },
    {
      title: "20 Days of Trading",
      image: binoy_image,
      teacher: "Binoy Babu",
      amount: "Rs 4000",
    },
    
    
    // Add more course objects as needed
  ];

  return (
    <div className="courses_main_div">
        <div className="courses_heading">COURSES</div>
      <div className="courses_detail_div">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <Link to={course.link_to}><img src={course.image} alt={course.title} /></Link>
            <div className="course-details">
              <h2>{course.title}</h2>
              <p>{course.teacher}</p>
              <p>   {course.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
