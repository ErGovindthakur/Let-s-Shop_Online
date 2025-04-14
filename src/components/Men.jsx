import React, { useState } from "react";
import Accordion from "./Accordion";

const Men = () => {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Filter Options</h1>
      {["Brand", "Men", "Women", "Boys", "Kids", "Girls"].map(
        (title, index) => {
          return (
          // This below Accordion is a controlled component
          <Accordion 
          key={index} 
          title={title} 
          open={index === open ? true : false}
          setOpen={()=>setOpen(index)}
          />
          )
        }
      )}
    </div>
  );
};

export default Men;
