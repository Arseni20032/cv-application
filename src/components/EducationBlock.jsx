// EducationBlockForm.jsx
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
                    <div>
                        <input type="text" name="education" value={formData.education} placeholder="Enter school / university" onChange={onInputChange}/>
                    </div>
                    <div>
                        <input type="date" name="startDate" value={formData.startDate} onChange={onInputChange}/>
                    </div>
                    <div>
                        <input type="date" name="endDate" value={formData.EndDate} onChange={onInputChange}/>
                    </div>
                    <div>  
                        <input type="text" name="location" value={formData.location} placeholder="Minsk, BY" onChange={onInputChange}/>
                    </div>
                </div>}
            </form>
        </div>
    );
}
