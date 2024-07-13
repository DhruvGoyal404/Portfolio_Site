// RegisterPage.jsx
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      console.log('User created: ', user.uid);

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: formData.email,
        name: formData.name
      });

      console.log('Document written to Firestore.');

      router.push('/contact');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use.');
      } else {
        setError('Registration failed. Please try again.');
      }
      console.error('Registration error:', error);
      toast.error("Failed to send your message. Please try again.");
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center top-20 pt-2 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-accent">Thankyou for your time!</h2>
      <div className="max-w-md w-full p-8 shadow-lg rounded-lg bg-[#27272c] text-gray-300">
        <h3 className='text-2xl font-bold mb-4 text-center'>Register!</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-200"
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already registered? <span className="text-blue-500 cursor-pointer" onClick={handleLogin}>Login</span></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
