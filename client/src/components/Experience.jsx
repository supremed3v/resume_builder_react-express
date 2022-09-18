import React from "react";

const Experience = ({ formData, setFormData }) => {
  // exp1_org: "",
  //   exp1_pos: "",
  //   exp1_desc: "",
  //   exp1_dur: "",

  //   exp2_org: "",
  //   exp2_pos: "",
  //   exp2_desc: "",
  //   exp2_dur: "",
  return (
    <div className="personal-info-container">
      <h1>Enter your Experiences</h1>
      <input
        type="text"
        placeholder="Enter institute name..."
        value={formData.exp1_org}
        onChange={(e) => {
          setFormData({ ...formData, exp1_org: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter the year"
        value={formData.exp1_desc}
        onChange={(e) => {
          setFormData({ ...formData, exp1_desc: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter qualification IE 'Bachelors in Software Engineering'"
        value={formData.exp1_pos}
        onChange={(e) => {
          setFormData({ ...formData, exp1_pos: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={formData.exp1_dur}
        onChange={(e) => {
          setFormData({ ...formData, exp1_dur: e.target.value });
        }}
      />
      <h3>Enter your second education detail</h3>
      <input
        type="text"
        placeholder="Enter institute name..."
        value={formData.exp2_org}
        onChange={(e) => {
          setFormData({ ...formData, exp2_org: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter the year"
        value={formData.exp2_desc}
        onChange={(e) => {
          setFormData({ ...formData, exp2_desc: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter qualification IE 'Bachelors in Software Engineering'"
        value={formData.exp2_pos}
        onChange={(e) => {
          setFormData({ ...formData, exp2_pos: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={formData.exp2_dur}
        onChange={(e) => {
          setFormData({ ...formData, exp2_dur: e.target.value });
        }}
      />
    </div>
  );
};

export default Experience;
