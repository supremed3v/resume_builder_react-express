import React from "react";

const Project = ({ formData, setFormData }) => {
  // proj1_title: "",
  //   proj1_link: "",
  //   proj1_desc: "",

  //   proj2_title: "",
  //   proj2_link: "",
  //   proj2_desc: "",
  return (
    <div className="personal-info-container">
      <h1>Mention your projects to standout!</h1>
      <input
        type="text"
        placeholder="Enter your project title"
        value={formData.proj1_title}
        onChange={(e) => {
          setFormData({ ...formData, proj1_title: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter your project link"
        value={formData.proj1_link}
        onChange={(e) => {
          setFormData({ ...formData, proj1_link: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Enter your project description"
        value={formData.proj1_desc}
        onChange={(e) => {
          setFormData({ ...formData, proj1_desc: e.target.value });
        }}
      />
      <h3>Add another project</h3>
      <input
        type="text"
        placeholder="Enter your project title"
        value={formData.proj2_title}
        onChange={(e) => {
          setFormData({ ...formData, proj2_title: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter your project link"
        value={formData.proj2_link}
        onChange={(e) => {
          setFormData({ ...formData, proj2_link: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Enter your project description"
        value={formData.proj2_desc}
        onChange={(e) => {
          setFormData({ ...formData, proj2_desc: e.target.value });
        }}
      />
    </div>
  );
};

export default Project;
