import  { useEffect, useState } from 'react';
import SurvicesCard from './SurvicesCard';

const Survice = () => {

    const [survicec,setSurvices]= useState([])


    useEffect(()=>{
      fetch("http://localhost:5000/Survices")
      .then(res=>res.json())
      .then(data=>setSurvices(data));
    },[])




    return (
       <div className='my-6'>
        <div className='text-center space-y-2'>
            <h3 className='font-semibold text-red-400 text-xl'>Surcice</h3>
            < h1 className='text-3xl font-bold'>Our Survice Area</h1>
            <p >the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
        </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
            
            {
                survicec.map(survice=>
                <SurvicesCard
                key={survice._id}
                survice={survice}
                
                ></SurvicesCard>)
            }
        </div>
       </div>
    );
};

export default Survice;
