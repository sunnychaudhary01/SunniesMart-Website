import React, { useEffect, useState } from 'react'
import Preloader from './Preloader';
import { Link } from 'react-router-dom';


const SignIn = ({cart}) => {
const [loading, setLoading] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle sign in logic here
  console.log('Email:', email);
  console.log('Password:', password);
};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);


  return (
    <>
      {loading && <Preloader />}
      <div className='h-full w-full'>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-[#639fff] rounded-md hover:bg-black focus:outline-none "
            >
              Sign In
            </button>
          </div>
          <div className='h-[20px] w-full' >
         <Link to='/signup' > <p className='text-[17px] hover:text-[#639fff] cursor-pointer '>Create an account</p></Link>
          </div>
        </form>
      </div>
    </div>
      </div>
    </>
  )
}

export default SignIn