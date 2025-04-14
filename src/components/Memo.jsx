import React, { useMemo, useState } from "react";
import factorial from "../Utils/PrimeNum";
import { useNavigate } from "react-router-dom";

const Memo = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const [num, setNum] = useState(0);

  // Learning the use of useMemo() hook

  const cachedValue = useMemo(() => factorial(num), [num]);
  //  const findFactorial = factorial(num)
  console.log("Factorial Rendered");

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/ref");
  };

  return (
    <div
      className={`max-w-4xl mx-auto border border-gray-700 mt-10 ${
        theme === false ? "bg-black text-white" : "text-black bg-white"
      } `}
    >
      <button
        onClick={handleTheme}
        className="px-5 py-2 bg-blue-700 text-white rounded-sm m-2"
      >
        Toggle
      </button>
      <h1 className="font-bold text-xl m-2">factorial Program</h1>
      <div className="mx-2 my-3">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="border border-gray-700 text-black"
        />
      </div>
      <div className="flex justify-between mx-2 my-2">
        <h1>UseMemo hook -: {cachedValue}</h1>
        <button
          onClick={handleNavigate}
          className="px-5 py-2 bg-blue-700 text-white rounded-sm"
        >
          Go to Ref
        </button>
      </div>
    </div>
  );
};

export default Memo;
