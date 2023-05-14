import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Survice = () => {

    const surviceData = useLoaderData();

    const {title, price,_id,img} = surviceData;
   const {users}= useContext(AuthContext)

  const handleOrderForm = (e)=>{
    e.preventDefault()

    const name = e.target.name.value;
    const email = users?.email;
    const date = e.target.date.value;
    const message = e.target.message.value;
    

   const Order = {
    email,
    name,
    date,
    message,
    img,
    price,
    survice_id:_id,
    Survice_Title:title

   }

   fetch('http://localhost:5000/bookings', {
    method: 'POST', 
    headers: {
        'content-type': 'application/json'
    }, 
    body: JSON.stringify(Order)
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(data.insertedId){
        alert('service book successfully')
    }
    e.target.reset()
})

}

    
  


    return (
        <div>
            <div className="hero my-5 py-5 bg-base-200">


                <div className="card flex-shrink-0 w-[75%] shadow-sm ">
                    <form onSubmit={handleOrderForm} className="card-body">
                        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-2'>
                            <div className="form-control">
                            <label htmlFor="">name</label>
                                <input type="text" 
                               
                                name='name'
                                 className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label htmlFor="">date</label>
                                <input type="date"
                              
                                 name='date'
                                  className="input input-bordered" />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 my-3'>
                            <div className="form-control">
                            <label htmlFor="">email</label>
                                <input type="email" 
                                name='email'
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                             <label htmlFor="">Dui Ammount</label>
                                <input type="text" 
                                name='price'
                                defaultValue={price}
                                 className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-3">
                        <label htmlFor="">Message</label>
                            <textarea className="textarea textarea-bordered h-28" 
                            name='message'
                           ></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 text-white bg-red-600 hover:bg-red-500 rounded">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Survice;