import "../styles/CVStyle.scss";

export default function CVBlock({ formData, experiences, educations }) {
    return (
        <div className="cv-block">
            <div className="personal-information-block">
                <h1 className="name">{formData.name}</h1>
                <div className="info">
                    <span>{formData.phone}</span>
                    <span>{formData.email}</span>
                    <span>{formData.address}</span>
                </div>
            </div>
            <div className="education-block">
                <h2 className="education-h2">Education</h2>
                {educations.map((education, index) => (
                    <div key={index} className="education-information">
                        <div className="education-period">
                            {education.startDateEducation} 
                            {education.startDateEducation && education.endDateEducation && <span> – </span>}
                            {education.endDateEducation} <br />
                            {education.locationEducation}
                        </div>
                        <div className="education-info">
                            {education.education}
                        </div>
                    </div>
                ))}
            </div>
            <div className="experience-block">
                <h2 className="experience-h2">Professional experience</h2>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-information">
                        <div className="experience-period">
                            {exp.startDateExperience}
                            {exp.startDateExperience && exp.endDateExperience && <span> – </span>}
                            {exp.endDateExperience} <br />
                            {exp.locationExperience}
                        </div>
                        <div className="experience-information">
                            {exp.experience} <br />
                            {exp.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
