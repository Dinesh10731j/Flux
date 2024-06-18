import React from 'react';
import "../../stylesheet/Getstarted.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';

const postBlog = async (blog) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage

  const response = await axios.post("https://fluxs.onrender.com/getstarted", blog, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

const Getstarted = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      categories: "Finance"
    }
  });

  const mutation = useMutation(postBlog, {
    onSuccess: (data) => {
     

      localStorage.setItem('token', data.token);

      toast.success('Blog posted successfully');
      setTimeout(() => {
        navigate("/blog");
      }, 1000);
    },
    onError: (error) => {
  
      toast.error('Error while posting blog');
    }
  });

  const onSubmit = (data) => {

    mutation.mutate(data);
  };

  return (
    <>
      <section className='getstarted'>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className='blogtitle'>
            <h1>Enter blog title</h1>
            <input
              type='text'
              placeholder='Enter blog title'
              {...register('title', { required: true })}
            />
            {errors.title && <h4 style={{ color: 'tomato' }}>This field is required</h4>}
          </section>
          <section className='blogcategory'>
            <h1>Select blog category</h1>
            <select id="categories" {...register('categories', { required: true })}>
              <option value="Finance">Finance</option>
              <option value="Photography">Photography</option>
              <option value="Beauty & Makeup">Beauty & Makeup</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Fashion">Fashion</option>
              <option value="Health & Fitness">Health & Fitness</option>
              <option value="Nature">Nature</option>
              <option value="Profile">Profile</option>
            </select>
            {errors.categories && <h4 style={{ color: 'tomato' }}>This field is required</h4>}
          </section>
          <section className='writeblog'>
            <h1>Write Blog</h1>
            <textarea
              placeholder='Write blog....'
              {...register('blog', { required: true })}
            />
            {errors.blog && <h4 style={{ color: 'tomato' }}>This field is required</h4>}
          </section>
          <section className='authorname'>
            <h1>Author</h1>
            <input
              type='text'
              placeholder='Enter author name'
              {...register('author', { required: true })}
            />
            {errors.author && <h4 style={{ color: 'tomato' }}>This field is required</h4>}
          </section>
          <section className='submit-btn'>
            <input type='submit' value="Submit" />
          </section>
        </form>
      </section>
    </>
  );
}

export default Getstarted;
