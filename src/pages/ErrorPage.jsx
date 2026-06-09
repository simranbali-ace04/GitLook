import React from "react";

const ErrorPage = ({reset}) => {

  return (
    <div className="font-heading flex flex-col gap-4 items-center justify-center w-1/4 h-96 border-2 rounded-xl border-olive-500 mt-20">
      <h1 className=" font-black text-9xl">404 </h1>
      <h1 className=" font-semibold text-4xl">User Not Available</h1>
      <button className="border-2 text-2xl rounded-2xl px-4 py-2 font-bold mt-5 active:scale-95"
      onClick={reset}>
        Search Again
      </button>
    </div>
  );
};

export default ErrorPage;
