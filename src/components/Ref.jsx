import React, { useRef, useState } from "react";

const Ref = () => {
  const [y, setY] = useState(0)
  let x = 0;

  const ref = useRef(0) // It returns an object {current=0}

  return (
    <div
      className={`max-w-4xl mx-auto border border-gray-700 mt-10`}
    >
      <h1 className="font-bold text-xl m-2">Normal Variable - : {x}</h1>
      <button
        onClick={() => {
          x = x + 1;
          console.log("x = ", x);
        }}
        className="px-5 py-2 bg-blue-700 text-white rounded-sm m-2"
      >
        Increase X -: {x}
      </button>

      <h1 className="font-bold text-xl m-2">UseState Variable - : {y}</h1>
      <button
        onClick={() => setY( y + 1)}
        className="px-5 py-2 bg-blue-700 text-white rounded-sm m-2"
      >
        Increase Y -: {y}
      </button>

      <h1 className="font-bold text-xl m-2">Ref Variable - : {ref.current}</h1>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log(ref.current)
        }}
        className="px-5 py-2 bg-blue-700 text-white rounded-sm m-2"
      >
        Increase Ref -: {ref.current}
      </button>
    </div>
  );
};

export default Ref;
