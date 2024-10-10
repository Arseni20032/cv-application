import GeneralInfoForm from "./GeneralInfo"
import CVBlock from "./CV"
import EducationBlockForm from "./Education"
import ExperienceBlockForm from "./Experience"
import { useState } from "react"
import "../styles/MainBlockStyle.scss";


export default function MainBlockForm() {
    const [showMoreEducation, setShowMoreEducation] = useState(false);
    const [showMoreExperience, setShowMoreExperience] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        startDate: '',
        endDate: '',
        startDateExperience: '',
        endDateExperience: '',
        location: '',
        education: '',
        description: '',
    })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleShowEducation = () => setShowMoreEducation(!showMoreEducation);
    const handleShowExperience = () => setShowMoreExperience(!showMoreExperience);
 
    return (<div className="main-block">
        <div className="content-block">
            <div className="addition-info-block"> 
                <GeneralInfoForm  formData={formData} onInputChange={handleInputChange}/>
                <EducationBlockForm formData={formData} showMore={showMoreEducation} handleShow={handleShowEducation} onInputChange={handleInputChange}/>
                <ExperienceBlockForm  formData={formData} showMore={showMoreExperience} handleShow={handleShowExperience} onInputChange={handleInputChange}/>

            </div>
            <div className="info-block">
                <CVBlock formData={formData}/>
            </div>
        </div>
    </div>)
}