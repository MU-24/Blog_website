import React from "react";
import img1 from "./../../assets/images/b.jpeg";

const TrendingBlog = () => {
  return (
    <div className=" mt-36">
      <div className="flex flex-col mt-10 items-center">
        <h2 className=" text-xl font-bold">Trending on BlogDev</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
          <div className="flex gap-2 w-72 md:mt-5 md:mr-10">
            <div className=" text-black opacity-50 font-bold text-xl">01</div>
            <div>
              <h4>Alex Klein in UX Collective</h4>
              <h4 className=" font-semibold">
                Prompts should be designed — not engineered
              </h4>
              <h4>Apr 2, 2024 6 min read</h4>
            </div>
          </div>
          <div className="flex gap-2 w-72 mt-5 md:ml-10">
            <div className=" text-black opacity-50 font-bold text-xl">01</div>
            <div>
              <h4>Alex Klein in UX Collective</h4>
              <h4 className=" font-semibold">
                Prompts should be designed — not engineered
              </h4>
              <h4>Apr 2, 2024 6 min read</h4>
            </div>
          </div>
          <div className="flex gap-2 w-72 mt-5 md:mt-10 md:mr-10">
            <div className=" text-black opacity-50 font-bold text-xl">01</div>
            <div>
              <h4>Alex Klein in UX Collective</h4>
              <h4 className=" font-semibold">
                Prompts should be designed — not engineered
              </h4>
              <h4>Apr 2, 2024 6 min read</h4>
            </div>
          </div>
          <div className="flex gap-2 w-72 mt-5 md:mt-10 md:ml-10">
            <div className=" text-black opacity-50 font-bold text-xl">01</div>
            <div>
              <h4>Alex Klein in UX Collective</h4>
              <h4 className=" font-semibold">
                Prompts should be designed — not engineered
              </h4>
              <h4>Apr 2, 2024 6 min read</h4>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-32 mx-5">
        <div>
          <img src={img1} alt="" className=" md:w-72" />
        </div>
        <div className=" flex flex-col justify-center items-center font-bold w-72 ml-10">
          <div>
            <h3 className="text-xl text-[#212529] ">
              Short And Informative Blogs
            </h3>
            <p className=" text-sm mt-2">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>
          <button className="  bg-[#6268F5] rounded text-xs p-1 text-white mt-2 w-32">
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingBlog;
