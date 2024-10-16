import { useState } from "react";
import GeneralInfoBlock from "./blockForms/GeneralInfoBlock";
import EducationBlock from "./blockForms/EducationBlock";
import ExperienceBlock from "./blockForms/ExperienceBlock";
import useFormManagement from "./hooks/useFormManagement";
import CVBlock from "./displayInfo/CV";
import "../styles/MainBlockStyle.scss";

export default function MainBlockForm() {
    const {
        formData,
        showMoreEducation,
        showMoreExperience,
        experiences,
        educations,
        handleInputChange,
        handleShowEducation,
        handleShowExperience,
        handleSaveEducation,
        handleDeleteEducation,
        handleSaveExperience,
        handleDeleteExperience,
    } = useFormManagement();
    
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
