import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What services do you offer as a freelancer?",
      answer:
        "I specialize in web and app development, offering services like landing page design, blog page creation, static and dynamic websites, and custom app development.",
    },
    {
      question: "How do you charge for your services?",
      answer:
        "My pricing is based on the project type and complexity. I offer standard packages, but I can also provide custom quotes for unique requirements.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline depends on the project scope. Simple projects like a landing page can take a few days, while complex applications may take weeks. I provide a time estimate during the initial consultation.",
    },
    {
      question: "Do you offer support after the project is completed?",
      answer:
        "Yes, I offer post-project support and maintenance packages to ensure everything runs smoothly. Details can be discussed based on your needs.",
    },
    {
      question: "What do you need from me to start a project?",
      answer:
        "I’ll need details on your project requirements, any design assets or branding guidelines you have, and an initial consultation to clarify the project scope and goals.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close accordion if clicked again
    } else {
      setActiveIndex(index); // Open accordion
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg
                className={`w-6 h-6 transition-transform ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="p-5 mt-4 text-lg bg-gray-600 text-white">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
