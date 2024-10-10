// A section to add general information such as name, email and phone number. 

import CustomInput from "./CustomInput"

export default function GeneralInfoForm({ formData, onInputChange }) {
    return (
    <div className="main">
        <form>
            <h2>Personal information</h2>
            <div>
                <label>Full name:</label>
                <CustomInput 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onInputChange={onInputChange} 
                    placeholder="Arseny Teplyakov"
                />
                <label>Phone number:</label>
                <CustomInput 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onInputChange={onInputChange}
                    placeholder="+375(33)333-33-33" 
                />
                <label>Email:</label>
                <CustomInput 
                    type="email" 
                    name="email" 
                    value={formData.email}  
                    onInputChange={onInputChange} 
                    placeholder="arseny-teplyakov@mail.ru"
                />
                <label>Address:</label>
                <CustomInput 
                    type="text" 
                    name="address" 
                    value={formData.address}  
                    onInputChange={onInputChange} 
                    placeholder="Minsk, BY"
                />
            </div>
            
        </form>
    </div>)
}