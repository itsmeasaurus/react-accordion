import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

const accordionItem = ({children}:Props) => {
    return (
        <div className="accordion-item">
            {children}
        </div>
    )
}

export default accordionItem;