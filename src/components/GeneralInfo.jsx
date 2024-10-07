// A section to add general information such as name, email and phone number. 

export default function GeneralInfoForm() {
    return (<div className="main">
        <form>
            <h2>Personal information</h2>
            <input type="text"  placeholder="Arseny Teplyakov"/>
            <input type="tel" placeholder="+375(33)333-33-33"/>
            <input type="email" placeholder="arseny-teplyakov@mail.ru"/>
            <input type="text" placeholder="Minsk, BY"/>
        </form>
    </div>)
}