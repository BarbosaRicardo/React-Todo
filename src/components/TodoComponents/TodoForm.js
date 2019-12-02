import React from 'react'

/**
 * creating TodoForm function and passing props to allow handlers to 
 * act on the form
 */
const TodoForm = props => {
   return (
      <form>
         <input
            // Input specs:
            // type, name, value(via props), placeholder, onChange
            type="text"
            name="todo"
            value={props.value}
            placeholder="...todo"
            onChange={props.onChangeHandler}
         />
         <button onClick={props.addTodoHandler}>Add To-do Item</button>
         <button onClick={props.clearTodoHandler}>Clear Finished Items</button>

      </form>
   )
};

export default TodoForm