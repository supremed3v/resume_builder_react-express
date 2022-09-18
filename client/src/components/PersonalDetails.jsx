import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  // name: "",
  // email: "",
  // phone: "",
  // linkedin: "",
  // github: "",
  // skills: "",
  return (
    <div className="personal-info-container">
      <h1>Enter your personal details</h1>
      <input
        type="text"
        placeholder="Enter your name..."
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter your email..."
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter your Phone..."
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter your LinkedIn account..."
        value={formData.linkedin}
        onChange={(e) => {
          setFormData({ ...formData, linkedin: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter your github account..."
        value={formData.github}
        onChange={(e) => {
          setFormData({ ...formData, github: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Mention your skills separate them with comma"
        value={formData.skills}
        onChange={(e) => {
          setFormData({ ...formData, skills: e.target.value });
        }}
      />
    </div>
  );
};

export default PersonalDetails;
