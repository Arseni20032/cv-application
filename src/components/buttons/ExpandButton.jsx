import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import { ReactComponent as Minis } from "../../assets/images/minus.svg";

export default function ExpandButton({ handleShow, heading, showMore }) {
    return (
        <button className="expand-section" onClick={handleShow}>
            <h2>{heading}</h2>
            {showMore ? <Minis /> : <Plus />}
        </button>
    );
}
