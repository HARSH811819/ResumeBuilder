import React, { useId } from "react";
import { nanoid } from "@reduxjs/toolkit";

function Input({
  id,
  label,
  type,
  placeholder = "",
  className = "",
  ...props
}) {
  return (
    <div id={nanoid()} className=" mx-1  basicField flex my-1  ">
      {
        label &&
        <label
          className=" min-w-fit inline-block px-2 font-bold bg-gray-300 p-1 rounded-s-lg text-sm"
          htmlFor={id}
        >
          {label} 
        </label>
      }
      <input
        
        placeholder={placeholder}
        type={type}
        className={`${className} p-1 w-full basis-[100%] outline-none`}
        onChange={(e) => {
          dispatch(addEmail(e.target.value));
        }}
        {...props}
      />
    </div>
  );
}

export default Input;
