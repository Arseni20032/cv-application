import "../styles/CVStyle.scss"

export default function CVBlock({ formData }) {
    return (
        <div className="cv-block">
            <div className="personal-information-block">
                <h1 className="name">
                    {formData.name}
                </h1>
                <div className="info">
                    <span>{formData.phone}</span>
                    <span>{formData.email}</span>
                    <span>{formData.address}</span>
                </div>
            </div>
            <div className="education-block">
                <h2 className="education-h2">Education</h2>
                <div className="education-information">
                    <div className="education-period">
                        {formData.startDateEducation} 
                        {formData.startDateEducation && formData.endDateEducation && <span> – </span>}
                        {formData.endDateEducation} <br />
                        {formData.locationEducation}
                    </div>
                    <div className="education-information">
                        {formData.education}
                    </div>
                </div>
            </div>
            <div className="experience-block">
                <h2 className="experience-h2">Professional experience</h2>
                <div className="experience-information">
                    <div className="experience-period">
                        {formData.startDateExperience} 
                        {formData.startDateExperience && formData.endDateExperience && <span> – </span>}
                        {formData.endDateExperience} <br />
                        {formData.locationExperience}
                    </div>
                    <div className="experience-information">
                        {formData.experience} <br />
                        {formData.description}
                    </div>
                </div>
            </div>
        </div>
    );
}
