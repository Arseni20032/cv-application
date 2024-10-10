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
                    <CustomInput 
                        type="text" 
                        name="education" 
                        value={formData.education} 
                        onInputChange={onInputChange}  
                        placeholder="Enter school / university"
                    />

                    <CustomInput 
                        type="date" 
                        name="startDateEducation" 
                        value={formData.startDateEducation} 
                        onInputChange={onInputChange}
                    />

                    <CustomInput 
                        type="date" 
                        name="endDateEducation" 
                        value={formData.endDateEducation} 
                        onInputChange={onInputChange}
                    />

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
