import React, { useState } from 'react';
import './testimonial.css'; // Import CSS file for styling
import image1 from "./quotes.jpg";
const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      comment: "I SWEAR ITS A GREAT OPPORTUNITY FOR BEGGINNERS. NOW I KNOW WHAT IS THE MARKET AND HOW TO BUY A STOCK FROM THE MARKET. AND YOUR TEACHING IS ALSO PERFECT .THANK U FOR GIVING ME THE BEST CLASS. I WISH U WILL BECOME THE BEST"
    },
    {
      name: "Alice Smith",
      rating: 4,
      comment: "I'VE LEARNED SO MUCH FROM THIS COURSE! THE INSTRUCTOR IS VERY KNOWLEDGEABLE AND EXPLAINS THINGS CLEARLY. HIGHLY RECOMMENDED FOR ANYONE INTERESTED IN LEARNING ABOUT THE STOCK MARKET."
    },
    {
      name: "Bob Johnson",
      rating: 5,
      comment: "THIS COURSE EXCEEDED MY EXPECTATIONS. THE CONTENT IS WELL-ORGANIZED AND EASY TO FOLLOW. I FEEL MUCH MORE CONFIDENT IN MY ABILITY TO NAVIGATE THE STOCK MARKET AFTER COMPLETING IT. THANK YOU!"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <h2>TESTIMONIALS</h2>
      {/* <div className="quote_image_div">
        <img src={image1} alt="" className='quote_image'/>
      </div> */}
      <div className="carousel-container">
        <span className="prev-small" onClick={prevSlide}>&#8592;</span>
        <div className="main_carousel">
          <div className="carousel">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                <div className="testimonial">
                  {index === currentSlide && (
                    <>
                      <div className='comment_name'>{testimonial.comment}</div>
                      <div className='name_and_star'>
                        <span className="rating">{'★'.repeat(testimonial.rating)}</span>
                        <strong>{testimonial.name}</strong>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="next-small" onClick={nextSlide}>&#8594;</span>
      </div>
    </div>
  );
};

export default Testimonial;
