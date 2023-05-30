import React from "react";

function IfElse() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = 'Hello World!';
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let true1 = true
  let false1 = false

  console.log('If else');
 if(true1) {
    console.log('true1');
 }

 if(!false1) {
    console.log('!false1');
 } else {
    console.log('false1');
 }
 return(
    <div>
       <h2>If Else</h2>
       { true1 && <p>true1</p> }
       { !false1 ? <p>!false1</p> : <p>false1</p> }
    </div>
 );

}

export default IfElse;
