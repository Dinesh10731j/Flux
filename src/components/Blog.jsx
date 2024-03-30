import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "../../stylesheet/Blog.css";

const Blog = ({ theme }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(true);

  const getUserBlog = async () => {
    try {
      const response = await axios.get("https://fluxs.onrender.com/blog");
      setBlog(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
    getUserBlog();

    const timer = setTimeout(() => {
      setSkeleton(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
      {loading ? (
        <div className='spinner'>
          <ClipLoader color={"#36D7B7"} loading={loading} size={60} aria-label="Loading....." data-testid="loader" />
        </div>
      ) : (
        blog.map((blogs, index) => (
          <div className='cards' data-aos="fade-zoom-in" key={blogs.title}>
            {skeleton ? (
              <Skeleton count={5} baseColor='#636e72'/>
            ) : (
              <>
                <h1>{`Title:${blogs.title}`}</h1>
                <h2>{`Category:${blogs.categories}`}</h2>
                <p>{`Blog:${blogs.blog}`}</p>
                <p>{`Author:${blogs.author}`}</p>
              </>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Blog;
