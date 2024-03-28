import React from "react";
import About_card from "./About_card";

function About() {
    return (
        <>
            <h1 className="heading">About us</h1>
            <div className="about">
                <About_card
                    head="Qualified Doctors"
                    para="Meet our qualified doctors – the superheroes of healthcare! With minds as sharp as scalpels and hearts brimming with compassion, they're the frontline warriors in your battle for health. Trained to perfection, they wield their expertise like magic wands, turning diagnoses into recoveries and worries into smiles. From intricate surgeries to comforting bedside chats, they're here to guide you through every step of your health journey. Trust in their skill, lean on their empathy, and together, let's script a tale of triumph over adversity!"
                />
                <About_card
                    head="Medical Counsulting"
                    para=
                    "Introducing our medical consulting card, your gateway to expert healthcare guidance. With precision and empathy, our qualified doctors stand ready to address your concerns and guide you towards optimal health. From insightful diagnoses to personalized treatment plans, trust in our team to navigate your medical journey with care and expertise. Let us be your partners in health, empowering you to make informed decisions and achieve the well-being you deserve."
                />
                <About_card
                    head="Emergency Service"
                    para="Welcome to our emergency service card, your lifeline in critical moments. With swift action and unwavering dedication, our team of skilled professionals is here to provide immediate assistance when every second counts. From trauma care to urgent medical interventions, trust in our expertise to stabilize and support you through any crisis. Your safety and well-being are our priority, and we're here 24/7 to ensure you receive the urgent care you need, when you need it most."
                />
        
            </div>


        </>


    );
}

export default About;