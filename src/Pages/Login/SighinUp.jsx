// import React from 'react';
import { useContext } from 'react';
import loginImg from '../../assets/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const SighinUp = () => {

 const {createUser} = useContext(AuthContext)

  const handleSighinUp = (e) =>{
    e.preventDefault()
  const form = e.target;

  const email = form.email.value
  const confrim = form.confrim.value
  const password = form.password.value;
  console.log(email,confrim,password);

  createUser(email,password)
  .then((result) => {
    // Signed in 
    const user = result.user;
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
               
                <form onSubmit={handleSighinUp}  className="card-body">
                <h3 className='text-center text-2xl font-bold'>Sighin Up</h3>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">confirm Password</span>
                        </label>
                        <input type="password"
                        name='confrim'
                            placeholder="confrim password"
                            className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className='py-2 text-xl text-white px-4 border-0 bg-[#FF3811] w-full'>Sighin Up</button>

                    </div>

                    <p>You have already an acoount please <Link to="/login">Login</Link></p>

                
                </form>
            </div>
        </div>
    </div>
    );
};

export default SighinUp;