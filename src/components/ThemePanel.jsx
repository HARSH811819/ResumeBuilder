import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeBadge from "./ThemeBadge";
import gray from './Theme/themeImages/gray.png'
import brown from './Theme/themeImages/brown.png'

function ThemePanel() {
  return (
    <div className=" bg-[rgba(12,19,33,0.7)]   w-[100%] mx-auto min-h-[700px] h-[100vh]  p-5 flex flex-wrap justify-center">

   
    <ThemeBadge to={"/two"} name={"Brown Theme"} src={gray} />
    <ThemeBadge to={"/one"} name={"Gray Theme"} src={brown} />

    </div>
  );
}

export default ThemePanel;
