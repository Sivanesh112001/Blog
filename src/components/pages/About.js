import React from 'react'
import '../pages/common.css';
import Image from './blog.jpg';
const About = () => {
  return (
    < div className='blog'>
      <h1>Creation BLoG</h1>
      <div className='about'>
      <img src={Image} alt="discription of Blog" className='blog-image'/>
      <div>
      <h2>
          Creation of Blog
        </h2>
        <p>
        <h3>High-quality blog content</h3><p>The content should demonstrate expertise, authoritativeness, and trustworthiness (EAT). It is also important to use easy-to-understand language and formatting to make the blog post digestible.</p>
<h3>Inviting headlines</h3> <p>These reveal what the content is about and help attract visitors to the content, as around 80% of people will click search engine results if the headlines are compelling.</p>
<h3>Regularly-updated content</h3><p> A regular publishing schedule helps people know when to visit the blog for new content. Search engines also prioritize fresh and up-to-date content, helping increase rankings and website traffic.</p>
<h3>Smooth user experience (UX)</h3> <p>great blogs generally have a seamless page experience as it is an important element in blog search engine optimization (SEO). It includes mobile friendliness, HTTPS, and loading speed – including improving Core Web Vitals</p>
        </p>
        </div>
      </div>
        
    </div>
  )
}

export default About