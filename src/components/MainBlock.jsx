import GeneralInfoForm from "./GeneralInfo"
import CVBlock from "./CV"

export default function MainBlockForm() {
    return (<div className="main-block">
        <div className="content-block">
            <div className="addition-info-block"> 
                <GeneralInfoForm/>
            </div>
            <div className="info-block">
                <CVBlock/>
            </div>
        </div>
    </div>)
}