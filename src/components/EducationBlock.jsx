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
                        onInputChange={onInputChange} placeholder="Minsk, BY"
                    />
                </div>}
            </form>
        </div>
    );
}
