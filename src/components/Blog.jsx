import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../stylesheet/Blog.css";

const Blog = () => {
  const [blog,setBlog] = useState([]);
  const getUserBlog = async ()=>{
    const response = await axios.get("https://fluxs.onrender.com/blog");
    console.log(response.data);
   setBlog(response.data.data);
  }

  useEffect(()=>{
getUserBlog();
  },[])
  return (
    <div className='userblogs'>
    {
      blog.map((blogs,index)=>(
        <div className='cards'>
          <h1>{`Title:${blogs.title}`}</h1>
          <h2>{`Category:${blogs.categories}`}</h2>
          <p>{`Blog:${blogs.blog}`}</p>
          <p>{`Author:${blogs.author}`}</p>

        </div>
      ))
    }


    </div>
  )
}

export default Blog