import React, { useState } from 'react';

export default function Login() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
   function handleSubmit(event){
        event.preventDefault();
   }
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="border border-gray-300 rounded-lg px-15 py-10 mb-8 shadow-md">
        <h1 className='text-center py-5 text-3xl mb-5'>Login</h1>
        <form  onSubmit= {handleSubmit}className="flex flex-col space-y-4 w-64">
          <input
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type='submit' className='text-white bg-blue-400 py-2 px-3 rounded-lg hover:bg-blue-500'>Submit</button>
        </form>
      </div>
    </section>
  );
}
