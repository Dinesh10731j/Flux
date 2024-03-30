import React, { useState } from 'react';
import "../../stylesheet/News.css";
import office from "../assets/office.jpg";
import design from "../assets/design.jpg";
import designer from "../assets/success.jpg";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function News() {
  const [loading, setLoading] = useState(true);

  // Simulating loading delay
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <>
      {loading ? (
        <div>
        
          <section className='home_section'>
            <section className='office'>
              <Skeleton height={300} width={300} baseColor='#636e72' />
              <Skeleton height={300} width={300} baseColor='#636e72'/>
              <Skeleton height={300} width={300} baseColor='#636e72'/>
            </section>
            <section className='news'>
              <Skeleton count={3} height={200} width={600} baseColor='#636e72'/>
            </section>
            

            <section className='categories'>
           <Skeleton height={300} width={200} baseColor='#636e72'>
              <section className='inbox'>
                <Skeleton height={50} width={200} baseColor='#636e72' />
                <Skeleton height={50} width={200} baseColor='#636e72' />
                <Link to="/aboutus"><button>Subscribe</button></Link>
              </section>
              </Skeleton>
              <section className='items'>
                <Skeleton count={6} height={40} width={70} baseColor='#636e72'/>
              </section>
              <section className='populartags'>
                <Skeleton count={10} height={20} width={80} baseColor='#636e72'/>
              </section>
            </section>
          </section>
        </div>
      ) : (
        <>
          <h1>Our Fresh News</h1>
          <h4>Stay informed and inspired with our bite-sized articles</h4>
          <section className='home_section'>
            <section className='office'>
              <img src={office} alt='office' />
              <img src={design} alt='design' />
              <img src={designer} alt='designer' />
            </section>
            <section className='news'>
              <h1>Exploring Machine Learning: Understanding the Basics</h1>
              <p>Exploring Machine Learning: Understanding the Basics" is an introductory journey into the fascinating world of machine learning (ML). In this blog post, we embark on a journey to demystify ML concepts for beginners. Starting with the fundamental principles, we delve into the core concepts, such as supervised and unsupervised learning, classification, regression, and clustering. Through clear explanations and relatable examples, readers will gain a solid foundation in ML, understanding its significance in today's technology-driven world and its potential applications across various industries. Whether you're a curious novice or an aspiring data scientist, this blog post serves as a stepping stone towards unlocking the potential of machine learning.,
              </p>
              <h1>Delving into Web Development: Building Scalable Applications</h1>
              <p>"Delving into Web Development: Building Scalable Applications" takes readers on a concise exploration of the intricacies of web development, focusing specifically on the art of crafting scalable applications. This blog post offers insights into the key principles and techniques required to architect robust and adaptable web solutions.Through practical guidance and illustrative examples, it equips developers with the knowledge needed to design and implement web applications capable of handling increasing user loads and evolving business requirements. Whether you're a seasoned developer seeking to enhance your scalability skills or a newcomer eager to understand the essentials of building resilient web systems, this blog post serves as a valuable resource for mastering the art of scalable web development.
              </p>
              <h1>Unveiling the World of Cryptocurrency: A Beginner's Guide</h1>
              <p>
                "Unveiling the World of Cryptocurrency: A Beginner's Guide" offers an accessible introduction to the complex realm of cryptocurrency. This blog post provides newcomers with a comprehensive overview of the fundamental concepts underlying digital currencies, blockchain technology, and decentralized finance. Through clear explanations and real-world examples, readers gain insight into the mechanics of cryptocurrency transactions, the role of cryptographic principles in securing digital assets, and the potential implications of blockchain innovation on traditional financial systems. Whether you're curious about Bitcoin, Ethereum, or other emerging cryptocurrencies, this beginner's guide serves as a stepping stone for understanding the evolving landscape of digital finance.
              </p>
            </section>
            <section className='categories'>
              <section className='inbox'>
                <h1>Courtside in our inbox</h1>
                <p>Get beyond UI blog posts delivered to your email inbox every week</p>
                <Link to="/subscribe"><button>Subscribe</button></Link>
              </section>
              <section className='items'>
                <h2>Categories</h2>
                <ul>
                  <li>Designs</li>
                  <li>Meetups</li>
                  <li>Inspirations</li>
                  <li>Updates</li>
                  <li>Podcast</li>
                  <li>Community</li>
                </ul>
              </section>
              <section className='populartags'>
                <h1>Popular tags</h1>
                <button>Design</button>
                <button>Development</button>
                <button>UX Research</button>
                <button>Frontend Development</button>
                <button>QA Engineering</button>
                <button>Management</button>
                <button>Digital Marketing</button>
              </section>
            </section>
          </section>
        </>
      )}
    </>
  );
}

export default News;
