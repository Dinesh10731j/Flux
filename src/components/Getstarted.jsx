import React, { useEffect, useState, } from 'react';
import "../../stylesheet/Getstarted.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Getstarted = () => {
    const navigate = useNavigate();
    const [blog,setBlog] = useState({categories:"Finance"});
    

    const handleBlog = async ()=>{
        try{
           const response =  await axios.post("https://fluxs.onrender.com/getstarted",blog);
         if(!response){
            toast.error(response.data.msg)
         }else{
            setTimeout(()=>{
                navigate("/blog");
            },1000);

            toast.success('Blog posted successfully',);
         }

        }catch(err){
            toast.error('Eror while posting blog',err)
        }
     

    }

    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setBlog((previous)=>({
            ...previous,[name]:value
        }
            
        ));

   

    

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleBlog();
      

    }
  return (
   <>
   <section className='getstarted'>
   <ToastContainer/>
   <form onSubmit={handleSubmit}>
    <section className='blogtitle'>
    
    <h1>Enter blog title</h1>
        <input type='text' placeholder='Enter blog title' onChange={handleChange} name='title' required={true}/>
       
    </section>
    <section className='blogcategory'>
    <h1>Select blog category</h1>
    <select id="categories" name='categories' onChange={handleChange} required={true}>
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
    </section>

    <section className='writeblog'>
    <h1>Write Blog</h1>
        <textarea placeholder='Write blog....' onChange={handleChange} name='blog' required={true}>

        </textarea>
    </section>
    <section className='authorname'>
    <h1>Author</h1>
    <input type='text' placeholder='Enter author name' onChange={handleChange} name='author' required={true}/>

    </section>
    <section className='submit-btn'>
        <input type='submit' value="Submit"/>
    </section>
    </form>
    
   </section>

   </>
  )
}

export default Getstarted