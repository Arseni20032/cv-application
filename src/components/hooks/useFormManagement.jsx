import { useState } from "react";

export default function useFormManagement() {
    const [showMoreEducation, setShowMoreEducation] = useState(false);
    const [showMoreExperience, setShowMoreExperience] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        education: "",
        qualification: "",
        startDateEducation: "",
        endDateEducation: "",
        locationEducation: "",
        experience: "",
        startDateExperience: "",
        endDateExperience: "",
        locationExperience: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleShowEducation = () => {
        setShowMoreEducation(!showMoreEducation);
        setShowMoreExperience(false);
    };

    const handleShowExperience = () => {
        setShowMoreExperience(!showMoreExperience);
        setShowMoreEducation(false);
    };

    const handleSaveEducation = () => {
        setEducations([...educations, formData]);
        setFormData((prev) => ({
            ...prev,
            education: "",
            qualification: "",
            startDateEducation: "",
            endDateEducation: "",
            locationEducation: "",
        }));
    };

    const handleDeleteEducation = () => setEducations(educations.slice(0, -1));

    const handleSaveExperience = () => {
        setExperiences([...experiences, formData]);
        setFormData((prev) => ({
            ...prev,
            experience: "",
            startDateExperience: "",
            endDateExperience: "",
            locationExperience: "",
            description: "",
        }));
    };

    const handleDeleteExperience = () =>
        setExperiences(experiences.slice(0, -1));

    return {
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
    };
}
