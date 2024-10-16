import CustomInput from "../CustomInput";
import ExpandButton from "../buttons/ExpandButton";
import SaveDeleteButton from "../buttons/SaveDeleteButton";

export default function ExperienceBlock({
    showMore,
    handleShow,
    formData,
    onInputChange,
    onSaveExperience,
    onDeleteExperience,
}) {
    return (
        <div className="main">
            <ExpandButton
                handleShow={handleShow}
                heading="Experience"
                showMore={showMore}
            />

            {showMore && (
                <form className="form-content">
                    <CustomInput
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onInputChange={onInputChange}
                        placeholder="Enter your experience"
                        labelName="Company name:"
                    />

                    <CustomInput
                        type="date"
                        name="startDateExperience"
                        value={formData.startDateExperience}
                        onInputChange={onInputChange}
                        labelName="Start date"
                    />

                    <CustomInput
                        type="date"
                        name="endDateExperience"
                        value={formData.endDateExperience}
                        onInputChange={onInputChange}
                        labelName="End date:"
                    />

                    <CustomInput
                        type="text"
                        name="locationExperience"
                        value={formData.locationExperience}
                        onInputChange={onInputChange}
                        placeholder="Minsk, BY"
                        labelName="Location"
                    />

                    <CustomInput
                        type="textarea"
                        name="description"
                        value={formData.description}
                        onInputChange={onInputChange}
                        placeholder="Describe your experience..."
                        labelName="Description:"
                    />

                    <SaveDeleteButton
                        onSave={onSaveExperience}
                        onDelete={onDeleteExperience}
                    />
                </form>
            )}
        </div>
    );
}
