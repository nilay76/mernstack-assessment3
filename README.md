

2) How react renders dom in conservative manner:
    When an application starts up, React will render the application for the first time with state and props.
Whenever a state change occurs, rather than re-render the entire DOM everytime, React only re-renders
the part of the DOM that is changed/updated. React creates the DOM tree structure, along with a virtual DOM,
and when re-rendering needs to be done, it uses a very efficient diffing algorithim to only change the parts of the
DOM that needs to be changed to maintain state.

7) Virtual DOM are representation of the existing DOM that React creates. One of the key points of React is to
maintain state. Virtual DOM allows it to perform this task in an efficient manner by not using the existing
DOM in rendering changes when they occur. As React has the Virtual DOM, it will compare the changes with the
virtual DOM and then only the difference will be rendered to the actual DOM in the most efficient way that React can find
using a diffing algorithim. After this, the virtual DOM will be updated to the new state, to keep up with the actual DOM.
And then on next change in state, the process will repeat.

8)