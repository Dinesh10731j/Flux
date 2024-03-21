import React from 'react';
import "../../stylesheet/Footer.css";

const Footer = () => {
  return (
  <footer>
<section className='footerinfo'>
    <section class="contactinfo">
        <p>Address:xyz 80-0-0--00 USA</p>
        <p>Conact:09897977989</p>
        <p>Email:johndoe56@gmail.com</p>
    </section>
    <section className='importantlinks'>
       <p>Search domian</p>
       <p>Find Blogs</p>
       <p>Types of blogs</p>
    </section>
    <section className='NewsLetter'>
        <p>To get latest blog info subscribe</p>
        <form>
            <input type='email' placeholder='Enter Address...'/>
            <input type='submit' value="Submit"/>
        </form>
    </section>
</section>
  </footer>
  )
}

export default Footer