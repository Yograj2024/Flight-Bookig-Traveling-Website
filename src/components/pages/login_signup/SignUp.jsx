import React, { useState } from 'react'

const SignUp = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const updateFormValue = (e,state) => {
        e.preventDefault();
        state(e.target.value);
    }

    const restFields = () => {
        setUserName("")
        setUserEmail("")
        setUserPassword("")
    }

    const handalSignUp = (e) => {
        e.preventDefault();
        if(userEmail.trim() == "" || userName.trim() == "" || userPassword.trim() == ""){
            alert("please fill all info");
            return;
        }
        const userSignDetail = {
            userName:userName,
            userEmail:userEmail,
            userPassword:userPassword
        }
        localStorage.setItem(`user${userName}`, JSON.stringify(userSignDetail))
        alert("SignUp Successfully...");
        restFields();
    };

  return(
    <section className="flex items-center justify-center h-screen bg-cover bg-center" 
    style={{backgroundImage:"url('https://img.freepik.com/premium-vector/purple-blue-background-with-swirly-pattern-number-4_853605-16.jpg')"}}>

            <div className="relative flex w-[900px] gap-x-[20px] h-[500px] rounded-xl overflow-hidden ">
                <div className="w-1/2 bg-cover bg-center relative flex flex-col justify-center p-10 text-white" >
                    <div className="absolute inset-0 "></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold">EXPLORE HORIZONS</h2>
                        <p className="mt-2 text-lg">Where Your Dream Destinations Become Reality.</p>
                        <p className="mt-1 text-sm">Embark on a journey where every corner of the world is within your reach.</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center bg-gray-100 bg-opacity-20 px-8  rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-black">Sign Up</h3>
                    <form className="mt-4">
                        <label className="block text-black ml-[15px] mb-[10px] mt-[20px]">Name</label>
                        <input value={userName} type="name" placeholder="Enter your name" className="w-full p-2 mt-1 border rounded-md bg-white bg-opacity-60 backdrop-blur-md focus:ring focus:ring-blue-300 mb-[10px] h-[35px] " onChange={ (e) => updateFormValue(e, setUserName) }/>
                        <label className="block text-black  ml-[15px] mb-[10px] mt-[20px]">Email</label>
                        <input value={userEmail} type="email" placeholder="Enter your email" className="w-full p-2 mt-1 border rounded-md bg-white bg-opacity-60 backdrop-blur-md focus:ring focus:ring-blue-300 h-[35px]" onChange={ (e) => updateFormValue(e, setUserEmail) }/>
                        <label className="block text-black  ml-[15px] mb-[10px] mt-[20px]">Password</label>
                        <input value={userPassword} type="password" placeholder="********" className=" h-[35px] w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" onChange={ (e) => updateFormValue(e, setUserPassword) } />
                        <div className="flex justify-end items-center mt-2 text-sm">
                            <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>
                        </div>
                        <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 h-[38px]" onClick={(e) => handalSignUp(e)}>Sign Up</button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">or</p>
                        <button className="w-full flex items-center justify-center mt-2 bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                            <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className="w-5 h-5 mr-2"/>Sign up with Google
                        </button>
                        <p className="mt-4 text-gray-600">Are you new? <a href="#" className="text-blue-500 hover:underline">Create an Account</a></p>
                    </div>
                </div>
            </div>
      
    </section>
  )
};

export default SignUp;
