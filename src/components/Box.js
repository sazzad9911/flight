import React, { useState } from "react";

export default function Box({ data,onChange }) {
    const [select,onSelect]=useState([])
   
  return (
    <div className="border border-gray-200 px-2 py-2 rounded-md my-2 mb-4">
      {data?.map((doc, i) => (
        <div className="flex gap-2" key={i}>
          <input onChange={e=>{
            const d=select?.find(t=>t.label==doc.label)
           
            if(d){
                onSelect(select.filter(d=>d.label!=doc.label))
            }else{
                onSelect(s=>[...s,doc])
            }
            onChange&&onChange(select)
          }} checked={select?.find(d=>d.label===doc.label)?true:false} className=" outline-green-500" type="checkbox" />
          {doc.label}
        </div>
      ))}
    </div> 
  );
}
