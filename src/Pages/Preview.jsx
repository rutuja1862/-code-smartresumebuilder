import React, { useEffect, useState } from 'react'

function Preview() {

  const [resume,setResume] = useState("");

  useEffect(() => {

    const data = localStorage.getItem("resume");
    setResume(data);

  },[]);

  return (
    <div>
      <h1>Generated Resume</h1>
      <p>{resume}</p>
    </div>
  )
}

export default Preview
