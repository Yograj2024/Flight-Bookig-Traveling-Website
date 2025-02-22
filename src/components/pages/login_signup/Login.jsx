import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const updateState = (e, state) => {
        e.preventDefault();
        state(e.target.value)
    }

    const handalLogin = (e) => {
        e.preventDefault();
        const {userEmail:storeEmail, userPassword:storePassword} = JSON.parse(localStorage.getItem("useryograj"));

        if(password != storePassword || email != storeEmail){
            alert("password or email are wrong");
            return;
        }

        alert("Welcome");
        navigate("/sign-up");
    }

  return (
    <section>
      <div className="flex h-screen bg-[url('https://thumbs.dreamstime.com/b/serene-mountain-lake-red-boat-rests-surface-still-surrounded-towering-peaks-clear-blue-sky-reflection-342521193.jpg')] bg-cover bg-center items-center justify-center">
        <div className="bg-white flex rounded-2xl overflow-hidden shadow-lg w-3/4 max-w-4xl">

            <div className="w-1/2 relative hidden md:block">
            <img
                src="https://thumbs.dreamstime.com/b/serene-mountain-lake-red-boat-rests-surface-still-surrounded-towering-peaks-clear-blue-sky-reflection-342521193.jpg"
                alt="Travel"
                className="h-full w-full object-cover"/>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                <h2 className="text-3xl font-bold">Wispy Deals</h2>
                <p className="mt-2 text-center px-4">
                Travel is the only purchase that enriches you in ways beyond material wealth
                </p>
            </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
            <h2 className="text-3xl font-semibold text-blue-600 text-center">Welcome</h2>
            <p className="text-gray-500 text-center mb-6">Login with Email</p>
            
            <form>
                <div className="mb-4">
                    <label className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={ (e) => updateState(e, setEmail)}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600">Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        onChange={ (e) => updateState(e, setPassword)} />
                    </div>
                <div className="flex justify-end items-center mb-4">
                <Link to="" className="text-sm text-blue-500 hover:underline">
                    Forgot your password?
                </Link>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" onClick={ (e) => handalLogin(e)}>
                Login
                </button>
            </form>

            <div className="text-center mt-4">OR</div>
            <p className="text-center mt-6 text-gray-600">
                Don't have an account? <Link to='/sign-up' href="#" className="text-blue-500 hover:underline">Register Now</Link>
            </p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Login;
