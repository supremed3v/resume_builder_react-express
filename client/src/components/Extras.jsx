import React from "react";

const Extras = ({ formData, setFormData }) => {
  // extra_1: "",
  //   extra_2: "",
  //   extra_3: "",
  //   extra_4: "",
  //   extra_5: "",
  return (
    <div className="personal-info-container">
      <h1>Miscellaneous</h1>
      <br />
      <h3>Languages</h3>
      <input
        type="text"
        placeholder="Enter languages you know"
        value={formData.extra_1}
        onChange={(e) => {
          setFormData({ ...formData, extra_1: e.target.value });
        }}
      />
      <br />
      <h3>Hobbies</h3>
      <input
        type="text"
        placeholder="Enter your hobbies"
        value={formData.extra_2}
        onChange={(e) => {
          setFormData({ ...formData, extra_2: e.target.value });
        }}
      />
      <br />
      <h3>Activity/Achievement</h3>
      <input
        type="text"
        placeholder="Enter your activity or achievement"
        value={formData.extra_3}
        onChange={(e) => {
          setFormData({ ...formData, extra_3: e.target.value });
        }}
      />
      <h3>Activity/Achievement</h3>
      <input
        type="text"
        placeholder="Enter your activity or achievement"
        value={formData.extra_4}
        onChange={(e) => {
          setFormData({ ...formData, extra_4: e.target.value });
        }}
      />
      <h3>Activity/Achievement</h3>
      <input
        type="text"
        placeholder="Enter your activity or achievement"
        value={formData.extra_5}
        onChange={(e) => {
          setFormData({ ...formData, extra_5: e.target.value });
        }}
      />
    </div>
  );
};

export default Extras;
