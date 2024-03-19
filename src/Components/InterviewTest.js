import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";

//first question
// const NoPage = () => {
//   const [counter, setCounter] = useState(5);
//   return (
//     <>
//       <span>{counter}</span>
//       <button onClick={() => {
//         setCounter(counter + 5);
//         setCounter(counter + 5);
//         alert(counter);
//         setCounter(counter + 5);
//         setCounter(counter + 5);
//       }}>Increment</button>
//     </>
//   )
//   };

//   Ans would be alert will have 5 value and in the BrowseGallery,counter will have 10
// State values are fixed(i.e, default value 5) in each render and
// setting the state only changes it for the next render. React will wait untill all the code executed
// with in an event handlerbefore your state updates follwed by re-rendering the UI.
//  Also, all the 3 setter function calls are replacing the calculated value. Hence,
//   irrespective of how many times you call setCounter(counter + 5) the final value is 10(5+5).

//2.question

// export default function InterviewTest() {
//   const [counter, setCounter] = useState(5);

//   return (
//     <>
//       <span>{counter}</span>
//       <button onClick={() => {
//         setCounter(counter => counter + 5);
//         setCounter(counter => counter + 5);
//         alert(counter);
//         setCounter(counter => counter + 5);
//         setCounter(counter => counter + 5);
//       }}>Increment</button>
//     </>
//   )
// };

//Ans alert 5 and in browser 25(Alert with 5, 25)
// React queues all the updater functions(e.g, counter => counter + 5)which will be processed after
// all the code inside event handler has been executed.During the next re-render(state update through setState),
// React goes through the queue and increment the counter based on the previous value in each function call.
// So the final value of counter becomes 25(initial value 5 + 5 + 5 + 5 + 5) whereas the alert shows
// default value 5 because the counter value won't be updated by that time.

// export default function InterviewTest() {
//   let countRef = useRef(0);

//   function handleIncrement() {
//     countRef.current = countRef.current + 1;
//   }

//   return(
//   <>
//     <span>Count: {countRef.current}</span>
//     <button onClick={handleIncrement}>
//       Click me
//     </button>
//   </>
//   )
// }

//ANS -  Count: 0
// In React, every update has two phases.
// Render: This is where React calls the components in order to output something on the screen
// Commit: React applies changes to the DOM
// Any updates to the ref will be reflected only in the commit phase.In other words,React sets
// counterRef.current during the commit phase. Hence,countRef.current always holds value 0
//  irrespective of how many times the Increment button clicked.

//  export default function InterviewTest() {
//   const inputRef = useRef(null);

//   function MyCustomInput(props) {
//     return <input {...props} />;
//   }

//   function handleInputFocus() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <MyCustomInput ref={inputRef} />
//       <button onClick={handleInputFocus}>
//         Click Me
//       </button>
//     </>
//   );
// }

//By default, React does not allow a component access the DOM nodes of other components even for child components.
// If you still try to access the DOM nodes directly then you will receive below error:
// Warning: Function components cannot be given refs.
// Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

// export default function InterviewTest() {

// }

function Babita(props) {
  console.log(props.children, "propschildren");
  return props.children;
}

export default function InterviewTest() {
  return (
    <Babita>
      <h1>Hi</h1>
    </Babita>
  );
}
