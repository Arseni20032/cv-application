import CustomInput from "./CustomInput";


export default function ExperienceBlockForm({ showMore, handleShow, formData, onInputChange }) {
    return (
        <div className="main">
            <form>
                <h2>Experience</h2>
                <button type="button" onClick={handleShow}>
                    {showMore ? 'Hide' : 'Show'} details
                </button>
                {showMore && (
                    <div>
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
                    </div>
                )}
            </form>
        </div>
    );
}
