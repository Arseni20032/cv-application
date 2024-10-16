import { useState } from "react";
import GeneralInfoBlock from "./blockForms/GeneralInfoBlock";
import EducationBlock from "./blockForms/EducationBlock";
import ExperienceBlock from "./blockForms/ExperienceBlock";
import CVBlock from "./displayInfo/CV";
import "../styles/MainBlockStyle.scss";

export default function MainBlockForm() {
    const [showMoreEducation, setShowMoreEducation] = useState(false);
    const [showMoreExperience, setShowMoreExperience] = useState(false);
    const [experiences, setExperiences] = useState([]); 
    const [educations, setEducations] = useState([]); 
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        startDateEducation: '',
        endDateEducation: '',
        locationEducation: '',
        education: '',
        qualification: '',
        experience: '',
        startDateExperience: '',
        endDateExperience: '',
        locationExperience: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleShowEducation = () => {
        setShowMoreEducation((prevState) => !prevState);
        setShowMoreExperience(false);
    };

    const handleShowExperience = () => {
        setShowMoreExperience((prevState) => !prevState);
        setShowMoreEducation(false);
    };

    const handleSaveExperience = () => {
        setExperiences((prevExperiences) => [...prevExperiences, formData]);
        setFormData({
            ...formData,
            experience: '',
            startDateExperience: '',
            endDateExperience: '',
            locationExperience: '',
            description: ''
        });
    };

    const handleDeleteExperience = () => {
        setExperiences((prevExperiences) => prevExperiences.slice(0, -1));
    };

    const handleSaveEducation = () => {
        setEducations((prevEducations) => [...prevEducations, formData]);
        setFormData({
            ...formData,
            education: '',
            qualification: '',
            startDateEducation: '',
            endDateEducation: '',
            locationEducation: '',
        })
    }

    const handleDeleteEducation = () => setEducations((prevEducations) => prevEducations.slice(0, -1));

    return (
        <div className="main-block">
            <div className="content-block">
                <div className="addition-info-block"> 
                    <GeneralInfoBlock formData={formData} onInputChange={handleInputChange} />
                    <EducationBlock 
                        formData={formData} 
                        showMore={showMoreEducation} 
                        handleShow={handleShowEducation} 
                        onInputChange={handleInputChange}
                        onSaveEducation={handleSaveEducation}
                        onDeleteEducation={handleDeleteEducation} 
                    />

                    <ExperienceBlock
                        formData={formData} 
                        showMore={showMoreExperience} 
                        handleShow={handleShowExperience} 
                        onInputChange={handleInputChange} 
                        onSaveExperience={handleSaveExperience} 
                        onDeleteExperience={handleDeleteExperience}
                    />

                </div>
                <div className="info-block">
                    <CVBlock formData={formData} experiences={experiences} educations={educations}/>
                </div>
            </div>
        </div>
    );
}
