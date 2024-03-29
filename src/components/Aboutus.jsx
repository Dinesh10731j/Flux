import React, { useEffect, useState } from "react";
import "../../stylesheet/Aboutus.css";
import office from "../assets/office.png";
import mission from "../assets/mission.jpg";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
function Aboutus() {
  const navigate = useNavigate();
  const [subscribe,setSubscribe] = useState({useremail:""});

const SubscribeBlog = async ()=>{
  try{
    const response = await axios.post("https://fluxs.onrender.com/subscribe",subscribe);
    if(!response){
     toast.error(response.data.msg);
    }else{
toast.success(response.data.msg);
setTimeout(() => {
  navigate("/");
}, 1000);
    }
  }catch(err){
    toast.error("User already exists");
  }
 
}


const handleChange = (e)=>{
  const {name,value} = e.target;
  setSubscribe((prevoiusval)=>({
    ...prevoiusval,[name]:value
  }))

}

const handleSubmit = (e)=>{
  e.preventDefault();
  SubscribeBlog();

}

  return (
    <>
    <div className="aboutus">
    <ToastContainer/>
    <div className="flux_intro">
    <div className="about_flux">
    <h1>About Flux</h1>
     <p>
     "About Flux: Pioneering Blogging Excellence Since 2003" At Flux, we're not
      just a blogging platform – we're a legacy of digital innovation, shaping
      the way people share their stories, ideas, and passions since 2003. With
      over 7,000,000 daily visitors and growing, Flux has become a cornerstone
      of the online blogging community, empowering individuals and businesses
      alike to amplify their voices an d connect with audiences around the
      globe. Since our inception, we've remained committed to providing a
      seamless and intuitive platform that caters to the diverse needs of our
      users. Whether you're a seasoned blogger, an aspiring writer, or a
      business looking to expand your online presence, Flux offers the tools and
      resources you need to bring your ideas to life. Our platform is built on a
      foundation of reliability, security, and scalability, ensuring that your
      content reaches its intended audience with maximum impact. With features
      designed to enhance discoverability, engagement, and monetization, Flux
      enables bloggers to thrive in an ever-evolving digital landscape. But Flux
      is more than just a blogging platform – we're a community of creators,
      thinkers, and storytellers united by our shared passion for meaningful
      content.
     </p> 



    </div>

<div className="office_img">
  <img src={office} alt="offic_image"/>
</div>

   

    </div>
    
   


<div className="mission">
 <div className="mission_image">
  <img src={mission} alt="mission_image"/>
 </div>

 <div className="our_mission">
  <h1>Our Mission</h1>
  <p>
  At Flux, we empower curiosity and creativity through insightful content that sparks inspiration, fosters
   learning, and cultivates meaningful connections. Our mission is to provide a dynamic platform where diverse 
   voices converge to explore ideas, share experiences, and engage in thought-provoking conversations. With a focus on quality, 
  innovation, and inclusivity, we strive to enrich lives and inspire positive change one blog post at a time.
  </p>
 </div>
</div>
<div className="subscribe">
<h1>Subscribe</h1>
 <form onSubmit={handleSubmit}>
  <input type="email" placeholder="Enter e-mail" required  onChange={handleChange} name="useremail" value={subscribe.useremail}/>
  <input type="submit" value="Subscribe"/>
</form>
</div>

 </div>
</>

  );
}

export default Aboutus;
