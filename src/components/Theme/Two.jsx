import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import resumeSlice from "../../features/resumeSlice";
import { createResume } from "../resumeBuild";

function Two() {
  const Resume = useSelector((state) => state.Resume.resume);
  const contact = useSelector((state) => state.Contacts.ContactNo);
  const Skills = useSelector((state) => state.Skills.Skills);
  const Education = useSelector((state) => state.Education.Education);
  const Experience = useSelector((state) => state.Experiences.Experience);
  const Project = useSelector((state) => state.Projects.Projects);
  const profile = useSelector((state) => state.Profile.profile);
  const infohead =
    "rounded-2xl p-1 pl-3 font-bold text-white border-b-2 border-white mt-8 mb-3  ";
  const heading =
    "font-bold text-lg bg-gray-600 text-white pl-3 rounded-xl mb-2";
  const info = "font-bold pl-3";


  return (
    <div className="w-[820px] flex-col mx-auto my-2 items-center justify-center ">
      <div
        id="resume"
        className="mx-auto my-auto w-[794px] bg-gray-300 h-[1120px] flex"
      >
        {/* Side Intro Section */}
        <div className="basicinfor bg-[#411515] rounded-e-xl h-full w-[250px] flex-col items-center justify-center  pt-4">
          {/* Profile imge */}
          <div className="profilePic mt-9 mx-auto  w-fit h-fit max-h-[200px] max-w-[130px] min-w-[120px] min-h-[180px] overflow-hidden bg-gray-200 rounded-2xl border border-white flex justify-center items-center">
            <img
              id="profile"
              src={profile.src}
              alt=""
              width={"100%"}
              className="profileImage m-2"
            />
          </div>

          {/* Skills Info */}
          <div className="Basic Info mt-2  mx-auto w-[80%]  bg-orange">
            <h1 className={`${infohead}`}>Skills.</h1>
            <ul
              className=" mx-auto w-[80%] "
              style={{ listStyleType: "square", color: "white" }}
            >
              {Skills.map((skill) => (
                <li
                  key={nanoid()}
                  className="pl-2 w-full font-bold text-white "
                >
                  {skill.Skill}
                </li>
              ))}
            </ul>

            {/* Basic Info */}
            <h1 className={`${infohead}`}>Contact No.</h1>
            {contact.map((contact) => (
              <p className="pl-2 w-full font-bold text-white ">{contact.No}</p>
            ))}
          </div>
        </div>

        {/* Main Info */}

        <div className="w-[850px] h-full  pt-14 pl-4 pr-4 pb-4">
          <div className="Name border-b-2 border-black">
            <h1 className=" text-5xl font-bold">
              {
                // name
                Resume.name
              }
            </h1>

            <a href="harshharsh28039@gmail.com" className="text-blue-800 ">
              &nbsp; <i className="fa fa-envelope"> </i> &nbsp;
              {
                // E-mail
                Resume.email
              }
            </a>
            <p className="pl-2 w-full font-bold text-black ">
              {" "}
              <i className="fa fa-phone"></i> +91
              {
                // contact No
                contact.length > 0 ? (
                  <span>{contact[0].No}</span>
                ) : (
                  " add Contact No"
                )
              }
              {contact.length > 1 ? (
                <span>{" |  " + contact[1].No}</span>
              ) : null}
            </p>
          </div>

          {/* Education */}
          <div className="pl-4 pr-4 mt-3">
            <h1 className={`${heading}`}>EDUCATION</h1>
            <ul>
              {
                // education
                Education.map((edu) => (
                  // EduId:nanoid(),
                  // class: "",
                  // stream: "",
                  // college: "",
                  // marks: 100,
                  // year: 2012,

                  <li key={edu.EduId} className={`${info}`}>
                    {edu.class + "  |  "} {edu.stream + "  |  "}
                    {edu.college + "  |  "} {edu.marks + "%  |  "}{" "}
                    {"in the year " + edu.year}{" "}
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Experience */}
          <div className="pl-4 pr-4 mt-3">
            <h1 className={`${heading}`}>EXPERIENCE</h1>
            <ul>
              {Experience.map((exp) => (
                <li
                  key={exp.ExpId}
                  className=" border-[#253664] mb-2 border-l-2"
                >
                  <div className="experienceHead w-full flex justify-between px-3">
                    <h1 className="font-bold">
                      {exp.company + "  |  "} {exp.profile}{" "}
                    </h1>
                    <h2 className="">
                      {exp.from + " - "}{" "}
                      {!exp.current ? exp.To : " Currently Working"}
                    </h2>
                  </div>
                  <p className="px-4">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="pl-4 pr-4 mt-3">
            <h1 className={`${heading}`}>Projects</h1>
            <ul>
              {
                //  projectId:nanoid(),
                //  projectname:"",
                //  Domain:"",
                //  Details:"",
                //  ProjectLink:undefined

                Project.map((project) => (
                  <li key={project.projectId} className="mt-2 ">
                    <div className="experienceHead w-full flex justify-between px-3">
                      <h1 className="font-bold">
                        {project.projectname + "  |  "} {project.Domain}
                      </h1>
                    </div>
                    <p className="px-4">{project.Details}</p>
                    {String(project.ProjectLink).length > 1 ? (
                      <a
                        className=" ml-4 text-blue-700"
                        href={project.ProjectLink}
                      >
                        {"Project Link :- " + project.ProjectLink}
                      </a>
                    ) : null}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 p-2 float-right  m-4 w-[100px] hover:bg-blue-600"
        onClick={createResume}
      >
        save
      </button>
    </div>
  );
}

export default Two;
