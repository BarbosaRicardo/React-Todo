import React from 'react'
import Todo from './Todo.js'

/**
 * TodoList function will pass props 
 */

 const TodoList = props => {
   return (
      <div>
         {props.todos.map(todo => (
            <Todo 
               toggleHandler={props.toggleHandler}
               key={todo.id}
               todo={todo}
            />

         ))}

      </div>
   )
 }; //end of Todolist

 export default TodoList;
 