import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h3
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer" }}
            >
                {title}
            </h3>
            {isOpen && <p>{content}</p>}
        </div>
    );
};

export default Accordion;