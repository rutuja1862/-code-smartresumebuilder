import { useState } from "react";

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

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
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
      <p>{errors.skills}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ResumeForm;