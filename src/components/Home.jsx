import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../Resume.gif";

function Home() {
  const navigate = useNavigate();
  const createResume = () => {
    navigate("/form");
  };
  return (
    <div className="Home ">
      <div className=" banerImage rounded-e-2xl overflow-hidden shadow-2xl   ">
        <img src={image} className="h-full w-full" alt="" />
      </div>
      <div className="createBTN">
        <button onClick={createResume} className="createBtn w-[130px] text-xl h-[130px] bg-[rgb(69,75,103)] hover:bg-[#03a679] font-bold
         text-white rounded-xl">Create</button>
      </div>
    </div>
  );
}
// bg-[rgba(244,182,62)]

export default Home;
