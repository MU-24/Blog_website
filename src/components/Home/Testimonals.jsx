import React from "react";
import img1 from "../../assets/images/a1.jpeg"
const Testimonals = () => {
  return (
    <div className="bg-[#6268F5] pt-14 pb-32">
      <div className="flex flex-col items-center">
        <h2 className=" text-white text-xl mb-6 font-semibold">Testimonals</h2>
        <div className="flex justify-center flex-wrap items-center gap-5">
          <div className=" w-[220px] bg-white pb-4 rounded-xl">
            <img src={img1} alt="" className=" rounded-xl" />
            <h4 className="font-bold ml-2 mt-1">Mr Khan</h4>
            <p className=" text-[#565656] text-xs ml-2 mt-2">
              Best Blog Website for Reading Blogs
            </p>
          </div>
          <div className=" w-[220px] bg-white pb-4 rounded-xl">
            <img src={img1} alt="" className=" rounded-xl" />
            <h4 className="font-bold ml-2 mt-1">Mr Khan</h4>
            <p className=" text-[#565656] text-xs ml-2 mt-2">
              Best Blog Website for Reading Blogs
            </p>
          </div>
          <div className=" w-[220px] bg-white pb-4 rounded-xl">
            <img src={img1} alt="" className=" rounded-xl" />
            <h4 className="font-bold ml-2 mt-1">Mr Khan</h4>
            <p className=" text-[#565656] text-xs ml-2 mt-2">
              Best Blog Website for Reading Blogs
            </p>
          </div>
        </div>
        <button className="text-[#6268F5] bg-white mt-6 px-6 rounded py-1 font-semibold text-sm">
          More News
        </button>
      </div>
    </div>
  );
};

export default Testimonals;
