import "../../styles/CVStyle.scss";

export default function ExperienceInfo({ experiences }) {
    return (
        <div className="experience-block">
            <h2 className="experience-header">Professional experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="experience-information">
                    <div className="experience-period">
                        {experience.startDateExperience}
                        {experience.startDateExperience &&
                            experience.endDateExperience && <span> – </span>}
                        {experience.endDateExperience}
                        <div>{experience.locationExperience}</div>
                    </div>
                    <div className="experience">
                        <div className="experience-place">
                            {experience.experience}
                        </div>
                        <div className="experience-description">
                            {experience.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
