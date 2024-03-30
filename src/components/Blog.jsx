import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../stylesheet/Blog.css";
import ClipLoader from "react-spinners/ClipLoader";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Blog = ({theme}) => {
  const [blog,setBlog] = useState([]);
  const [loading,setLoading] = useState(true)
  const getUserBlog = async ()=>{
    const response = await axios.get("https://fluxs.onrender.com/blog");
   setBlog(response.data.data);
   setLoading(false);
  }

  useEffect(()=>{
getUserBlog();
  },[])
  return (
    <div>
    {
loading?(<div className='spinner'>
<ClipLoader color={"#36D7B7"} loading={loading} size={60}
aria-label="Loading....."
        data-testid="loader"
 />

</div>):
 blog.map((blogs,index)=>(
        <div className='cards'>
          <h1>{`Title:${blogs.title}`||<Skeleton/>}</h1>
          <h2>{`Category:${blogs.categories}`||<Skeleton/>}</h2>
          <p>{`Blog:${blogs.blog}`}</p>
          <p>{`Author:${blogs.author}`}</p>

        </div>
      ))
    }


    </div>
  )
}

export default Blog