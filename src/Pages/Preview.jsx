import html2canvas from "html2canvas";
//import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";

function Preview() {
  const [resume, setResume] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("resume");
    setResume(data);
  }, []);



 const downloadPDF = () => {
  const input = document.getElementById("resume");

  html2canvas(input, {
    backgroundColor: "#ffffff", // ⭐ important fix
    scale: 2, // better quality
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  });
};




  return (
     <div>
      <div
  id="resume"
  style={{
    background: "white",
    color: "black",
    padding: "20px",
    borderRadius: "10px",
  }}
>
  <h2>My Resume</h2>
  <p>{resume}</p>
</div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default Preview;