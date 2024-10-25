import React from 'react'
import { languages } from '../constants'

function Language() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mx-5 border-2 py-5 border-white rounded-3xl ">
      {languages.map((technology) => (
        <div className='hover:scale-105 shadow-lg transition-all bg-white' style={{borderWidth:1,padding:5,borderRadius:10}} >
          <div
            className="w-28 h-28"
            style={{ display: "grid", placeItems: "center" }}
            key={technology.name}
          >
            <img
              src={technology.icon}
              style={{ height: 80, width: 80 }}
              alt="!"
              className='rounded-full'
            />
            <p style={{ textAlign: "center", fontWeight: "bold" ,color:'black'}}>
              {technology.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Language
