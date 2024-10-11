import CustomInput from "./CustomInput";
import '../styles/EducationExperienceStyle.scss'
import { ReactComponent as Plus } from '../assets/images/plus.svg';
import { ReactComponent as Minis } from '../assets/images/minus.svg';

export default function EducationBlockForm({ showMore, handleShow, formData, onInputChange }) {
    return (
        <div className="main">
            <button className="expand-section" onClick={handleShow}>
                <h2>Education</h2>
                {showMore ? <Minis/> : <Plus/>}

            </button>

            {showMore && (
                <form className="form-content">
                    <label>School / university:</label>
                    <CustomInput 
                        type="text" 
                        name="education" 
                        value={formData.education} 
                        onInputChange={onInputChange}  
                        placeholder="Enter school / university"
                    />

                    <label>Start date:</label>
                    <CustomInput 
                        type="date" 
                        name="startDateEducation" 
                        value={formData.startDateEducation} 
                        onInputChange={onInputChange}
                    />

                    <label>End date:</label>
                    <CustomInput 
                        type="date" 
                        name="endDateEducation" 
                        value={formData.endDateEducation} 
                        onInputChange={onInputChange}
                    />

                    <label>Location:</label>
                    <CustomInput 
                        type="text"
                        name="locationEducation" 
                        value={formData.locationEducation}  
                        onInputChange={onInputChange} 
                        placeholder="Minsk, BY"
                    />
                </form>
            )}
        </div>
    );
}
