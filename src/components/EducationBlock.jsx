export default function EducationBlockForm({ formData, onInputChange }) {
    return (<div className="main">
        <form>
            <h2>Education</h2>
            <input type="text"  placeholder="Arseny Teplyakov"/>
            <input type="tel" placeholder="+375(33)333-33-33"/>
            <input type="email" placeholder="arseny-teplyakov@mail.ru"/>
            <input type="text" placeholder="Minsk, BY"/>
        </form>
    </div>)
}