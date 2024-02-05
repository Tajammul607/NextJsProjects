import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordinPage = () => {

    const Faq = [
        {
            "question": "What's new in ShadCN",
            "Answer": " Its make life easier for developer who stuck with CSS"
        },
        {
            "question" : "Is it accessible?",
            "Answer": "Yes. It adheres to the WAI-ARIA design pattern."
        },
        {
            "question" : "Is it styled?",
            "Answer": "Yes. It comes with default styles that matches the other components' aesthetic."
        },
        {
            "question" : "Is it animated?",
            "Answer": "Yes. It's animated by default, but you can disable it if you prefer."
        }, {
            "question" : "If you need any sortta of assist",
            "Answer": "Feel, free to connect me"
        },
    ]
    return (
        <div className="flex justify-center items-center h-full">
            {Faq.map((data) => (
                <main className="w-[500px] p-4" key={data.question}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{data.question}</AccordionTrigger>
                            <AccordionContent>
                                {data.Answer} 
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </main>
                
            ))}
         </div>
   
    )
}

export default AccordinPage