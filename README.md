1.What is JSX, and why is it used?

===> JSX (JavaScript XML) is a syntax extension for JavaScript used with React. It allows to write HTML-like code in JavaScript, making it easier to describe the UI.

===> Why it's used: It improves code readability and makes it easier to write and visualize component structure.

2.What is the difference between State and Props?

<---Definition--->
State: Data managed within a component.
Props: Data passed from parent to child.

<---Mutability--->
State: Mutable (can change over time).
Props: Immutable (read-only).

<---Usage--->
State: For internal component changes.
Props: For configuring child components.

3.What is the useState hook, and how does it work?

===> useState is a React Hook that lets functional components have local state.

Syntax: const [count, setCount] = useState(0);

=> count: current state value.
=> setCount: function to update the state.
=> 0: initial value.

4.How can you share state between components in React?

===> Lifting state up: Move the state to the nearest common parent and pass it via props.

===> Props drilling: Refers to the process of passing data (props) from a parent component down through multiple levels of child components, even if intermediate components don't need that data, just to get it to a deeply nested component.

===> Context API: For global/shared state across many components.

5.How is event handling done in React?

===> In React, event handling is done using camelCase syntax and functions, instead of using HTML attributes.

Syntax: <button onClick={handleClick}>Click Me</button>

=> onClick: React event (camelCase).
=> handleClick: JavaScript function called when the button is clicked.
