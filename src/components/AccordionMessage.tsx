import {ReactNode} from "react";

interface Props {
    forNum: string
    children: ReactNode
}

const accordionMessage = ({forNum, children}:Props) => {
    return (
        <div
            id={'collapse'+forNum}
            className="accordion-collapse collapse"
            aria-labelledby={'heading'+forNum}
            data-bs-parent="#accordionExample"
        >
            <div className="accordion-body">
                {children}
            </div>
        </div>
    )
}

export default accordionMessage