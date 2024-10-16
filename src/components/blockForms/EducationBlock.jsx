import CustomInput from "../CustomInput";
import ExpandButton from "../buttons/ExpandButton";
import SaveDeleteButton from "../buttons/SaveDeleteButton";
import "../../styles/EducationExperienceStyle.scss";

export default function EducationBlock({
    showMore,
    handleShow,
    formData,
    onInputChange,
    onSaveEducation,
    onDeleteEducation,
}) {
    return (
        <div className="main">
            <ExpandButton
                handleShow={handleShow}
                heading="Education"
                showMore={showMore}
            />

            {showMore && (
                <form className="form-content">
                    <CustomInput
                        type="text"
                        name="education"
                        value={formData.education}
                        onInputChange={onInputChange}
                        placeholder="Enter school / university"
                        labelName="School / university:"
                    />

                    <CustomInput
                        type="date"
                        name="startDateEducation"
                        value={formData.startDateEducation}
                        onInputChange={onInputChange}
                        labelName="Start date:"
                    />

                    <CustomInput
                        type="date"
                        name="endDateEducation"
                        value={formData.endDateEducation}
                        onInputChange={onInputChange}
                        labelName="End date:"
                    />

                    <CustomInput
                        type="text"
                        name="locationEducation"
                        value={formData.locationEducation}
                        onInputChange={onInputChange}
                        placeholder="Minsk, BY"
                        labelName="Location:"
                    />

                    <CustomInput
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onInputChange={onInputChange}
                        placeholder="Software engineer"
                        labelName="Qualification:"
                    />

                    <SaveDeleteButton
                        onSave={onSaveEducation}
                        onDelete={onDeleteEducation}
                    />
                </form>
            )}
        </div>
    );
}
