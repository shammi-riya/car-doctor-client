// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
  const {sighinIn} = useContext(AuthContext)
  const location = useLocation();  
   const navigate = useNavigate();
   const from = location?.state?.pathname || '/'

    const handleSighinIn = (e)=>{
    e.preventDefault()
    const form = e.target;
  
    const email = form.email.value
   
    const password = form.password.value;
    console.log(email,password);
  


    
    sighinIn(email,password)
    .then((result) => {
      // Signed in 
      const user = result.user;
      const logdUser ={
        email:user.email
      }

      console.log(logdUser);

      fetch("http://localhost:5000/jwt",{
        method:"POST",
        headers:{
            "content-type" :"application/json"
        },
        body:JSON.stringify(logdUser)
      })
      .then(res=>res.json())
      .then(data=>{
        localStorage.setItem("Access-car-doctors-token",data.token)
        navigate(from ,{replace:true})
      })



       
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ..
    });
}


    return (
        <div className="hero min-h-screen w-full bg-base-200">
            <div className="hero-content flex-col gap-5 lg:flex-row">
                <div className=" w-1/2 mr-10">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-sm bg-base-100">

                    <form onSubmit={handleSighinIn} className="card-body">
                        <h3 className='text-center text-2xl font-bold'>Sighin In</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                            name='email'
                                placeholder="email"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                            name='password'
                                placeholder="password"
                                className="input input-bordered" />

                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className='py-2 text-xl text-white px-4 border-0 bg-[#FF3811] w-full'>Login</button>

                        </div>

                        <p>Yor are new to website please <Link to="/sighinup">Sighinup</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
