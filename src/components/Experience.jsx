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
                            name="startDate" 
                            value={formData.startDate} 
                            onInputChange={onInputChange} 
                        />

                        <CustomInput 
                            type="date" 
                            name="endDate" 
                            value={formData.endDate} 
                            onInputChange={onInputChange} 
                        />

                        <CustomInput 
                            type="text" 
                            name="location" 
                            value={formData.location} 
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
