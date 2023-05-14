// import React from 'react';
import person from '../../../assets/assets/images/about_us/person.jpg'
import pars from '../../../assets/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="flex lg:flex-row md:flex-row-reverse justify-between">
    
  <div className='lg:w-1/3 ml-4 relative'>
  <img src={person} alt="" />
   <img className='absolute  top-1/3 left-1/3 border-8 border-white' src={pars} alt="" />
  </div>

  <div className="text-center lg:text-left w-1/2 space-y-4">
        <h4 className='text-red-400 text-xl'>About Us</h4>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
     <div className='mt-3'>
     <button className='py-2 text-2xl text-white px-4 border-0 bg-[#FF3811]'>get more info </button>
     </div>
    </div>
  </div>
</div>
    );
};

export default About;