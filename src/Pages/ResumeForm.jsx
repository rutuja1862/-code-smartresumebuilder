import { useState } from "react";
import { generateResume } from "../api/AI";
import { useNavigate } from "react-router-dom";


function ResumeForm() {
  const [formData, setFormData] = useState({     // formdata is storing all inputs
    name: "",
    email: "",
    phone: "",
    skills: ""
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });   //it updates only the field user is currently typing, keep everything else same..
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) 
      newErrors.name = "Name is required";

    if (!formData.email.includes("@")) 
      newErrors.email = "Valid email required";

    if (formData.phone.length < 10) 
      newErrors.phone = "Enter valid phone";
    
    if (!formData.skills) 
      newErrors.skills = "Enter skills";

    return newErrors;
  };

  //const navigate = useNavigate();

  // submit
  const navigate = useNavigate();    // this is from React Router..It helps you navigate pages

const handleSubmit = async (e) => {   // runs when user clicks Submit button
  e.preventDefault();   // it prevents page refresh..

  const aiResponse = await generateResume(formData);  // it calls our function..sends user data..waits for result...stores result in aiResponse

  // store result
  localStorage.setItem("resume", aiResponse); // Saves data in browser storage..here key is the "resume" and aiResponse is generated text..

  navigate("/preview");
};






  return (
    <form onSubmit={handleSubmit}>
      <h2>Resume Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <p>{errors.name}</p>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <p>{errors.email}</p>

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        onChange={handleChange}
      />
      <p>{errors.phone}</p>

      <input
        type="text"
        name="skills"
        placeholder="Enter Skills"
        onChange={handleChange}
      />
      <p className="errorMsg">{errors.skills}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ResumeForm;