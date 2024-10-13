import CustomInput from "./CustomInput";
import { ReactComponent as Plus } from '../assets/images/plus.svg';
import { ReactComponent as Minis } from '../assets/images/minus.svg';

export default function ExperienceBlockForm({ showMore, handleShow, formData, onInputChange, onSaveExperience, onDeleteExperience }) {
    return (
        <div className="main">
            <button className="expand-section" onClick={handleShow}>
                <h2>Experience</h2>
                {showMore ? <Minis /> : <Plus />}
            </button>

            {showMore && (
                <form className="form-content">
                    <label>Company name:</label>
                    <CustomInput
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onInputChange={onInputChange}
                        placeholder="Enter your experience"
                    />

                    <label>Start date:</label>
                    <CustomInput
                        type="date"
                        name="startDateExperience"
                        value={formData.startDateExperience}
                        onInputChange={onInputChange}
                    />

                    <label>End date:</label>
                    <CustomInput
                        type="date"
                        name="endDateExperience"
                        value={formData.endDateExperience}
                        onInputChange={onInputChange}
                    />

                    <label>Location</label>
                    <CustomInput
                        type="text"
                        name="locationExperience"
                        value={formData.locationExperience}
                        onInputChange={onInputChange}
                        placeholder="Minsk, BY"
                    />

                    <label>Description:</label>
                    <CustomInput
                        type="textarea"
                        name="description"
                        value={formData.description}
                        onInputChange={onInputChange}
                        placeholder="Describe your experience..."
                    />
                    
                    <button type="button" onClick={onSaveExperience}>Save</button>
                    <button type="button" onClick={onDeleteExperience}>Delete</button>
                </form>
            )}
        </div>
    );
}
