import "../../styles/CVStyle.scss"

export default function PersonalInfo ({formData}) {
    return (
        <div className="personal-information">
            <h1 className="personal-name">{formData.name}</h1>
            <div className="personal-info">
                <span>{formData.phone}</span>
                <span>{formData.email}</span>
                <span>{formData.address}</span>
            </div>
        </div>
    )
}