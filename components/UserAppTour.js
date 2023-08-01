"use client";

// Next Imports
import { useRouter } from "next/navigation";
// React
import React, { useState } from "react";

// React Tour
import { TourProvider } from "@reactour/tour";

export default function UserAppTour({ children }) {
    // React Tour config
    const [step, setStep] = useState(0);

    // Tour Steps
    const reactTourSteps = [
        // Step 0 -/
        {
            selector: "[data-tour='get-started-link']",
            content: "Click the home button to return to the home page.",
        },
        {
            selector: "[data-tour='statamic-logo']",
            content: "Click the Statamic icon to return to the home page.",
        },
        {
            selector: "[data-tour='feature-task-scheduling-2']",
            content: "Click the feature card to learn more about it.",
        },
        {
            selector: "[data-tour='feature-database-backups.-5']",
            content: "Click the feature card to learn more about it.",
        },
    ];

    // Set up router
    const router = useRouter();

    const setCurrentStep = (step) => {
        // You need to add route changes before and after route changes
        // This is to allow users to go back and forth between pages
        switch (step) {
            case 0:
                router.push("/");
                break;
            default:
                break;
        }
        setStep(step);
    };

    // Styling
    const borderRadius = 10;

    return (
        <TourProvider
            className="my-4 ml-8 w-72 sm:w-full"
            currentStep={step}
            showDots={false}
            disableDotsNavigation
            scrollSmooth
            setCurrentStep={setCurrentStep}
            steps={reactTourSteps}
            styles={{
                popover: (base) => ({
                    ...base,
                    "--reactour-accent": "#6366f1",
                    borderRadius: borderRadius,
                    marginRight: "2rem",
                }),
                maskArea: (base) => ({ ...base, rx: borderRadius }),
            }}>
            {children}
        </TourProvider>
    );
}
