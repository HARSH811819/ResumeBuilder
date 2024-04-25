import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ThemeBadge({ src, to = "/", name }) {
  const navigate = useNavigate();
  const buildResume = () => {
    let loader = document.getElementById("loadingscreen")
    loader.style.display = "flex"
   
    setTimeout(() => {
      
      loader.style.display = "none";
      setTimeout(() => {
        
        navigate(to)
      }, 200);
      
      
    }, 3000);
  };
  return (
    // <Link className="themeBadgeLink mx-3 my-1">
      <button
        onClick={buildResume}
        className=" themeBadge w-[140px] h-[200px] rounded-xl m-5 hover:shadow-xl hover:w-[143px] hover:h-[202 px]  transition-all shadow-blue-800 overflow-hidden border-[3px] border-[brown] bg-gray-400"
      >
        <div className={`w-full h-[100%] bg-gray-500 overflow-hidden`}>
          <img src={src} className=" h-full w-full" />
        </div>
        <div className="flex justify-center relative bottom-[30px] left-1 items-center">
          <h1 className="text-white font-bold">{name}</h1>
        </div>
      </button>
    // </Link>
  );
}

/* HTML: <div class="loader"></div> */

export default ThemeBadge;
