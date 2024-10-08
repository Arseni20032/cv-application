export default function ExperienceBlockForm({showMore, handleShow, formData, onInputChange }) {
    return (<div className="main">
        <form>
            <h2>Experience</h2>
            <button type="button" onClick={handleShow}>
                    {showMore ? 'Hide' : 'Show'} details
                </button>
                {showMore && 
                <div>
                    <div>
                        <input type="text" name="education" value={formData.experience} placeholder="Enter school / university" onChange={onInputChange}/>
                    </div>
                    <div>
                        <input type="date" name="startDate" value={formData.startDate} onChange={onInputChange}/>
                    </div>
                    <div>
                        <input type="date" name="endDate" value={formData.endDate} onChange={onInputChange}/>
                    </div>
                    <div>  
                        <input type="text" name="location" value={formData.location} placeholder="Minsk, BY" onChange={onInputChange}/>
                    </div>
                    <div>
                        <input type="textarea" name="description" value={formData.description} placeholder="Minsk, BY" onChange={onInputChange}/>
                    </div>
                </div>}
        </form>
    </div>)
}