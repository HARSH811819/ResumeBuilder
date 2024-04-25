import React, { useEffect, useId, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, addEmail } from "../features/resumeSlice";
import { addContact, removeContact, pushContact } from "../features/ContactNo";
import { addSkill, removeSkill } from "../features/skills";
import Input from "./Input";
import Textarea from "./Textarea";
import { nanoid } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import {
  addEducation,
  removeEducation,
  upadteClass,
  updateCollege,
  updateMarks,
  updateStream,
  updateYear,
} from "../features/Education";
import {
  addExperience,
  removeExperience,
  updateCompany,
  updateCurrent,
  updateDesc,
  updateFrom,
  updateProfile,
  updateTo,
} from "../features/Experience";
import {
  addProject,
  removeProject,
  updateDetails,
  updateDomain,
  updateProjectLink,
  updateProjectName,
} from "../features/Projects";
import { updateSrc } from "../features/profile";

function Form() {
  const [skill, setSkill] = useState("");
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.Contacts.ContactNo);
  const Skills = useSelector((state) => state.Skills.Skills);
  const Education = useSelector((state) => state.Education.Education);
  const Experience = useSelector((state) => state.Experiences.Experience);
  const Project = useSelector((state) => state.Projects.Projects);
  const profile = useSelector((state) => state.Profile.profile);

    const handleAddSkill = () => {
    
      dispatch(addSkill(skill));
      setSkill("")
     
  };


  // insert Profile image
  function handleImage() {
    // var preview = document.getElementById('profile');
    var preview = document.querySelectorAll(".profileImage");
    var file = document.getElementById("upload").files[0];
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
      const url = reader.result;
      dispatch(updateSrc(url));
      // preview.forEach((img, indx) => {
      //   img.src = url;
      // });
    };
  }
  const navigate = useNavigate();
  const Generate = (e) => {
    e.preventDefault();
    navigate("/themepanel");
  };
  return (
    <div className="Form  mx-auto p-5">
      <h1 className=" text-center font-bold text-4xl text-white">
        BUILD YOUR RESUME
      </h1>

      <form onSubmit={(e) => Generate(e)} className="w-full">
        {/* profile Image */}
        <div className="m-2 rounded-lg overflow-hidden border-[2px] flex items-center justify-center flex-wrap p-2">
          <div className="max-w-[150px] w-[100px] max-h-[150px] h-150px  rounded border-[2px] border-black max-h-[170px] overflow-hidden">
            <img src={profile.src} className=" w-full" alt="" />
          </div>
          <input
            required
            id="upload"
            accept="images.jpg/*"
            className=" mx-auto my-2"
            onChange={handleImage}
            type="file"
          />
        </div>
        {/* Basic Info */}
        <div id="basicinfo" className="basicInfo w-100% flex  my-2">
          {/* Name */}

          <Input
            required
            id={"Name"}
            label={"Name : "}
            type={"text"}
            placeholder={"Enter Your Name"}
            onChange={(e) => dispatch(addName(e.target.value))}
          />

          {/* Email */}

          <Input
            id={"email"}
            label={"E-mail : "}
            placeholder={"Enter Your Email"}
            type={"email"}
            onChange={(e) => dispatch(addEmail(e.target.value))}
          />
        </div>

        {/* Phone No */}
        <label
          htmlFor="contactinfo"
          className="p-1 bg-gray-600 my-2 rounded-lg mx-auto block text-center text-white font-bold"
        >
          Enter Your Contact No
        </label>
        <div id="contactinfo" className="phoneNoContainer   flex-wrap  flex">
          {contact.map((contact) => (
            <div id={contact.NoId} className={` PhNolist m-1  flex`}>
              <input
                type="number"
                placeholder="Phone No."
                className=" outline-none pl-2 rounded-s-lg basis-[100%]"
                onChange={(e) =>
                  dispatch(addContact({ No: e.target.value, ID: contact.NoId }))
                }
              />
              <button
                type="button"
                className="bg-[red] px-2 rounded-e-lg  font-bold hover:bg-[#d01515] text-white"
                onClick={(e) => dispatch(removeContact(contact.NoId))}
              >
                X
              </button>
            </div>
          ))}
        </div>

        {contact.length <= 1 ? (
          <button
            className="p-2 mx-auto bg-[#ff8c28]  hover:bg-[#ff7028] text-white rounded-lg m-2 w-[50px] h-[30px] text-center flex items-center justify-center "
            type="button"
            onClick={() => dispatch(pushContact())}
          >
            +
          </button>
        ) : null}

        {/* Skills */}

        <div id="SkillInfo" className="SkillInfo flex-col  w-full">
          <label
            htmlFor="contactinfo"
            className="p-1 bg-gray-600 rounded-lg mx-auto my-2 block text-center text-white font-bold"
          >
            Enter Your Skills
          </label>

          <div className="skillForm w-full flex">
            <input
              type="text"
              className=" outline-none px-2  basis-[100%]"
              placeholder="Add Your Skills"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            <button
              type="button"
              // onClick={() => dispatch(addSkill(skill))}
              onClick={(e) => handleAddSkill(e)}
              className="px-2 p-1 w-[80px] rounded-e-lg font-bold *: bg-orange-500"
            >
              Add{" "}
            </button>
          </div>
          {/* Skillset box */}
          <div className="w-full my-2 flex flex-wrap justify-stretch   bg-slate-700 p-2">
            {Skills.map((Skill) => (
              <div
                id={Skill.skillId}
                className=" skillField w-fit px-2 m-1 bg-gray-300 rounded-md flex items-center font-bold"
              >
                <span className="">{Skill.Skill}</span>
                <button
                  type="button"
                  className="w-fit p-1 font-bold ml-1 outline-none text-red-700"
                  onClick={() => dispatch(removeSkill(Skill.skillId))}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Education Form */}
        <label
          htmlFor="contactinfo"
          className="p-1 bg-gray-600 rounded-lg mx-auto block text-center text-white font-bold"
        >
          Add Education Details
        </label>
        {Education.map((education, index) => (
          <div
            id={`EducationForm_${nanoid()}`}
            className=" w-full bg-gray-500 p-2 mt-1 rounded-md"
          >
            <div className="flex w-[100%] justify-between pl-3 pr-1">
              <h1 className="text-white font-bold text-center">
                Education - {index + 1}
              </h1>
              <button
                onClick={() => dispatch(removeEducation(education.EduId))}
                type="button"
                className="text-white px-2 rounded-lg hover:bg-red-700 bg-red-600 font-bold"
              >
                X
              </button>
            </div>
            <div className="basicInfo w-100% flex  my-2">
              {/* Class Or Course */}

              <Input
                label={"Class : "}
                type={"text"}
                placeholder={"Enter Your Class or Course Name"}
                onChange={(e) =>
                  dispatch(
                    upadteClass({ ID: education.EduId, class: e.target.value })
                  )
                }
              />

              {/* Stram  */}

              <Input
                label={"Stream : "}
                placeholder={"Enter Your Stream or Subject"}
                type={"text"}
                onChange={(e) =>
                  dispatch(
                    updateStream({
                      ID: education.EduId,
                      stream: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="basicInfo w-100% flex  my-2">
              {/* College or School or Institute Name */}

              <Input
                label={"College/School : "}
                type={"text"}
                placeholder={"Enter Your College or School Name"}
                onChange={(e) =>
                  dispatch(
                    updateCollege({
                      ID: education.EduId,
                      college: e.target.value,
                    })
                  )
                }
              />

              {/* Marks  */}

              <Input
                label={"Marks : "}
                placeholder={"Enter Your marks you obtained %"}
                type={"number"}
                onChange={(e) =>
                  dispatch(
                    updateMarks({ ID: education.EduId, marks: e.target.value })
                  )
                }
              />
            </div>
            {/* Passing Year */}
            <div className="basicInfo w-100% flex  my-2">
              <Input
                label={"Passing Year : "}
                placeholder={"Enter Your Passing Year"}
                type={"number"}
                onChange={(e) =>
                  dispatch(
                    updateYear({ ID: education.EduId, year: e.target.value })
                  )
                }
              />
            </div>
          </div>
        ))}

        <button
          onClick={() => dispatch(addEducation())}
          type="button"
          className="addEducatioan w-full my-1 mx-auto rounded-lg bg-orange-500 "
        >
          Add Education Field
        </button>

        {/* Experience Form     */}
        <label
          htmlFor="contactinfo"
          className="p-1 bg-gray-600 rounded-lg mx-auto block text-center text-white font-bold"
        >
          Add Experience Details
        </label>
        {Experience.map((experience, index) => (
          <div
            id={`ExperienceForm_${nanoid()}`}
            className=" w-full bg-gray-500 p-2 mt-1  rounded-md"
          >
            <div className="flex w-[100%] mb-1  justify-between pl-3 pr-1">
              <h1 className="text-white font-bold text-center">
                Experience - {index + 1}
              </h1>
              <button
                onClick={() => dispatch(removeExperience(experience.ExpId))}
                type="button"
                className="text-white px-2 rounded-lg hover:bg-red-700 bg-red-600 font-bold"
              >
                X
              </button>
            </div>
            <hr className="mb-3" />

            <div className="basicInfo w-100% flex justify-center items-center my-2">
              {/* Company Name */}
              <Input
                label={"Company : "}
                className={"w-full"}
                type={"text"}
                placeholder={"Enter name of Company/Organization you worked"}
                onChange={(e) =>
                  dispatch(
                    updateCompany({
                      ID: experience.ExpId,
                      company: e.target.value,
                    })
                  )
                }
              />
              {/* Profile Name */}
              <Input
                label={"Profile : "}
                className={"w-full"}
                type={"text"}
                placeholder={
                  "Enter your Working Profile (e.g : Software Engineer)"
                }
                onChange={(e) =>
                  dispatch(
                    updateProfile({
                      ID: experience.ExpId,
                      profile: e.target.value,
                    })
                  )
                }
              />
            </div>

            <div className="basicInfo w-100% flex  my-2"></div>
            <div className="basicInfo w-100% flex justify-center items-center my-2">
              {/*Starting date From  */}

              <Input
                label={"Starting Date : "}
                placeholder={"Enter Your Stream or Subject"}
                type={"date"}
                onChange={(e) =>
                  dispatch(
                    updateFrom({ ID: experience.ExpId, from: e.target.value })
                  )
                }
              />

              {/* Ending date To*/}
              {!experience.current ? (
                <Input
                  label={"Ending Date: "}
                  type={"date"}
                  placeholder={"Enter Your College or School Name"}
                  onChange={(e) =>
                    dispatch(
                      updateTo({ ID: experience.ExpId, To: e.target.value })
                    )
                  }
                />
              ) : null}
            </div>

            {/* Check if Currently Working */}
            <div className="w-fit flex items-center justify-center float-end mb-3">
              <label htmlFor="currentlyWorking" className="mx-2 text-white">
                Check if currently Working
              </label>
              <input
                id="currentlyWorking"
                type="checkbox"
                className="w-[30px] h-[20px] rounded-lg "
                checked={experience.current}
                onChange={() => dispatch(updateCurrent(experience.ExpId))}
              />
            </div>
            {/* Description of Job  */}

            <Textarea
              label={"Description"}
              className={"h-[100px] outline-none p-1"}
              onChange={(e) => {
                dispatch(
                  updateDesc({
                    ID: experience.ExpId,
                    description: e.target.value,
                  })
                );
              }}
              placeholder={"Enter Your Job Description"}
            />
          </div>
        ))}

        <button
          onClick={() => dispatch(addExperience())}
          type="button"
          className="addEducatioan w-full my-1 mx-auto rounded-lg bg-orange-500 "
        >
          Add More Experience
        </button>

        {/* Project Details */}
        <label
          // htmlFor="contactinfo"
          className="p-1 bg-gray-600 rounded-lg mx-auto block text-center text-white font-bold"
        >
          Add Project Details
        </label>
        {Project.map((project, index) => (
          <div
            id={`ProjectForm_${nanoid()}`}
            className=" w-full bg-gray-500 p-2 mt-1 rounded-md"
          >
            <div className="flex w-[100%] justify-between pl-3 pr-1">
              <h1 className="text-white font-bold text-center">
                Project - {index + 1}
              </h1>
              <button
                onClick={() =>
                  dispatch(dispatch(removeProject(project.projectId)))
                }
                type="button"
                className="text-white px-2 rounded-lg hover:bg-red-700 bg-red-600 font-bold"
              >
                X
              </button>
            </div>
            <div className="basicInfo w-100% flex  my-2">
              {/* Project Name */}

              <Input
                label={"Project Name : "}
                type={"text"}
                placeholder={"Enter Project Name "}
                onChange={(e) =>
                  dispatch(
                    updateProjectName({
                      ID: project.projectId,
                      name: e.target.value,
                    })
                  )
                }
              />

              {/*  */}

              <Input
                label={" Domain : "}
                placeholder={
                  "Enter your Project stream (e.g, :- Webdevelopment, AppDevelopment) "
                }
                type={"text"}
                onChange={(e) =>
                  dispatch(
                    updateDomain({
                      ID: project.projectId,
                      Domain: e.target.value,
                    })
                  )
                }
              />
            </div>

            {/* ProjectLink */}

            <div className="w-full mb-1 flex">
              <Input
                label={"Project Link : "}
                placeholder={"Enter Project Link (Optional) "}
                type={"text"}
                onChange={(e) => {
                  dispatch(
                    updateProjectLink({
                      ID: project.projectId,
                      Link: e.target.value,
                      indx: index,
                    })
                  );
                }}
              />
            </div>

            {/* Write Details of your Project */}
            <Textarea
              label={"Project Details"}
              className={"h-[100px] outline-none p-1"}
              onChange={(e) => {
                dispatch(
                  updateDetails({
                    ID: project.projectId,
                    Detail: e.target.value,
                  })
                );
              }}
              placeholder={"Describe more about your project "}
            />
          </div>
        ))}

        <button
          onClick={() => dispatch(addProject())}
          type="button"
          className="addEducatioan w-full my-1 mx-auto rounded-lg bg-orange-500 "
        >
          Add More Projects
        </button>

        <hr className="my-2" />
        <div className="w-full">
          <button
            type="submit"
            className="bg-green-600 p-2 w-full rounded-lg font-bold text-white hover:bg-green-500"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
