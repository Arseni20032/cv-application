import CustomInput from "./CustomInput";


export default function EducationBlockForm({ showMore, handleShow, formData, onInputChange }) {
    return (
        <div className="main">
            <form>
                <h2>Education</h2>
                <button type="button" onClick={handleShow}>
                    {showMore ? 'Hide' : 'Show'} details
                </button>
                {showMore && 
                <div>
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
                        onInputChange={onInputChange} placeholder="Minsk, BY"
                    />
                </div>}
            </form>
        </div>
    );
}
