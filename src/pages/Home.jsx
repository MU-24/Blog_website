import React from 'react'
import dp from "./../assets/images/aa.png"
import TrendingBlog from '../components/Home/TrendingBlog';
import BestBlogs from '../components/Home/BestBlogs';
import Blog from '../components/Home/Blog';
import Testimonals from '../components/Home/Testimonals';
const Home = () => {
  return (
    <div className="mt-24"
    >
      <div className=" flex justify-center items-center mx-5">
        <div className="flex flex-col justify-center gap-3">
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className=" text-4xl md:text-6xl">S</span>tay Curious
          </h2>
          <p className=" font-bold text-start w-52 md:w-80">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className="flex justify-center font-bold rounded-lg py-1 bg-[#6268F5] w-32 text-sm md:w-40">Explore Projects</button>
        </div>
        <div className=''>
          <img src={dp} alt="" className=' md:mt-6'/>
        </div>
      </div>
      <div>
        <TrendingBlog/>
      </div>
      <div>
        <BestBlogs/>
      </div>
      <div>
        <Blog/>
      </div>
      <div>
        <Testimonals/>
      </div>
    </div>
  );
}

export default Home