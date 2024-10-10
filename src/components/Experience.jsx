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
                        <CustomInput 
                            type="text" 
                            name="experience" 
                            value={formData.experience} 
                            onInputChange={onInputChange} 
                            placeholder="Enter your experience" 
                        />

                        <CustomInput 
                            type="date" 
                            name="startDateExperience" 
                            value={formData.startDateExperience} 
                            onInputChange={onInputChange} 
                        />

                        <CustomInput 
                            type="date" 
                            name="endDateExperience" 
                            value={formData.endDateExperience} 
                            onInputChange={onInputChange} 
                        />

                        <CustomInput 
                            type="text" 
                            name="locationExperience" 
                            value={formData.locationExperience} 
                            onInputChange={onInputChange} 
                            placeholder="Minsk, BY" 
                        />

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
