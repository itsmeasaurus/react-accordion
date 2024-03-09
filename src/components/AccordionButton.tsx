interface Props {
    forNum: string
}

const accordionButton = ({forNum}:Props) => {

    return (
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={'#collapse'+forNum} aria-expanded="true" aria-controls={'collapse'+forNum}>
                Accordion Item #{forNum}
            </button>
        </h2>
    )
}

export default accordionButton;