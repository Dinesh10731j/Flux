import React, { useState, useEffect } from 'react';
import Socialmedia from "../assets/socialmedia.png";
import "../../stylesheet/Features.css";
import customerReview from "../assets/review.jpg";
import CustomerSupport from "../assets/support.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import {TypeAnimation} from "react-type-animation"

const Features = () => {

  
  useEffect(() => {
    AOS.init({ duration: 2000 });
    
  }, []);

  return (
    <div className='features'>
      <div className='service' data-aos="fade-zoom-in">
       
         
            <img src={Socialmedia} alt='service' />
            <TypeAnimation  sequence={[
              
              "Communication",
              1000,
            
             
             ]}
 
               repeat={Infinity}
               style={{fontSize:"1.2em",marginTop:"4px"}}
             />
            <p>
              Welcome to the Communication Section of our blog, your gateway to staying
              connected and informed. Here, we explore the latest trends, insights, and best
              practices in communication, offering valuable resources to help you enhance your
              interpersonal skills, foster meaningful connections, and navigate the complexities
              of modern communication channels. From tips on effective email etiquette to guides
              on mastering virtual meetings, this section is your go-to destination for all things
              communication-related. Join us as we delve into the art and science of effective
              communication in the digital age.
            </p>
     
       
      </div>
      <div className='customer-review' data-aos="fade-zoom-in">
       
            <img src={customerReview} alt='review' />
            <TypeAnimation  sequence={[
              
             "Customer Review",
             1000,
            
            
            ]}

              repeat={Infinity}
              style={{fontSize:"1.2em",marginTop:"4px"}}
            />
            <p>
              Welcome to our blog's customer review section, where imagination meets
              insight! Dive into a world where fictional characters share their thoughts
              and experiences with products and services, complete with fake ratings that
              add a touch of whimsy to the review process. From fantastical tales of enchanted
              gadgets to outlandish adventures in virtual realms, our imaginary reviewers
              entertaining perspectives that are sure to spark your imagination. While the
              ratings may be fake, the fun and creativity are very real. So, suspend disbelief
              and join us on a journey through the whimsical world
              of fake ratings, where every review is a story waiting to be told.
            </p>
        
      </div>
      <div className='support' data-aos="fade-zoom-in">
        
            <img src={CustomerSupport} alt='support' />
            <TypeAnimation  sequence={[
              1000,
              "Customer Service",
              100,
            
             ]}
 
               repeat={Infinity}
               style={{fontSize:"1.2em",marginTop:"4px"}}
             />
            <p>
              Introducing the customer service hub of our blog app – your one-stop destination
              for seamless support and personalized assistance! We understand the importance of
              exceptional customer service in ensuring your journey with us is smooth sailing.
              Whether you have questions about navigating the app, need troubleshooting guidance,
              or simply want to share feedback, our dedicated team is here to help. With prompt
              responses, tailored solutions, and a commitment to your satisfaction, we strive to
              exceed your expectations at every turn. Your experience matters to us, and we're here
              to ensure it's nothing short of exceptional.
            </p>
         
      </div>
      <ScrollToTop smooth color='#3498db' />
    </div>
  )
}

export default Features;
