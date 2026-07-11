import React, { useState } from "react";

const Chipsinput = () => {
  const [inputText, setInputText] = useState("");
  const [chips,setChips]=useState([])

  const handleKeyDown=(e)=>{
    if(e.key==="Enter" && inputText.trim() !== ""){
     setChips(prev=> [...prev,inputText])
     setInputText("");
    }
  }
  const handledelete=(index)=>{
    const copyChips=[...chips];
   copyChips.splice(index,1)
    setChips(copyChips)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "480px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e)=>handleKeyDown(e)}
      />
     <div style={{display:"flex"}}>
        {chips.map((chips,index)=>
        <div style={{color:"white",background:"gray",margin:"10px",padding:"5px"}}>
           {chips} 
           <button style={{color:"red"}}
           onClick={()=>handledelete(index)}
           >X</button>
        </div>)}
        
     </div>
    </div>
  );
};

export default Chipsinput;
