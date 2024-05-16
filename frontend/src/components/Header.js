import axios from 'axios';
import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector,  } from 'react-redux'
import { API_END_POINT } from '../utils/constant.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Header = () => {

  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch;
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      if (res.data.success) {
        toast.success(res.data.message);
      }
      console.log(res);
      dispatch(null)
      navigate("/")
    } catch (error) {
      console.log("Logout error")
      console.log(error)

    }

  }
  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between px-6 py-3 bg-gradient-to-b from-black">
      <img className="w-56 h-11" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" />

      {
        user && (
          <div className="flex items-center">
            <IoIosArrowDropdown size="24px" className="" color='white' />
            <h1 className="text-lg font-medium text-white">{user.fullname}</h1>
            <div className="ml-4">
              <button onClick={logoutHandler}
                className='bg-red-800 text-white px-4 py-2 '>Logout</button>

              <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Header