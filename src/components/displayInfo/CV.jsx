import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

export default function CVBlock({ formData, experiences, educations }) {
    return (
        <div className="cv-block">
            <PersonalInfo formData={formData}/>
            <EducationInfo educations={educations}/>
            <ExperienceInfo experiences={experiences}/>
        </div>
    );
}
