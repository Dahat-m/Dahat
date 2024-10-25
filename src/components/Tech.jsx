import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 border-2 py-5 border-white rounded-3xl ">
      {technologies.map((technology) => (
        <div className='hover:scale-105 shadow-lg transition-all bg-white' style={{borderWidth:1,padding:5,borderRadius:10}} >
          <div
            className="w-28 h-28"
            style={{ display: "grid", placeItems: "center" }}
            key={technology.name}
          >
            <img
              src={technology.icon}
              style={{ height: 70, width: 70 }}
              alt="!"
            />
            <p style={{ textAlign: "center", fontWeight: "bold" ,color:'black'}}>
              {technology.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
