// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const { sighinIn,siginInGogool } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.pathname || '/'

    const handleSighinIn = (e) => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value

        const password = form.password.value;
        console.log(email, password);




        sighinIn(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
               

                console.log(user);
                navigate(from, { replace: true })

                


                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

const sighinInGoggol = ()=>{
    
    siginInGogool()
    .then(result=>{
        const user = result.user;
        console.log(user);
    }).
    catch(error => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
    
    
})

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

                        <div className="flex flex-col w-full border-opacity-50">
                           
                            <div className="divider">OR</div>
                            
</div>

<div className='flex gap-2  mx-auto'>
<button onClick={sighinInGoggol} className="btn btn-circle btn-outline">
G
</button>
<button className="btn btn-circle btn-outline">
F
</button>
<button className="btn btn-circle btn-outline">
L
</button>
</div>
                        <p>Yor are new to website please <Link to="/sighinup">Sighinup</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
