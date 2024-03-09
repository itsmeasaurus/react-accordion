import {ReactNode} from "react";

interface Props {
    children: ReactNode
}
const accordion = ({children}:Props) => {
    return (
        <div className="accordion" id="accordionExample">
            {children}
        </div>
    )
}

export default accordion;