'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { LuChevronDownCircle } from "react-icons/lu";

const faqData = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards,google Pay, and bank transfers."
  },
  {
    question: "When will I be charged?",
    answer: "Your payment will be processed at the time of booking. Any additional charges, such as extended rental periods or damages, will be billed at the end of your rental period."
  },
  {
    question: "Can I extend my rental period?",
    answer: "Yes, you can extend your rental by contacting us before your current rental period ends. Additional charges will apply."
  },
  {
    question: "Can I choose a specific delivery time?",
    answer: "We offer flexible delivery times and will work with you to schedule a convenient time for delivery and setup."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver to most major cities and surrounding areas. Please check our delivery coverage map or contact us for specific locations."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your order up to 24 hours before the scheduled delivery for a full refund. Cancellations made within 24 hours of delivery will incur a cancellation fee."
  },
  {
    question: "How do I get a refund?",
    answer: "Refunds for cancellations and deposits will be processed within 5-7 business days after the cancellation or return of the equipment."
  },
  {
    question: "Do I need to clean the equipment before returning it?",
    answer: "Yes, please ensure the equipment is clean and in good condition. A cleaning fee may be applied for excessively dirty equipment."
  },
  {
    question: "What if the equipment malfunctions?",
    answer: "If you encounter any issues with the equipment, contact our support team immediately. We will provide assistance or arrange a replacement if necessary."
  },
  {
    question: "Are there any safety guidelines I should follow?",
    answer: "Yes, each piece of equipment comes with a user manual and safety guidelines. Please read and follow these instructions to ensure safe usage."
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-center py-32 " id="faq">
      <h2 className="text-2xl font-extrabold text-white">Frequently Asked Questions</h2>

      <div className="grid grid-cols-1 gap-6 w-1/2 mt-12 justify-center mx-auto">

        {faqData.map((item, index) => (
          <div
            key={index}
            className="group rounded-xl border
            bg-zinc-900
             border-gray-300 p-6 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <dt className="flex items-center mb-4">
           
              <p className="font-semibold text-lg text-white">{item.question}</p>
       
               <LuChevronDownCircle
                className={`ml-auto transition-transform
                  text-white text-3xl
                  duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
              /> 
            </dt>
            <dd
              className={`text-lg font-light mt-6 text-white ${activeIndex === index ? 'block' : 'hidden'}`}
            >
              <p>{item.answer}</p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
