import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="bg-[#090909] rounded-md flex justify-center items-center">
      <div className="text-white font-bold py-2 px-4 text-lg">D-Blog</div>
    </div>
  );
}

export default Logo;
