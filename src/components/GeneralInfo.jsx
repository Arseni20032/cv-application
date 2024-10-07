// A section to add general information such as name, email and phone number. 

export default function GeneralInfoForm({ formData, onInputChange }) {
    return (<div className="main">
        <form>
            <h2>Personal information</h2>
            <input type="text" name="name" value={formData.name} placeholder="Arseny Teplyakov" onChange={onInputChange}/>
            <input type="tel" name="phone" value={formData.phone} placeholder="+375(33)333-33-33" onChange={onInputChange}/>
            <input type="email" name="email" value={formData.email} placeholder="arseny-teplyakov@mail.ru" onChange={onInputChange}/>
            <input type="text" name="address" value={formData.address} placeholder="Minsk, BY" onChange={onInputChange}/>
        </form>
    </div>)
}