import React, { Children, useRef, useState } from "react";
import styled from "styled-components";
import Chevron from "./Chevron";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./accordion.css";
type IsCode = "True" | "False";

type Props = {
  title?: string;
  text?: string;
  isCode?: IsCode;
  items?: {
    title: string;
    content: string;
  };
  children: React.ReactElement[];
};

export const Accordion: React.FC<Props> = ({
  title,
  text,
  isCode,
  children,
  items,
}) => {
  console.log(children);

  // children.map((item) => console.log(item.props));
  // console.log(children[0].props);
  const AccordionTitle = children[0].props.children;
  const AccordionBodyText = children[1].props.children;

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef<HTMLInputElement>(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `25rem`);
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        {AccordionTitle}
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {isCode === "True" ? (
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {AccordionBodyText}
          </SyntaxHighlighter>
        ) : (
          <>{AccordionBodyText}</>
        )}
      </div>
    </div>
  );
};

type HeaderProps = {
  children: React.ReactNode;
  title: string;
};

export const AccordionHeader: React.FC<HeaderProps> = ({ children, title }) => {
  // console.log("PROPS" + children?.toString());
  const testingthis = children?.toString();
  return (
    <div>
      <h1>{testingthis}</h1>
    </div>
  );
};

export const AccordionBody: React.FC = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

// export const Accordion = (props) => {
//   const [setActive, setActiveState] = useState("");
//   const [setHeight, setHeightState] = useState("0px");
//   const [setRotate, setRotateState] = useState("accordion__icon");

//   const content = useRef(null);

//   function toggleAccordion() {
//     setActiveState(setActive === "" ? "active" : "");
//     setHeightState(
//       setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
//     );
//     setRotateState(
//       setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
//     );
//   }

//   return (
//     <div className="accordion__section">
//       <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
//         <h1 className="accordion__title">{props.title}</h1>
//         <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
//       </button>
//       <div
//         ref={content}
//         style={{ maxHeight: `${setHeight}` }}
//         className="accordion__content"
//       >
//         <div
//           className="accordion__text"
//           dangerouslySetInnerHTML={{ __html: props.content }}
//         />
//       </div>
//     </div>
//   );
// };
