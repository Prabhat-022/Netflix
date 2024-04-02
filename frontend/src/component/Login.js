import React, { useState } from 'react'
import Header from './Header'
import { API_END_POINT } from '.././utils/constant'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { setUser, setLoading } from '../redux/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading)



  const loginHandler = () => {
    setIsLogin(!isLogin)
  }

  const getInputData = async (e) => {

    e.preventDefault();
    console.log(fullname, email, password);
    dispatch(setLoading(true));
    if (isLogin) {
      //login
      const user = { email, password };

      try {
        const res = await axios.post(`${API_END_POINT}`, user, {
          headers: {
            'content-type': 'application/josn'
          },
          withCredentials: true
        })
        console.log(res)


        if (res.data.success) {
          toast.success(res.data.message)
        }
        dispatch(setUser(res.data.user))
        nevigate("/browse");
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));

      }

    }
    else {
      //register
      const user = { fullname, email, password }
      dispatch(setLoading(true));


      try {
        const res = await axios.post(`${API_END_POINT}`, user, {
          headers: {
            'content-type': 'application/josn'
          },
          withCredentials: true
        })
        console.log(res);

        if (res.data.success) {
          toast.success(res.data.message)
        }
        setIsLogin(true)
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));

      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (

    <div>
      <Header />
      <div className=" absolute">
        <img className="w-[100vw] h-[100vh] bg-cover" src="https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?width=1080&crop=smart&auto=webp&s=5ec8b5f14222e27eecd19b9f5428793bcc857b58" alt="" />
      </div>

      <form onSubmit={getInputData} action="" className=" flex flex-col w-3/12 p-12 m-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black ">
        <h1 className="text-3xl text-white mb-5 font-bold">{isLogin ? "Login" : "Singup"}</h1>
        <div className=" flex flex-col">
          {
            !isLogin &&
            <input type="text" value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder='fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          }

          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

          <button onClick={loginHandler} className='bg-red-800 text-white px-4 py-2 my-2'>{`${isLoading ? "loading..." : (isLogin ? "Login" : "Singup")}`}</button>

          <p className='text-white'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-2  text-blue-900 font-medium cursor-pointer'>{isLogin ? "Singup" : "Login"}</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login