import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
/*
this piece of code below creates an array called boards
populates the array based on numBoards which is set in 
index.js file, isSelected controls which box is highlighted.


to solve this lab I need to have isSelected iteriate through the array as the 
user clicks toggle and when they reach the end of the array it loops back to
the start. I know I can use useState to help iterate, need to check out recording 
from last lecture.
*/
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === 0; // try to edit this piece of code to get desired affect
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  /* 
  the function below is going to be an the event handler for the toggle button
  whenever the toggle button is clicked by the user it will highlight the next 
  box in line.
  */

  const handleClick = (event) => {
    console.log("this button was pressed");
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>  
    </div>
  );   // button will use handleClick function to keep track of when button is pressed 
}

export default BoardSwitcher;
