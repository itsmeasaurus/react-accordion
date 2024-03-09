import Accordion from "./components/Accordion.tsx";
import AccordionItem from "./components/AccordionItem.tsx";
import AccordionButton from "./components/AccordionButton.tsx";
import AccordionMessage from "./components/AccordionMessage.tsx";

function App()
{
    return (
        <Accordion>
            <AccordionItem>
                <AccordionButton forNum='One'></AccordionButton>
                <AccordionMessage forNum='One'>
                    <strong>This is the first item's accordion body.</strong>
                </AccordionMessage>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton forNum='Two'></AccordionButton>
                <AccordionMessage forNum='Two'>
                    <strong>This is the second item's accordion body.</strong>
                </AccordionMessage>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton forNum='Three'></AccordionButton>
                <AccordionMessage forNum='Three'>
                    <strong>This is the third item's accordion body.</strong>
                </AccordionMessage>
            </AccordionItem>
        </Accordion>
    )
}

export default App;