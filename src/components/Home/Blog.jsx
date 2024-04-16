import React from "react";
import bg from "../../assets/images/c.jpeg"

const Blog = () => {
  return (
    <div className=" flex justify-center items-center ">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover bg-center w-3/5 md:h-64 mb-20 rounded-lg"
      >
        <div className=" w-full h-full bg-[#6268F5] bg-opacity-70 rounded-lg">
          <div className="flex flex-col justify-center items-center text-center mx-5 pb-4 md:mx-20">
            <h2 className="text-white text-3xl mt-5">Blogs </h2>
            <h4 className="text-xl my-5">Our Best Blog Related to Technology</h4>
            <p className=" text-white text-xs">
              Our employees are our number one asset. Our goal is to recruit the
              best candidates in the industry and retain them for a long,
              progressive career. HBK is a fast-paced, team-centered environment
              with unlimited growth potential. Our long list of established
              clients provides employees with the opportunity to work on dynamic
              and challenging projects every day. We offer an exciting and
              gainful work environment encouraging professional, personal and
              organizational growth. Our team of multi-talented employees
              contributes to an entrepreneurial-minded atmosphere where ideas,
              creativity and solutions are cultivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
