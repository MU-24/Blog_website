import React from "react";
 
const Footer = () => {
  return (
    <div className="bg-[#1E1E28] w-auto pt-16 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-28 pb-20 border-b mb-3">
        <div className=" md:w-2/5 md:mr-10">
          <h2 className=" text-4xl text-white font-bold">
            Our application is beyond the wave
          </h2>
          <p className="text-[#D8D8D8]  font-semibold  text-xs w-4/5 mt-3">
            Designed to make it easy for developers using a complex API allows
            you to build innovative solutions
          </p>
          <h4 className=" text-white mt-10 font-bold">BLOG DEV</h4>
          <p className=" text-white mt-5 text-xs w-4/5 font-semibold">
            Comply with Zatca's e-invoicing mandate for transparent operations.
            Following government rules and laws (compliance) is crucial. It
            ensures smooth business practices, avoiding tax-related troubles.
            Stay compliant with us!
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 text-[#c5c4cd] text-xs gap-8 mt-20 ">
          <div className="flex flex-col gap-1">
            <h5 className=" text-white font-bold">Complyance.io</h5>
            <p>Home</p>
            <p>Product</p>
            <p>What's New</p>
            <p> Pricing</p>
            <p>Business</p>
            <p>Enterprise</p>
            <p>Customer Success</p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className=" text-white font-bold">About</h5>
            <p>Company</p>
            <p>Customers</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Blog</p>
            <p>Sitemap</p>
            <p>Pricing FAQ </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className=" text-white font-bold">Resourse</h5>
            <p>Help Center</p>
            <p>Forum</p>
            <p>Support</p>
            <p> Developers & API</p>
            <p>Partners</p>
            <p>Events</p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className=" text-white font-bold">Learn</h5>
            <p>ZATCA E-Invoicing</p>
            <p>ERP Integration</p>
            <p>ERP Implementation</p>
            <p>ERP Customisation</p>
            <p>QR Code Generation</p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className=" text-white font-bold">Workflow Solutions</h5>
            <p>Phase-1</p>
            <p>Phase-2</p>
            <p>Booklet</p>
   
          </div>
        </div>
      </div>
      <div className="text-white flex gap-8 md:justify-between md:mx-20 md:ml-40 text-xs">
        <div className="  flex ml-7  gap-1 md:ml-36 md:gap-8">
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
          <p>Support</p>
        </div>
        <div className=" md:mr-10">
          <p className=" text-[10px]">Copyright 2023 @ compylance.io </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
