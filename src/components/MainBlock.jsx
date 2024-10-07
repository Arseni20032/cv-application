import GeneralInfoForm from "./GeneralInfo"
import CVBlock from "./CV"
import EducationBlockForm from "./EducationBlock"
import ExperienceBlockForm from "./Experience"
import { useState } from "react"
import "../styles/MainBlockStyle.scss";


export default function MainBlockForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (<div className="main-block">
        <div className="content-block">
            <div className="addition-info-block"> 
                <GeneralInfoForm formData={formData} onInputChange={handleInputChange}/>
                <EducationBlockForm/>
                <ExperienceBlockForm/>

            </div>
            <div className="info-block">
                <CVBlock formData={formData}/>
            </div>
        </div>
    </div>)
}