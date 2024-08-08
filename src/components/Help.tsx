import React from "react";
import { Accordion } from "rsuite";
import "rsuite/Accordion/styles/index.css";
const Help = () => {
  return (
    <div className="h-screen p-4">
      <h1 className="text-[#ec4755] text-center text-[2rem] my-4 font-bold  ">
        Help
      </h1>

      <div className="grid place-items-center px-8">
        <Accordion bordered className="w-full">
          <Accordion.Panel header="What courses do you offer?" defaultExpanded>
            <p>
              We offer a variety of courses including Web Development, Mobile
              App Development, and Cloud Computing. Each course is designed to
              provide hands-on experience and insights from industry experts.
            </p>
          </Accordion.Panel>
          <Accordion.Panel header="What is the duration of the courses?">
            <p>
              The duration of our courses varies depending on the subject. Most
              of our courses are designed to be completed in 6 months, but we
              offer flexible options to accommodate different learning paces.
            </p>
          </Accordion.Panel>
          <Accordion.Panel header="Are there any prerequisites for enrolling in the courses?">
            <p>
              Some courses may have prerequisites or require a basic
              understanding of related concepts. Please refer to the specific
              course details for information on any prerequisites.
            </p>
          </Accordion.Panel>
          <Accordion.Panel header="How can I contact support if I have questions?">
            <p>
              You can contact our support team via email at support@example.com
              or call us at (123) 456-7890. Our team is available to assist you
              with any questions or concerns you may have.
            </p>
          </Accordion.Panel>
          <Accordion.Panel header="What payment methods are accepted?">
            <p>
              We accept various payment methods including credit/debit cards,
              PayPal, and bank transfers. For detailed payment options, please
              visit our payment page.
            </p>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Help;
