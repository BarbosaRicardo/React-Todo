import React from 'react'
import { Button, ButtonGroup, } from 'react-bootstrap';

/**
 * creating TodoForm function and passing props to allow handlers to 
 * act on the form
 */
const TodoForm = props => {
   return (
      <form>
         <label>
         <input
            // Input specs:
            // type, name, value(via props), placeholder, onChange
            type="text"
            name="todo"
            value={props.value}
            placeholder="...todo"
            onChange={props.onChangeHandler}
         />
         </label>
      <ButtonGroup className="mr-2">
         <Button variant="primary" onClick={props.addTodoHandler}>Add To-do Item</Button>
         <Button variant ="danger" onClick={props.clearTodoHandler}>Clear Finished Items</Button>
      </ButtonGroup>
         

      </form>
   )
};

export default TodoForm;