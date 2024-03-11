import React from 'react'
import List from './List'

// Remove these lines if not used
// import { useEffect, useState } from "react";
// import { fetchData } from "../api/Api";



const Banner = ({ title, param }) => {
  // const [list, setList] = useState([]);
 

 
  return (
    <>
      <div className="banner_container">
        <div className="banner_wrap">
          <div className="banner_content">
            {/* {data && data.map(item => (
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />
            ),
            )} */}
            <h1>Ginny & Georgia{title}</h1>
            <div className="banner_btn">
              <button>Play</button>
              <button>My List</button>
            </div>
            <div className="banner_dis">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolorum maiores repudiandae recusandae iusto labore veniam provident ipsa modi laboriosam.

              </p>
            </div>

          </div>
        </div>
        <div className="banner_list">
          <List />
        </div>
      </div>

    </>
  )
}

export default Banner
