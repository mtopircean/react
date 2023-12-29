import React from "react";
/* not needed in latest react versions */

// function FunctionalGreetingWithProps() {
//     return <h1>Hello!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
return <h1>Hello {props.name}! I see you`re {props.age} old; {props.greeting}</h1>;
}

// const FunctionalGreeting: This line declares a constant variable named FunctionalGreeting. In JavaScript, const is used to declare a variable that cannot be reassigned after it's initially set. In this case, it's assigned an arrow function.

// () =>: This is the arrow function syntax in JavaScript. It's a concise way to define a function. In this case, it's an anonymous arrow function that takes no arguments because the parentheses () are empty.

// <h1>Hello from React!</h1>: This is JSX (JavaScript XML) syntax used in React to define a piece of user interface. It represents an HTML <h1> element with the text "Hello from React!" inside it.

// ;: This is a semicolon, which is used to terminate the statement. In JavaScript, you can often omit semicolons at the end of lines, but they are considered a good practice to avoid potential issues

export default FunctionalGreetingWithProps;
