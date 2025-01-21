import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => (
    <input
        {...props}
        className={`${className || ""} w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150`}
    />
);

export default Input;
