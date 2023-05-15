// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "./BookingCard";
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const {users} = useContext(AuthContext);
    const [bokkings,setBookings] = useState([])
    const navigate = useNavigate()

    const url = `http://localhost:5000/bookings?email=${users.email}`;


    useEffect(()=>{
      fetch(url,{
        method:"GET",
        headers:{
          authorization:`Bearer ${localStorage.getItem("Access-car-doctors-token")}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
      
        if(!data.error){
          setBookings(data)
        }else{
          navigate("/")
        }
        })
    },[url,navigate] )

    
  const handleDelete = (id)=>{
       fetch(`http://localhost:5000/bookings/${id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.deletedCount>0){
            alert("delete successfully")
        }
        const remaining = bokkings.filter(boking=>boking._id !== id);
        setBookings(remaining);
        console.log(data)
       })
  }


  const handleUpdateStutus = (id) =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
     method:"PATCH",
     headers:{
      "content-type":"application/json"
     },
     body:JSON.stringify({stutus:"confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount>0){
          // alert("updated")
     
      const remining = bokkings.filter(boking=>boking._id !== id);
      const updated = bokkings.find(boking=>boking._id === id);

      updated.stutus ="confirm";
      const newBooking = [updated , ...remining];
      setBookings(newBooking);
      console.log(data)
    }
    })
  
      
    
  }




    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
        <thead>
      <tr>
        <th>Cross</th>
        <th>Booking Image</th>
        <th>Cutomer Name</th>
        <th>email</th>
        <th>Date</th>
        <th>Stutus</th>
      </tr>
    </thead>
        <tbody>
            {
              bokkings.map(bokking=><BookingCard
              key={bokking._id}
              bokking={bokking}
              handleDelete={handleDelete}
              handleUpdateStutus={handleUpdateStutus}
              ></BookingCard>)  
            }


            
        </tbody>
        </table>
        </div>
    );
};

export default Booking;
