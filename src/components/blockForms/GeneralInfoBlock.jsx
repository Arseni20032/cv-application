import CustomInput from "../CustomInput";
import "../../styles/GeneralInfoStyle.scss";

export default function GeneralInfoBlock({ formData, onInputChange }) {
    return (
        <div className="main">
            <form className="form-content">
                <h2 className="header-2">Personal information</h2>
                <div className="content">
                    <CustomInput
                        type="text"
                        name="name"
                        value={formData.name}
                        onInputChange={onInputChange}
                        placeholder="Arseny Teplyakov"
                        labelName="Full name:"
                    />

                    <CustomInput
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onInputChange={onInputChange}
                        placeholder="+375(33)333-33-33"
                        labelName="Phone number:"
                    />

                    <CustomInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onInputChange={onInputChange}
                        placeholder="arseny-teplyakov@mail.ru"
                        labelName="Email:"
                    />

                    <CustomInput
                        type="text"
                        name="address"
                        value={formData.address}
                        onInputChange={onInputChange}
                        placeholder="Minsk, BY"
                        labelName="Address:"
                    />
                </div>
            </form>
        </div>
    );
}
