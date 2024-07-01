import React, { useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [data, setData] = useState();
  const fetchApiDetails = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    if (data) {
      setData(data.data)
    }
  };

  const deleteButtonClick = (id) =>{
    const filteredData = data.filter((item) => item.id !== id)
    setData(filteredData)    
  }
  return (
    <div>
      <button onClick={fetchApiDetails}>Call API</button>
      <div>
        {data && data.map((item, index) => <div style={{ textAlign: "left", marginLeft: "10px", padding: "20px"}} key={index}>
            <div>
                id: {item.id}
            </div>
            <div>
                title: {item.title}
            </div>
            <button onClick={() => {deleteButtonClick(item.id) ;console.log(item.id)}}>
                Delete me
            </button>
        </div>)}
      </div>
    </div>
  );
};

export default ApiFetch;
