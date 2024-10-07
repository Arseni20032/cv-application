export default function CVBlock({formData}) {
    return (<div>
        <h3>info:</h3>
        <p>{formData.name}</p>
        <p>{formData.phone}</p>
        <p>{formData.email}</p>
        <p>{formData.address}</p>
    </div>)
}