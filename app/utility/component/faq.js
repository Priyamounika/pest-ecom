import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"


const faq = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 container mx-auto py-5 px-5 md:px-10">
      <div className="text-black w-full md:w-1/2">
        <div className="flex mb-2">
          <div className="px-3 py-2 border w-fit rounded-full bg-white flex items-center justify-center gap-2">
            <img
              src="/Testi/star.png"
              alt="star"
              className="w-[17px] h-[17px] object-cover"
            />
            <p className="text-sm text-black">FAQ'S</p>
          </div>
        </div>
        <h1 className="text-[22px] md:text-[46px] font-medium">
          Frequently asked
          <span className="text-primary"> questions.</span>
        </h1>
        <p className="text-lg md:text-[18px] text-[#333431]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="text-lg md:text-[18px] py-4">
        Frequently asked Questions.
          <span className="text-primary"> Didn't find the anwser?</span>
        </p>
        <button className="mt-4 active:opacity-20 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors bg-primary text-white h-14 px-14 rounded-full">
        Ask Questions
        </button>
      </div>
      {/* RIGHT */}
      <div className="text-black w-1/2">
      {/* <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

</Accordion> */}
Accordian
      </div>
    </div>
  );
};

export default faq;
