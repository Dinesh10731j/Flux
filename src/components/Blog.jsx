import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import "../../stylesheet/Blog.css";
import { useQuery } from 'react-query';

const getUserBlog = async () => {
    const response = await axios.get("https://fluxs.onrender.com/blog");
    return response.data.data;
}

const Blog = () => {
  const { isLoading, error, data: blogs } = useQuery('blogs', getUserBlog);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    if (!isLoading) {
      const timer = setTimeout(() => {
        setSkeleton(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className='spinner'>
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={60} aria-label="Loading....." data-testid="loader" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <ScrollToTop smooth color='#3498db' />
      {blogs.map((blog, index) => (
        <div className='cards' data-aos="fade-zoom-in" key={blog.title}>
          {skeleton ? (
            <Skeleton count={5} baseColor='#636e72'/>
          ) : (
            <>
              <h1>{`Title: ${blog.title}`}</h1>
              <h2>{`Category: ${blog.categories}`}</h2>
              <p>{`Blog: ${blog.blog}`}</p>
              <p>{`Author: ${blog.author}`}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;
