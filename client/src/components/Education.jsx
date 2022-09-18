import React from "react";

const Education = ({ formData, setFormData }) => {
  // edu1_school: "",
  // edu1_year: "",
  // edu1_qualification: "",
  // edu1_desc: "",

  // edu2_school: "",
  // edu2_year: "",
  // edu2_qualification: "",
  // edu2_desc: "",
  return (
    <div className="personal-info-container">
      <h1>Enter Education Details</h1>
      <input
        type="text"
        placeholder="Enter institute name..."
        value={formData.edu1_school}
        onChange={(e) => {
          setFormData({ ...formData, edu1_school: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter the year"
        value={formData.edu1_year}
        onChange={(e) => {
          setFormData({ ...formData, edu1_year: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter qualification IE 'Bachelors in Software Engineering'"
        value={formData.edu1_qualification}
        onChange={(e) => {
          setFormData({ ...formData, edu1_qualification: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={formData.edu1_desc}
        onChange={(e) => {
          setFormData({ ...formData, edu1_desc: e.target.value });
        }}
      />
      <h3>Enter your second education detail</h3>
      <input
        type="text"
        placeholder="Enter institute name..."
        value={formData.edu2_school}
        onChange={(e) => {
          setFormData({ ...formData, edu2_school: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter the year"
        value={formData.edu2_year}
        onChange={(e) => {
          setFormData({ ...formData, edu2_year: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter qualification IE 'Bachelors in Software Engineering'"
        value={formData.edu2_qualification}
        onChange={(e) => {
          setFormData({ ...formData, edu2_qualification: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={formData.edu2_desc}
        onChange={(e) => {
          setFormData({ ...formData, edu2_desc: e.target.value });
        }}
      />
    </div>
  );
};

export default Education;
