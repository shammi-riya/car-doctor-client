import React from 'react';
import img1 from '../../../assets/assets/images/banner/1.jpg'
import img2 from '../../../assets/assets/images/banner/2.jpg'
import img3 from '../../../assets/assets/images/banner/3.jpg'
import img4 from '../../../assets/assets/images/banner/4.jpg'
import img5 from '../../../assets/assets/images/banner/5.jpg'
import img6 from '../../../assets/assets/images/banner/6.jpg'

const Bannar = () => {
    return (
        <div className="carousel w-full  h-[85vh]">
  <div id="slide1" className="carousel-item relative w-full ">

    <img src={img1} className="w-full" />
    
   <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
   <div className='absolute top-1/3 left-14 text-white w-1/3 space-y-3'>
       <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
       <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className='py-2 text-xl px-4 border-2 border-l-gray-50'>Discover More</button>
       <button className='py-2 text-xl ml-3 px-4 border-0 bg-[#FF3811]'>Latest Pojects</button>
    </div>
    <div className=" absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide6" className="btn btn-circle ">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-600 border-0  ml-2">❯</a>
    </div>
   </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
   <div className='absolute top-1/3 left-14 text-white w-1/3 space-y-3'>
       <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
       <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className='py-2 text-xl px-4 border-2 border-l-gray-50'>Discover More</button>
       <button className='py-2 text-xl ml-3 px-4 border-0 bg-[#FF3811]'>Latest Pojects</button>
    </div>
    <div className=" absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide1" className="btn btn-circle ">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-red-600 border-0  ml-2">❯</a>
    </div>
   </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
   <div className='absolute top-1/3 left-14 text-white w-1/3 space-y-3'>
       <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
       <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className='py-2 text-xl px-4 border-2 border-l-gray-50'>Discover More</button>
       <button className='py-2 text-xl ml-3 px-4 border-0 bg-[#FF3811]'>Latest Pojects</button>
    </div>
    <div className=" absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide3" className="btn btn-circle ">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-red-600 border-0  ml-2">❯</a>
    </div>
   </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
   <div className='absolute top-1/3 left-14 text-white w-1/3 space-y-3'>
       <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
       <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className='py-2 text-xl px-4 border-2 border-l-gray-50'>Discover More</button>
       <button className='py-2 text-xl ml-3 px-4 border-0 bg-[#FF3811]'>Latest Pojects</button>
    </div>
    <div className=" absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide4" className="btn btn-circle ">❮</a> 
      <a href="#slide6" className="btn btn-circle bg-red-600 border-0  ml-2">❯</a>
    </div>
   </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
   <div className='absolute top-1/3 left-14 text-white w-1/3 space-y-3'>
       <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
       <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className='py-2 text-xl px-4 border-2 border-l-gray-50'>Discover More</button>
       <button className='py-2 text-xl ml-3 px-4 border-0 bg-[#FF3811]'>Latest Pojects</button>
    </div>
    <div className=" absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide4" className="btn btn-circle ">❮</a> 
      <a href="#slide6" className="btn btn-circle bg-red-600 border-0  ml-2">❯</a>
    </div>
   </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full" />
    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
   <div className='absolute top-1/3 left-14 text-white w-1/3 space-y-3'>
       <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
       <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className='py-2 text-xl px-4 border-2 border-l-gray-50'>Discover More</button>
       <button className='py-2 text-xl ml-3 px-4 border-0 bg-[#FF3811]'>Latest Pojects</button>
    </div>
    <div className=" absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide6" className="btn btn-circle ">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-600 border-0  ml-2">❯</a>
    </div>
   </div>
  </div>
</div>
    );
};

export default Bannar;