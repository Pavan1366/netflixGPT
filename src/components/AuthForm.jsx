import { useState } from "react";

const AuthForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(()=>!isSignIn);
    }
    return (
        <form className="absolute h-3/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col bg-black bg-opacity-70 p-4 rounded-md w-3/12 min-h-2/4 justify-center items-center">
            <h1 className="text-white text-2xl font-bold mb-4 leading-tight">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input type="text" placeholder="Username" className="p-2 m-2 w-full bg-gray-600 text-white placeholder:text-gray-400 rounded-md" />}
            <input type="email" placeholder="Email" className="p-2 m-2 w-full bg-gray-600 text-white placeholder:text-gray-400 rounded-md" />
            <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-600 text-white placeholder:text-gray-400 rounded-md" />
            {!isSignIn && <input type="password" placeholder="Confirm Password" className="p-2 m-2 w-full bg-gray-600 text-white placeholder:text-gray-400 rounded-md" />}
            <button className="bg-red-600 text-white p-2 m-2 rounded-md w-full">{isSignIn ? "Login" : "Sign Up"}</button>
            <p className="text-white text-sm m-2">{isSignIn ? "New to Netflix?" : "Already have an account?"} <span className="text-blue-600 cursor-pointer" onClick={toggleSignIn}>
                {isSignIn ? "Sign up now" : "Sign in now"}
            </span></p>
        </form>
    )
}

export default AuthForm;