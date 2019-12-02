import React from 'react'

/**
 * creating TodoForm function and passing props to allow handlers to 
 * act on the form
 */
const TodoForm = props = > {
   return (
      <form>
         <input>
            /**
             * Input specs:
             * type, name, value(via props), placeholder, onChange
             */
            type="text"
            name="todo"
            value={props.value}
            placeholder="let's  begin the workflow! ...todo"
            onChange= "" 
         
         </input>
   )
}