import React from 'react';



const Button = ({ text, backgroundColor,onClick,className,children }) => {

  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`${className} focus:outline-none text-white hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
        style={{background:backgroundColor}}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
