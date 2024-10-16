import '../../styles/EducationExperienceStyle.scss'

export default function BtnSaveDel ({onSave, onDelete}) {
    return (
        <div className="btn-container">
            <button type="button" className="btn-save" onClick={onSave}>Save</button>
            <button type="button" className="btn-delete" onClick={onDelete}>Delete</button>
        </div>
    )
}