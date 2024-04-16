import React from "react";
import img1 from "./../../assets/images/react.jpeg";
import img2 from "./../../assets/images/db.jpeg";

const BestBlogs = () => {
  return (
    <div className=" my-36 bg-[#3F9AFF] bg-opacity-5">
      <div className="flex flex-col justify-center items-center">
        <h2 className=" text-xl font-bold mb-5">Best Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="bg-cover bg-center w-64 md:w-56 lg:w-64 h-48 flex flex-col justify-end"
          >
            <h5 className=" bg-black bg-opacity-65 text-white  w-full text-center py-2">
              ReactJs
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center py-2">
              MongoDB
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center py-2">
              ReactJs
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center py-2">
              ReactJs
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center py-2">
              MongoDB
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center py-2">
              MongoDB
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center py-2">
              ReactJs
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center py-2">
              MongoDB
            </h5>
          </div>
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="bg-cover bg-center w-64 md:w-56  lg:w-64 h-48 flex flex-col justify-end"
          >
            {" "}
            <h5 className=" bg-black bg-opacity-65 text-white w-full text-center  py-2">
              ReactJs
            </h5>
          </div>
        </div>
        <div>
          <button className="bg-[#6268F5] text-white px-6 py-1 font-semibold rounded mt-4">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestBlogs;
