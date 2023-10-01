import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,Text } from "@chakra-ui/react";

export const HomeFAQ = () =>{

    const faqs = [
        {
            question: "What are the hospital's visiting hours?",
            answer: "Visiting hours are from 9:00 AM to 8:00 PM every day. However, some units may have specific visiting hours, so please check with the front desk for details."
        },
        {
            question: "How do I schedule an appointment with a specialist?",
            answer: "To schedule an appointment with a specialist, you can call our appointment line at [phone number] or use our online appointment booking system on our website. Our staff will assist you in finding the right specialist and a suitable appointment slot."
        },
        {
            question: "Which insurance plans does the hospital accept?",
            answer: "We accept a wide range of insurance plans, including [list of accepted insurance plans]. Our billing department will work with your insurance provider to ensure a smooth billing process."
        },
        {
            question: "What medical services does the hospital offer?",
            answer: "Our hospital offers a comprehensive range of medical services, including general medicine, surgery, pediatrics, cardiology, orthopedics, and more. We also provide diagnostic services, rehabilitation, and emergency care."
        },
        {
            question: "How can I access my medical records online?",
            answer: "You can access your medical records online through our secure patient portal. Please visit our website and log in using your credentials to view and manage your health information."
        },
        {
            question: "What should I do in case of a medical emergency?",
            answer: "In case of a medical emergency, please call 911 immediately. Our hospital's emergency department is open 24/7 to provide prompt medical attention."
        },
        {
            question: "Can I provide feedback or file a complaint about my hospital experience?",
            answer: "Yes, we value your feedback. You can provide feedback or file a complaint by contacting our patient relations department at [email address or phone number]. We are committed to addressing your concerns and improving our services."
        },
        {
            question: "Is there a pharmacy on-site?",
            answer: "Yes, we have an on-site pharmacy located in the main lobby of the hospital. Our pharmacy is open during regular hospital hours to fill prescriptions and provide medication information."
        }
    ];
    

    return(
            <Box m={10} w="90%">
                <Text fontSize="3xl" fontWeight="bold" mb={8}>
                    Frequently Asked Questions
                </Text>
                <Accordion allowToggle>
                    {faqs.map((faq, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontSize="lg" fontWeight={600} p={3}>
                                        {faq.question}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text fontSize="lg" p={3}>
                                {faq.answer}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    ))}
                </Accordion>
            </Box>
    )

}