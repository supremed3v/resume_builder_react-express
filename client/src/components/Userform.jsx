import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Extras from "./Extras";
import axios from "axios";
import { saveAs } from "file-saver";
const Userform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",

    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",

    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",

    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
    extra_3: "",
    extra_4: "",
    extra_5: "",

    status: 0,
  });

  const [page, setPage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Project",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitle[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitle.length - 1) {
                axios
                  .post("/create-pdf", formData)
                  .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
                  .then((res) => {
                    const pdfBlob = new Blob([res.data], {
                      type: "application/pdf",
                    });
                    saveAs(pdfBlob, "Resume.pdf");
                  });
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitle.length - 1 ? "Download PDF" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userform;
