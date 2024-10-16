import "../../styles/CVStyle.scss"

export default function EducationInfo({educations}) {
    return (
        <div className="education-block">
            <h2 className="education-header">Education</h2>
            {educations.map((education, index) => (
                <div key={index} className="education-information">
                    <div className="education-period">
                        {education.startDateEducation} 
                        {education.startDateEducation && education.endDateEducation && <span> – </span>}
                        {education.endDateEducation} 
                        <div>{education.locationEducation}</div>
                    </div>
                    <div className="education">
                        <div className="education-place">{education.education}</div>
                        <div className="education-qualification">{education.qualification}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}