import { useSelector } from "react-redux";
 export const contact = useSelector((state) => state.Contacts.ContactNo);
const Skills = useSelector((state) => state.Skills.Skills);
const Education = useSelector((state) => state.Education.Education);
const Experience = useSelector((state) => state.Experiences.Experience);
const Project = useSelector((state) => state.Projects.Projects);
const Resume = useSelector((state) => state.Resume);

export  {contact,Skills,Education,Experience,Project,Resume};
